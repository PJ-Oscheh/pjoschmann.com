<template>
    <div class="reelWrapper">
        <img :src="images[currentIdx].path" @click="viewPhoto = true"/>
        <div class="captionBox">
            <button class="navButton" @click="changeImageIdx(currentIdx-1)" :disabled="currentIdx <= 0"><</button>
            <span class="captionText">{{ images[currentIdx].caption }}</span>
            <button class="navButton" @click="changeImageIdx(currentIdx+1)" :disabled="currentIdx == images.length-1">></button>
        </div>
        <PhotoFullview v-if="viewPhoto" :image="images[currentIdx].path" :caption="images[currentIdx].caption" @stop-view-photo="viewPhoto = false;" />
    </div>
</template>

<style scoped>

    .reelWrapper {
        display: flex;
        flex-direction: column;
        height: v-bind(height);
        max-width: v-bind(width);
        width: 90%;
        min-width: none;
        background-color: black;
        overflow: hidden;
        border-radius: 12px;
        box-shadow: 0px 0px 20px rgb(61, 61, 61);
    }

    img {
        display: flex;
        max-width: v-bind(width);
        min-width: none;
        object-fit: v-bind(fitStyle);
        height: 90%;
    }

    img:hover {
        opacity: 0.75;
    }

    .captionBox {
        display: flex;
        background-color: black;
        color: white;
        justify-content: center;
        align-items: center;
        height: 10%;
        width: 100%;
        max-width: v-bind(width);
    }

    .captionText {
        display: inline-block;
        text-align: center;
        flex-grow: 1;
        font-family: Arial, Helvetica, sans-serif;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        max-width: 100%;
        max-height: 100%;
        padding-left: 12px;
        padding-right: 12px;
    }

    .navButton {
        display: block;
        min-width: 60px;
        min-height: 45px;
        margin: 12px;
        border-style: none;
        background-color: #ff6a00;
        color: white;
        font-weight: bold;
        border-radius: 12px;
        box-shadow: 0px 4px 0px #923d00;
    }

    .navButton:enabled:active {
        transform: translate(0px, 4px);
        box-shadow: 0px 0px 0px #923d00;
    }

    .navButton:disabled {
        background-color: #e9e9e9;
        box-shadow: 0px 4px 0px #949494;
        color: black;
    }

</style>

<script setup>
    const props = defineProps({
        images: Object,
        width: String,
        height: String,
        fitStyle: String
    });
</script>

<script>
import { ref } from 'vue';
import PhotoFullview from './PhotoFullview.vue';
    const currentIdx = ref(0);
    const viewPhoto = ref(false);

    function changeImageIdx(idx) {
        if (idx >=0 && idx < this.props.images.length) {
            currentIdx.value = idx;
        }
    };
</script>