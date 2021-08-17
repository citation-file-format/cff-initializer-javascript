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
                        v-bind="givenNames"
                        v-bind:rules="[ val => val && val.length > 3 || 'Please use minimum 3 characters']"
                    />
                    <!-- <div class="text-subtitle1">
                        {{ author.givenNames }} {{ author.familyNames }}
                    </div>
                    <div class="text-subtitle1">
                        {{ author.email }}
                    </div> -->
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

        <!-- <q-card-section>
            {{ author.affiliation }} {{ author.orcid }} {{ index }}
        </q-card-section> -->
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
        }
    },
    emits: ['closePressed', 'removePressed', 'updategivenNames']
})
</script>
