<template>
    <q-card
        flat
        bordered
        class="bg-formcard"
    >
        <q-card-section>
            <div class="q-gutter-md row items-center no-wrap">
                <q-input
                    bg-color="white"
                    label="Given name(s)"
                    outlined
                    standout
                    dense
                    v-bind:model-value="givenNames"
                    v-on:update:modelValue="
                        $emit('update', 'givenNames', $event)
                    "
                    v-bind:error="errors['given-names']?.length > 0"
                    v-bind:error-message="errors['given-names'] ? errors['given-names'].join(', ') : ''"
                />
                <q-input
                    bg-color="white"
                    label="Name particle"
                    title="The person's name particle, e.g., a nobiliary particle or a [preposition] meaning 'of' or 'from' (for example 'von' in 'Alexander von Humboldt')."
                    outlined
                    standout
                    dense
                    v-bind:model-value="nameParticle"
                    v-on:update:modelValue="
                        $emit('update', 'nameParticle', $event)
                    "
                    v-bind:error="errors['name-particle']?.length > 0"
                    v-bind:error-message="errors['name-particle'] ? errors['name-particle'].join(', ') : ''"
                />
                <q-input
                    bg-color="white"
                    label="Family name(s)"
                    outlined
                    standout
                    dense
                    v-bind:model-value="familyNames"
                    v-on:update:modelValue="
                        $emit('update', 'familyNames', $event)
                    "
                    v-bind:error="errors['family-names']?.length > 0"
                    v-bind:error-message="errors['family-names'] ? errors['family-names'].join(', ') : ''"
                />
                <q-input
                    bg-color="white"
                    label="Suffix"
                    outlined
                    standout
                    dense
                    title="The person's name suffix, e.g. 'Jr.' for Sammy Davis Jr. or 'III' for Frank Edwin Wright III."
                    v-bind:model-value="nameSuffix"
                    v-on:update:modelValue="
                        $emit('update', 'nameSuffix', $event)
                    "
                    v-bind:error="errors['name-suffix']?.length > 0"
                    v-bind:error-message="errors['name-suffix'] ? errors['name-suffix'].join(', ') : ''"
                />
            </div>
            <div class="q-gutter-md items-center no-wrap">
                <q-input
                    bg-color="white"
                    label="Email"
                    outlined
                    standout
                    dense
                    type="email"
                    v-bind:model-value="email"
                    v-on:update:modelValue="
                        $emit('update', 'email', $event)
                    "
                    v-bind:error="errors.email?.length > 0"
                    v-bind:error-message="errors.emai ? errors.email.join(', ') : ''"
                />
            </div>
            <div class="q-gutter-md row items-center no-wrap">
                <div class="col">
                    <q-input
                        bg-color="white"
                        label="Affiliation"
                        outlined
                        standout
                        dense
                        v-bind:model-value="affiliation"
                        v-on:update:modelValue="
                            $emit('update', 'affiliation', $event)
                        "
                        v-bind:error="errors.affiliation?.length > 0"
                        v-bind:error-message="errors.affiliation ? errors.affiliation.join(', ') : ''"
                    />
                </div>
                <div class="col">
                    <q-input
                        bg-color="white"
                        label="Orcid"
                        outlined
                        standout
                        dense
                        v-bind:model-value="orcid"
                        v-on:update:modelValue="
                            $emit('update', 'orcid', $event)
                        "
                        v-bind:error="errors.orcid?.length > 0"
                        v-bind:error-message="errors.orcid ? errors.orcid.join(', ') : ''"
                    />
                </div>
            </div>
            <div
                class="errors"
                v-if="errors.errors"
            >
                <p
                    class="text-negative"
                    v-for="(e, ei) in errors.errors"
                    v-bind:key="ei"
                >
                    {{ e }}
                </p>
            </div>
        </q-card-section>
        <q-card-actions align="between">
            <q-btn
                icon="delete"
                color="negative"
                label="Remove"
                dense
                v-on:click="$emit('removePressed')"
            />
            <q-btn
                icon="close"
                label="Close"
                dense
                v-on:click="$emit('closePressed')"
            />
        </q-card-actions>
    </q-card>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useFileValidator } from '../store/validator'

export default defineComponent({
    name: 'AuthorEditCard',
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
        nameSuffix: {
            type: String,
            default: ''
        },
        orcid: {
            type: String,
            default: ''
        },
        familyNames: {
            type: String,
            default: ''
        },
        affiliation: {
            type: String,
            default: ''
        },
        email: {
            type: String,
            default: ''
        }
    },
    setup ({ index }) {
        const { groupedErrors } = useFileValidator()
        return {
            errors: computed(() => {
                if (groupedErrors.value.authorsList && groupedErrors.value.authorsList[index]) {
                    return groupedErrors.value.authorsList[index]
                } else {
                    return {}
                }
            })
        }
    },
    emits: ['closePressed', 'removePressed', 'update']
})
</script>
