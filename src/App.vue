<template>
    <PrivacyNotice />
    <router-view />
</template>

<script lang="ts">
import PrivacyNotice from 'src/components/PrivacyNotice.vue'

export default ({
    name: 'App',
    components: {
        PrivacyNotice
    }
})

</script>
