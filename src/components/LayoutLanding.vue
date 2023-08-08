<template>
    <div class="layout bg-white">
        <div class="header">
            <div class="header-image">
                <img
                    src="~assets/cff-logo.svg"
                    alt="cffinit logo"
                >
            </div>
        </div>
        <main class="container">
            <div class="row">
                <div class="col-sm-6 col-xs-12 q-pa-lg slide-in-from-left-animation">
                    <div
                        align="left"
                        class="q-gutter-md q-mb-xl"
                        style="font-size: 1.3rem"
                    >
                        <h1>Generate your citation metadata files with ease</h1>
                        <p>
                            <code class="decoration">CITATION.cff</code>
                            files are plain text files with human- and machine-readable citation information for software and datasets.
                        </p>
                        <p>Code developers can include such files in their source code repositories to let others know how to correctly cite their software.</p>
                        <p>
                            You can read more about the Citation File Format in the
                            <a
                                class="document"
                                href="https://citation-file-format.github.io"
                                target="_blank"
                            >
                                official CFF specification website.
                            </a>
                        </p>
                    </div>
                </div>
                <img
                    class="col-sm-6 col-xs-12 q-pa-lg illustration slide-from-right-animation"
                    src="~assets/landing-image.svg"
                    alt=""
                >
            </div>
            <div class="row justify-center items-center q-pt-md q-mb-xl">
                <div class="column items-center slide-up-animation">
                    <div
                        class="q-mb-md"
                        style="font-size: 1.2rem"
                    >
                        Create your CITATION.cff now, or start from an existing file!
                    </div>
                    <div class="justify-center q-gutter-md">
                        <q-btn
                            aria-label="Create your CITATION.cff file"
                            class="start-button bg-primary"
                            data-cy="btn-create"
                            label="Create"
                            icon="add"
                            no-caps
                            size="xl"
                            to="/start"
                        />
                        <q-btn
                            aria-label="Update your CITATION.cff file"
                            class="start-button bg-primary"
                            data-cy="btn-update"
                            label="Update"
                            icon="edit"
                            no-caps
                            size="xl"
                            to="/update"
                        />
                    </div>
                </div>
            </div>
            <span class="text-right text-black text-body1">
                Version 2.3.1
            </span>
        </main>
    </div>
</template>

<script lang="ts">

import { defineComponent } from 'vue'

export default defineComponent({
    name: 'LayoutLanding',

    setup () {
        return {
        }
    }
})
</script>

<style scoped>
h1 {
    font-size: 3rem;
    line-height: 3.125rem;
    letter-spacing: normal;
}
.layout{
    display: flex;
    flex-direction:column;
    align-items: center;
    width: 100vw;
    min-height: 100vh;
    overflow: hidden;
}

.header{
    max-width: 1919px;
    width: 100%;
    max-width: 1919px;
}

.container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1439px;
    flex: 1;
}

.header-image{
    display: flex;
    margin-top: 40px;
    padding: 10px 20px;
    width: 500px;
    border-radius: 5px 30px 30px 5px;
    background: #F7F7FA;
    box-shadow: 87.041px 34.8164px 58.0273px rgba(53, 104, 212, 0.08);
}

.decoration{
    background: linear-gradient(100deg, rgba(62, 123, 250, 0.234) 32.63%, rgba(62, 123, 250, 0.0936) 93.01%);
    border-radius: 4px;
    padding: 6px;
}

.illustration{
    object-fit: contain;
    transform: translate(0px,0px);

}
@media (min-width:768px) {
    .illustration {
        transform: translate(110px, -50px);
    }
    .slide-from-right-animation{
        animation: 1500ms ease 0s 1 slideInFromRight;
    }
    .slide-in-from-left-animation{
        animation: 500ms ease 0s 1 slideInFromLeft;
    }
    .slide-up-animation{
        animation: 1500ms ease 0s 1 slideUpAnimation;
    }
}

.start-button{
    margin-top: 15px;
    padding: 0px 40px;
    background: var(--primary);
    color: white;
    /*width:100%;*/

    border-radius:10px
}

/* Entry animations */

@keyframes slideInFromRight {
    0% {
        transform: translate(130px, -50px);
        opacity:0
    }
    100% {
        transform: translate(110px,-50px);
        opacity:1
    }
}
@keyframes slideInFromLeft {
    0% {
        transform: translateX(-20px);
        opacity:0
    }
    100% {
        transform: translateX(0);
        opacity:1
    }
}

@keyframes slideUpAnimation {
    0% {
        transform: translateY(20px);
        opacity:0
    }
    100% {
        transform: translateY(0);
        opacity:1
    }
}

</style>
