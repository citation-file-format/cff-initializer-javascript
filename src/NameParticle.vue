<template>
    <li v-if="has_name_particle">
        <p class="caption">
            name-particle
            <button
                tabindex="-1"
                title="Remove name-particle"
                v-on:click="remove"
            >
                remove
            </button>
        </p>
        <input
            v-bind:class="{error: validation.error }"
            v-bind:value="name_particle"
            type="text"
            v-on:input="update($event)"
        >
        <p
            v-if="validation.error"
            class="message"
        >
            {{ validation.msg }}
        </p>
    </li>
    <li v-else>
        <button
            tabindex="-1"
            title="Add name-particle"
            v-on:click="add"
        >
            Add name-particle
        </button>
    </li>
</template>

<script>

import {add,
        remove,
        update} from './NameParticleEmitters.js';

import {validate} from './NameParticleValidators.js';

export default {
    name: 'NameParticle',
    components: {
    },
    props: {
        name_particle: String
    },
    computed: {
        has_name_particle: function () {
            return this.$props.hasOwnProperty('name_particle') &&
                this.$props.name_particle !== undefined;
        },
        validation: validate
    },
    methods: {
        add,
        remove,
        update
    }
};
</script>

<style scoped>
    button {
        margin-bottom: 1.0em;
        margin-top: 1.0em;
    }
</style>
