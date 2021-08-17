<template>
    <q-card
        flat
        bordered
        class="my-card bg-grey-1"
    >
        <q-card-section>
            <div class="row items-center no-wrap">
                <div class="col">
                    <q-input
                        bg-color="white"
                        label="Given name(s)"
                        outlined
                        standout
                        v-bind:model-value="givenNames"
                        v-on:update:modelValue="
                            $emit('update', 'givenNames', $event)
                        "
                        v-bind:rules="[
                            (val) =>
                                (val && val.length > 3) ||
                                'Please use minimum 3 characters',
                        ]"
                    />
                    <q-input
                        bg-color="white"
                        label="Name particle"
                        title="The person's name particle, e.g., a nobiliary particle or a [preposition] meaning 'of' or 'from' (for example 'von' in 'Alexander von Humboldt')."
                        outlined
                        standout
                        v-bind:model-value="nameParticle"
                        v-on:update:modelValue="
                            $emit('update', 'nameParticle', $event)
                        "
                        v-bind:rules="[
                            (val) =>
                                (val && val.length > 3) ||
                                'Please use minimum 3 characters',
                        ]"
                    />
                    <q-input
                        bg-color="white"
                        label="Family name(s)"
                        outlined
                        standout
                        v-bind:model-value="familyNames"
                        v-on:update:modelValue="
                            $emit('update', 'familyNames', $event)
                        "
                        v-bind:rules="[
                            (val) =>
                                (val && val.length > 3) ||
                                'Please use minimum 3 characters',
                        ]"
                    />
                    <q-input
                        bg-color="white"
                        label="Suffix"
                        outlined
                        standout
                        title="The person's name suffix, e.g. 'Jr.' for Sammy Davis Jr. or 'III' for Frank Edwin Wright III."
                        v-bind:model-value="nameSuffix"
                        v-on:update:modelValue="
                            $emit('update', 'nameSuffix', $event)
                        "
                        v-bind:rules="[
                            (val) =>
                                (val && val.length > 3) ||
                                'Please use minimum 3 characters',
                        ]"
                    />
                    <q-input
                        bg-color="white"
                        label="Email"
                        outlined
                        standout
                        v-bind:model-value="email"
                        v-on:update:modelValue="
                            $emit('update', 'email', $event)
                        "
                        v-bind:rules="[
                            (val) =>
                                (val && val.length > 3) ||
                                'Please use minimum 3 characters',
                        ]"
                    />
                    <q-input
                        bg-color="white"
                        label="Affiliation"
                        outlined
                        standout
                        v-bind:model-value="affiliation"
                        v-on:update:modelValue="
                            $emit('update', 'affiliation', $event)
                        "
                        v-bind:rules="[
                            (val) =>
                                (val && val.length > 3) ||
                                'Please use minimum 3 characters',
                        ]"
                    />
                    <q-input
                        bg-color="white"
                        label="Orcid"
                        outlined
                        standout
                        v-bind:model-value="orcid"
                        v-on:update:modelValue="
                            $emit('update', 'orcid', $event)
                        "
                        v-bind:rules="[
                            (val) =>
                                (val && val.length > 3) ||
                                'Please use minimum 3 characters',
                        ]"
                    />
                </div>

                <div class="col-auto">
                    <!-- // TODO move to action bar -->
                    <q-btn
                        color="primary"
                        round
                        flat
                        icon="remove"
                        title="Remove"
                        v-on:click="$emit('removePressed')"
                    />
                    <q-btn
                        color="primary"
                        round
                        flat
                        icon="close"
                        title="Close"
                        v-on:click="$emit('closePressed')"
                    />
                </div>
            </div>
        </q-card-section>
    </q-card>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

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
    emits: ['closePressed', 'removePressed', 'update']
})
</script>
