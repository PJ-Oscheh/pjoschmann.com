<template>
    <div class="inlineImageWrapper">
        <img class="inlineImage" :src="image" @click="viewPhoto = true; clickedPhoto = k">
        <PhotoFullview v-if="viewPhoto && clickedPhoto==k" :image="image" :caption="caption" @stop-view-photo="viewPhoto = false"/>
    </div>
</template>

<style scoped>

    .inlineImageWrapper {
        background-color: black;
        height: v-bind(height);
        margin-right: 12px;
        margin-top: 12px;
    }

    img.inlineImage {
        display: inline-block;
        width: v-bind(width);
        height: v-bind(height);
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
        width: String,
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