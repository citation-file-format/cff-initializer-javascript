<template>
    <q-card
        flat
        bordered
        class="bg-formcard q-pa-md"
    >
        <div class="row">
            <h3 class="subquestion">
                The person's given names
                <SchemaGuideLink anchor="#definitionspersongiven-names" />
            </h3>
        </div>
        <div class="row">
            <q-input
                autofocus
                bg-color="white"
                class="col"
                dense
                label="given-names"
                outlined
                standout
                title="The person's given names."
                v-bind:model-value="givenNames"
                v-bind:error="false"
                v-bind:error-message="''"
                v-on:update:modelValue="$emit('update', 'givenNames', $event)"
                ref="givenNamesRef"
            />
        </div>
        <div class="row">
            <h3 class="subquestion">
                The person's last names, split into parts
            </h3>
        </div>
        <div class="row">
            <q-input
                bg-color="white"
                class="col-3"
                dense
                label="name-particle"
                outlined
                standout
                title="The person's name particle, e.g., a nobiliary particle or a [preposition] meaning 'of' or 'from' (for example 'von' in 'Alexander von Humboldt')."
                v-bind:model-value="nameParticle"
                v-bind:error="false"
                v-bind:error-message="''"
                v-on:update:modelValue="$emit('update', 'nameParticle', $event)"
            >
                <SchemaGuideLink
                    anchor="#definitionspersonname-particle"
                    class="q-pt-sm"
                />
            </q-input>
            <q-input
                bg-color="white"
                class="col"
                dense
                label="family-names"
                outlined
                standout
                title="The person's family names."
                v-bind:model-value="familyNames"
                v-bind:error="false"
                v-bind:error-message="''"
                v-on:update:modelValue="$emit('update', 'familyNames', $event)"
            >
                <SchemaGuideLink
                    anchor="#definitionspersonfamily-names"
                    class="q-pt-sm"
                />
            </q-input>
            <q-input
                bg-color="white"
                class="col-3"
                dense
                label="name-suffix"
                outlined
                standout
                title="The person's name suffix, e.g. 'Jr.' for Sammy Davis Jr. or 'III' for Frank Edwin Wright III."
                v-bind:model-value="nameSuffix"
                v-bind:error="false"
                v-bind:error-message="''"
                v-on:update:modelValue="$emit('update', 'nameSuffix', $event)"
            >
                <SchemaGuideLink
                    anchor="#definitionspersonname-suffix"
                    class="q-pt-sm"
                />
            </q-input>
        </div>
        <div class="row">
            <h3 class="subquestion">
                The person's email address
                <SchemaGuideLink anchor="#definitionsperson-email" />
            </h3>
        </div>
        <div class="row">
            <q-input
                bg-color="white"
                class="col"
                dense
                label="email"
                outlined
                standout
                title="The person's email address."
                type="email"
                v-bind:model-value="email"
                v-bind:class="emailErrors.length > 0 ? 'has-error' : ''"
                v-bind:error="emailErrors.length > 0"
                v-bind:error-message="emailErrors.join(', ')"
                v-on:update:modelValue="$emit('update', 'email', $event)"
            />
        </div>
        <div class="row">
            <h3 class="subquestion col">
                The person's affiliation
                <SchemaGuideLink anchor="#definitionsperson-affiliation" />
            </h3>
            <h3 class="subquestion col">
                The person's ORCID
                <SchemaGuideLink anchor="#definitionsperson-orcid" />
            </h3>
        </div>
        <div class="row">
            <q-input
                bg-color="white"
                class="col"
                dense
                label="affiliation"
                outlined
                standout
                title="The person's affiliation."
                v-bind:model-value="affiliation"
                v-bind:error="false"
                v-bind:error-message="''"
                v-on:update:modelValue="$emit('update', 'affiliation', $event)"
            />
            <q-input
                bg-color="white"
                class="col"
                dense
                hint="Format: https://orcid.org/0000-0000-0000-0000"
                label="orcid"
                outlined
                standout
                title="The person's ORCID identifier."
                v-bind:class="orcidErrors.length > 0 ? 'has-error' : ''"
                v-bind:model-value="orcid"
                v-bind:error="orcidErrors.length > 0"
                v-bind:error-message="orcidErrors.join(', ')"
                v-on:update:modelValue="$emit('update', 'orcid', $event)"
            />
        </div>

        <q-card-actions align="right">
            <q-btn
                color="blue"
                dense
                v-bind:disable="index == 0"
                icon="ion-arrow-up"
                tabindex="-1"
                v-on:click="$emit('moveUp')"
            />
            <q-btn
                color="blue"
                dense
                v-bind:disable="index >= numAuthors - 1"
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
import { byError, emailQueries, orcidQueries } from 'src/error-filtering'
import { computed, defineComponent, onUpdated } from 'vue'
import SchemaGuideLink from 'src/components/SchemaGuideLink.vue'
import { useStepperErrors } from 'src/store/stepper-errors'
import { useValidation } from 'src/store/validation'

export default defineComponent({
    name: 'AuthorCardEditing',
    props: {
        index: {
            type: Number,
            required: true
        },
        givenNames: {
            type: String,
            default: ''
        },
        nameParticle: {
            type: String,
            default: ''
        },
        familyNames: {
            type: String,
            default: ''
        },
        nameSuffix: {
            type: String,
            default: ''
        },
        email: {
            type: String,
            default: ''
        },
        affiliation: {
            type: String,
            default: ''
        },
        orcid: {
            type: String,
            default: ''
        },
        numAuthors: {
            type: Number,
            default: 0
        }
    },
    setup (props) {
        onUpdated(() => {
            const { setErrorStateScreenAuthors } = useStepperErrors()
            setErrorStateScreenAuthors(document.getElementsByClassName('has-error').length > 0)
        })
        const { errors } = useValidation()
        const orcidErrors = computed(() => {
            return orcidQueries(props.index)
                .filter(byError(errors.value))
                .map(query => query.replace.message)
        })
        const emailErrors = computed(() => {
            return emailQueries(props.index)
                .filter(byError(errors.value))
                .map(query => query.replace.message)
        })
        return {
            emailErrors,
            orcidErrors
        }
    },
    emits: ['closePressed', 'removePressed', 'update', 'moveUp', 'moveDown'],
    components: { SchemaGuideLink }
})
</script>
<style scoped>
.row {
    display: flex;
    flex-direction: row;
    column-gap: 10px;
}
</style>
