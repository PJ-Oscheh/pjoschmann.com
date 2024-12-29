<template>
    <div class="inlineImageWrapper">
        <img class="inlineImage" :src="image" @click="viewPhoto = true; clickedPhoto = k">
        <PhotoFullview v-if="viewPhoto && clickedPhoto==k" :image="image" :caption="caption" @stop-view-photo="viewPhoto = false"/>
    </div>
</template>

<style scoped>

    .inlineImageWrapper {
        display: inline-block;
        background-color: black;
        height: v-bind(height);
        margin-left: 12px;
        margin-right: 12px;
        margin-top: 12px;
        font-family: Arial;
        max-width: 100%;
    }

    img.inlineImage {
        display: inline-block;
        max-width: 100%;
        height: v-bind(height);
        object-fit: v-bind(fitStyle);
    }

    img.inlineImage:hover {
        opacity: 0.75;
    }
</style>

<script setup>
import PhotoFullview from './PhotoFullview.vue';

    const props = defineProps({
        image: String,
        caption: String,
        height: String,
        fitStyle: String,
        k: Number
    });
</script>

<script>
import { ref } from 'vue';

const viewPhoto = ref(false);
const clickedPhoto = ref(0)
</script>