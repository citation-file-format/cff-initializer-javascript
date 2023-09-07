<script lang="ts">
import { defineComponent } from 'vue'
import { useQuasar } from 'quasar'

export default defineComponent({
    name: 'PrivacyNotice',
    setup () {
        const $q = useQuasar()
        const tempWindow = window as any

        const _paq = tempWindow._paq = tempWindow._paq || []

        const accept = () => {
            _paq.push(['rememberConsentGiven'])
            _paq.push(['setConsentGiven'])
        }

        const refuse = () => {
            _paq.push(['forgetConsentGiven'])
        }

        $q.notify({
            message: 'We use <a href="/cookies" class="link-over-primary" target="_blank">cookies</a> with <a href="https://matomo.org" class="link-over-primary" target="_black">matomo.org</a> to anonymously track usage and improve our app. Do you accept?',
            color: 'primary',
            progress: true,
            timeout: 0,
            actions: [
                { label: 'Accept', color: 'white', handler: accept },
                { label: 'Refuse', color: 'white', handler: refuse }
            ],
            html: true
        })

        return {
        }
    }
})
</script>
