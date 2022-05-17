<template>
    <q-card
        flat
        bordered
        class="bg-formcard q-pa-md"
    >
        <q-card-section>
            <div class="items-center no-wrap">
                <q-option-group
                    inline
                    type="radio"
                    v-bind:error="typeError.hasError"
                    v-bind:error-message="typeError.messages.join(', ')"
                    v-bind:model-value="type"
                    v-bind:options="typeOptions"
                    v-on:update:modelValue="$emit('updateType', 'type', $event)"
                />
            </div>
            <div class="q-gutter-md q-mt-md items-center no-wrap">
                <p class="question">
                    What is the value of the {{ getLinkLabel }}?
                    <SchemaGuideLink v-bind:anchor="getLinkUrl" />
                </p>
                <q-input
                    bg-color="white"
                    label="Value"
                    outlined
                    standout
                    dense
                    v-bind:error="valueError.hasError"
                    v-bind:error-message="valueError.messages.join(', ')"
                    v-bind:model-value="value"
                    v-on:update:modelValue="$emit('updateValue', 'value', $event)"
                />
            </div>
            <div class="q-gutter-md q-mt-md items-center no-wrap">
                <p class="question">
                    What is the description for the {{ getLinkLabel }}?
                    <SchemaGuideLink anchor="#definitionsidentifier-description" />
                </p>
                <q-input
                    bg-color="white"
                    label="Description"
                    outlined
                    standout
                    dense
                    v-bind:error="descriptionError.hasError"
                    v-bind:error-message="descriptionError.messages.join(', ')"
                    v-bind:model-value="description"
                    v-on:update:modelValue="$emit('updateDescription', 'description', $event)"
                />
            </div>
        </q-card-section>
        <q-card-actions align="right">
            <q-btn
                dense
                color="blue"
                v-bind:disable="index == 0"
                icon="ion-arrow-up"
                tabindex="-1"
                v-on:click="$emit('moveUp')"
            />
            <q-btn
                dense
                color="blue"
                v-bind:disable="index >= numIdentifiers - 1"
                icon="ion-arrow-down"
                tabindex="-1"
                v-on:click="$emit('moveDown')"
            />
            <q-btn
                color="negative"
                dense
                icon="delete"
                label="Remove"
                v-on:click="$emit('removePressed')"
            />
            <q-btn
                dense
                icon="done"
                label="Done"
                v-on:click="$emit('closePressed')"
            />
        </q-card-actions>
    </q-card>
</template>

<script lang="ts">
import { IdentifierTypeType, linkInfoType } from '../types'
import { computed, defineComponent, PropType } from 'vue'
import { getMyErrors } from 'src/store/validator'
import { identifierErrors } from 'src/identifier-errors'
import SchemaGuideLink from 'components/SchemaGuideLink.vue'

export default defineComponent({
    name: 'IdentifierCardEditing',
    props: {
        index: {
            type: Number,
            required: true
        },
        type: {
            type: String,
            default: ''
        },
        value: {
            type: String as PropType<IdentifierTypeType>,
            default: ''
        },
        description: {
            type: String,
            default: ''
        },
        numIdentifiers: {
            type: Number,
            default: 0
        }
    },
    components: {
        SchemaGuideLink
    },
    setup (props) {
        const linkInfo: linkInfoType = {
            doi: { linkLabel: 'DOI', linkUrl: '#definitionsdoi' },
            url: { linkLabel: 'URL', linkUrl: '#definitionsurl' },
            swh: {
                linkLabel: 'Software Heritage identifier',
                linkUrl: '#definitionsswh-identifier'
            },
            other: { linkLabel: 'identifier', linkUrl: '#definitionsidentifier-description' }
        }

        return {
            typeOptions: [
                { label: 'DOI', value: 'doi' },
                { label: 'URL', value: 'url' },
                { label: 'Software Heritage', value: 'swh' },
                { label: 'Other', value: 'other' }
            ],
            label: computed(() => linkInfo[props.type].label),
            getLinkUrl: computed(() => {
                // let reallyString = <string>props.type;
                // console.log("url props:", props.type);
                // console.log("reallyString:", reallyString);
                // return "Url"
                return linkInfo[props.type].linkUrl
            }),
            typeError: computed(() => getMyErrors(`/identifiers/${props.index}/type`)),
            valueError: computed(() => getMyErrors(`/identifiers/${props.index}/value`)),
            descriptionError: computed(() =>
                getMyErrors(`/identifiers/${props.index}/description`)
            ),
            identifierErrors: computed(() => identifierErrors(props.index)),
            SchemaGuideLink
        }
    },
    emits: [
        'closePressed',
        'removePressed',
        'updateType',
        'updateValue',
        'updateDescription',
        'moveUp',
        'moveDown'
    ]
})
</script>
<style scoped>
.row {
  display: flex;
  flex-direction: row;
  column-gap: 10px;
}
</style>
