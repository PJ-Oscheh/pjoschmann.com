<template>
    <div class="contactCard">
            <span class="title">{{ title }}</span><br>
            <div class="contactEntry" v-for="(item, i) in ce[0]">
                <Safetext :prefix="item.prefix" v-if="item.useSafetext" :k1="item.k1" :k2="item.k2" :k3="item.k3" />
                <a :href="item.url" v-else>{{ item.text }}</a>
            </div>
            <!--
            <div class="contactEntry"><Safetext :prefix="prefix_k" :k1="k1" :k2="k2" :k3="k3"/></div>
            <div class="contactEntry"><Safetext :prefix="prefix_m" :k1="m1" :k2="m2" :k3="m3" /></div> -->
    </div>
</template>

<script setup>
    import Safetext from './Safetext.vue';
    const props = defineProps({
        title: String,
        ce: Array
    });

</script>

<style scoped>
    .contactCard {
        margin-left: 6px;
        margin-right: 6px;
        margin-bottom: 12px;
        padding: 12px;
        text-align: center;
        background-color: #fcc59e;
        width: 240px;
        border-radius: 12px;
        border: 2px solid #e66100;
        box-shadow: 0px 0px 20px rgb(61, 61, 61);
        }

    .contactEntry {
        background-color: transparent;
        font-family: Arial, Helvetica, sans-serif;
        margin-bottom: 6px;
        font-size: 16pt;
    }

    .title {
        display: inline-block;
        margin-bottom: 12px;
        font-weight: bold;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 20pt;
    }
    
    a {
        color: #3a1800;
        cursor: pointer;
        text-decoration: underline;
    }

    a:active {
        color: #e66100
    }
</style>