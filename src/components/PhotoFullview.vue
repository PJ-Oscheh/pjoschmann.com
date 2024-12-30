<template>
    <div class="wrapperFull">
        <div class="overlay">
            <button class="closeButton" @click="stopViewPhoto">X</button>
            <img class="fullImage" :src="image"/>
            <span class="fullImageCaption">{{ caption }}</span>
        </div>
    </div>
</template>

<style scoped>
.overlay {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    position: fixed;
    width: 100vw;
    height: 100vh;
    background-color: black;
    overflow: hidden;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.750);
}

img.fullImage {
    display: flex;
    width: 90%;
    height: 60%;
    object-fit: contain;
    margin-left: 24px;
    margin-right: 24px;
}

span.fullImageCaption {
    display: inline-block;
    color: white;
    flex-grow: 0;
    max-width: 600px;
    margin-right: 20vh;
}

button.closeButton {
    margin-left: 5vh;
    min-width: 64px;
    min-height: 64px;
    border-style: none;
    background-color: #d40000;
    color: white;
    font-weight: bold;
    border-radius: 12px;
    box-shadow: 0px 4px 0px #740000;
}

button.closeButton:active {
    transform: translate(0px, 4px);
    box-shadow: 0px 0px 0px #740000;
}

/* Mobile */
@media screen and (max-width: 701px) {
    .overlay {
        flex-direction: column;
    }

    img.fullImage {
        margin-left: 0vh;
        margin-right: 0px;
    }

    span.fullImageCaption {
        margin: 24px;
    }

    button.closeButton {
        margin-bottom: 6px;
    }
}
</style>

<script setup>
const props = defineProps({
    image: String,
    caption: String
});

const emit = defineEmits(['stop-view-photo'])

function stopViewPhoto() {
    emit('stop-view-photo')
}
</script>