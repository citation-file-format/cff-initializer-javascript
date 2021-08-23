<template>
    <div id="header-outer">
        <div id="header-inner">
            <Header />
        </div>
    </div>
    <div id="middle">
        <router-view />
        <div id="preview">
            <div id="preview-content">
                <Preview />
            </div>

            <div id="preview-button-bar">
                <DownloadButton />
            </div>
        </div>
    </div>

    <div id="footer-outer">
        <div id="footer-inner">
            <Footer />
        </div>
    </div>
</template>

<script lang="ts">
import Header from 'components/Header.vue'
import Preview from 'components/Preview.vue'
import DownloadButton from 'components/DownloadButton.vue'
import Footer from 'components/Footer.vue'
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'MainLayout',
    components: {
        Header,
        Preview,
        DownloadButton,
        Footer
    },
    setup () {
        return {
        }
    }
})
</script>
<style>
    #app {
        background-color: tan;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        row-gap: 10px;
    }
    #header-outer {
        background-color: rosybrown;
        display: flex;
        flex-direction: row;
        justify-content: center;
    }
    #header-inner {
        background-color: sandybrown;
        max-height: 50px;
        min-height: 50px;
        width: 1900px;
    }
    #middle {
        background-color: lightblue;
        column-gap: 25px;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        row-gap: 20px;
    }
    #metroline {
        background-color: lightgreen;
        flex-grow: 0.5;
        max-height: 1000px;
        max-width: 300px;
        min-height: 500px;
        min-width: 250px;
        overflow: auto;
    }
    #form {
        background-color: plum;
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        max-width: 900px;
        min-height: 400px;
        min-width: 600px;
    }
    #form-title {
        background-color: tomato;
        height: 120px;
    }
    #form-content {
        background-color: lightslategray;
        flex-grow: 1;
        max-height: 600px;
        min-height: 580px;
        overflow: auto
    }
    #form-button-bar {
        background-color: khaki;
        max-height: 80px;
        min-height: 80px;
    }
    #preview {
        background-color: limegreen;
        display: flex;
        flex-direction: column;
        flex-grow: 0.5;
        max-width: 600px;
        min-height: 400px;
        min-width: 400px;
    }
    #preview-content {
        background-color: lightcoral;
        flex-grow: 1;
        max-height:720px;
        min-height: 300px;
        overflow: auto;
    }
    #preview-button-bar {
        background-color: darkorange;
        max-height: 80px;
        min-height: 80px;
    }
    #footer-outer {
        background-color: slateblue;
        display: flex;
        flex-direction: row;
        justify-content: center;
    }
    #footer-inner {
        background-color: deepskyblue;
        max-height: 50px;
        min-height: 50px;
        width: 1900px;
    }
</style>
