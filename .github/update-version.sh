#!/bin/bash

function usage {
    echo -e "Usage:\n\n\tbash $0 X.Y.Z\n
cffconvert will be required. If the command exists, it will be used.
Otherwise, if you have docker installed, set USE_DOCKER=\"yes\" to use the docker image.
Alternatively, you can set CFFCONVERT to specify the binary path."
}

if [ ! $# -eq 1 ]; then
    usage
    exit 1
fi

VERSION=$1

if [[ ! "$VERSION" =~ ^[0-9]+\.[0-9]+\.[0-9]+$ ]]; then
    echo "ERROR: Wrong input format"
    usage
    exit 1
fi

if [ -n "$CFFCONVERT" ]; then
    if ! command -v "$CFFCONVERT" &> /dev/null; then
        echo "ERROR: CFFCONVERT was set to '$CFFCONVERT' but command does not exist"
        usage
        exit 1
    fi
fi

if [ -z "$CFFCONVERT" ]; then
    if command -v cffconvert &> /dev/null; then
        echo "cffconvert found"
        CFFCONVERT=cffconvert
    elif command -v docker &> /dev/null && [ "$USE_DOCKER" == "yes" ]; then
        CFFCONVERT="docker run --rm -v $PWD:/app citationcff/cffconvert"
    else
        echo "ERROR: cffconvert was not found, install it first, possibly using"
        echo -e "\n\tpython -m venv env\n\t. env/bin/activate\n\tpip install --upgrade pip setuptools cffconvert\n"
        usage
        exit 1
    fi
fi

sed -i "s/^date-released: .*$/date-released: $(date --iso)/" CITATION.cff
sed -i "s/^version: .*$/version: $VERSION/" CITATION.cff
echo "CITATION.cff updated"
$CFFCONVERT -f zenodo -o .zenodo.json
echo ".zenodo.json updated"
sed -i "s/^    \"version.*$/    \"version\": \"$VERSION\",/" package.json
sed -i "s/^    \"version.*$/    \"version\": \"$VERSION\",/" package-lock.json
echo "package.json and package-lock.json updated"
sed -i "s/Version .*$/Version $VERSION/" src/components/LayoutLanding.vue
sed -i "s/Version .*$/Version $VERSION/" src/components/Footer.vue
echo "LayoutLanding.vue and Footer.vue updated"
