<template>
    <div class="wrapper">
        <div class="intro">
            <div class="jumbotron">
                <img :src="getFile(intro.intro.image)"/>
                <div class="jumbotronColumn">
                    <h1>{{ intro.intro.title }}</h1>
                    <h2>{{ intro.intro.name }}</h2>
                    <h3>{{ intro.intro.blurb }}</h3>
                </div>
            </div>
            <div class="pBox">
                <p id="description">{{ intro.intro.description }}</p>
            </div>
            <div class="reelWrapperParent">
                <PhotoReel width="720px" height="640px" :images="photos.intro" fitStyle="cover" />
            </div>
        </div>
    </div>
</template>

<style scoped>
/* Mobile */
@media screen and (max-width: 700px) {
    .contactCardHolder {
        display: flex;
        flex-direction: column;
        align-items: center;
        transition: flex-direction 0.25s;
    }
    .jumbotron {
        display: flex;
        flex-direction: column;
        background-color: #e660002a;
        margin-top: 48px;
    }

    .jumbotronColumn {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-left: 12px;
        margin-right: 12px;
    }
}

/* Desktop */
@media screen and (min-width: 701px) {
    .contactCardHolder {
        display: flex;
        justify-content: center;
        flex-direction: row;
        transition:  0.25s;
    }

    .jumbotron {
    display: flex;
    flex-direction: row;
    background-color: #e660002a;
    margin-top: 48px;
    }

    .jumbotronColumn {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-right: 90px;
    }
}

.wrapper {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    margin-bottom: 12px;
}

.reelWrapperParent {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 24px;
}

img {
    margin-left: auto;
    margin-right: auto;
    width: 256px;
    height: 256px;
    border-radius: 100%;
    border: 10px solid #e66100;
    object-fit: cover;
    margin-top: 36px;
    margin-bottom: 36px;
    box-shadow: 0px 0px 20px rgb(61, 61, 61);
}

.intro {
    display: flex;
    flex-direction: column;
    font-family: Arial, Helvetica, sans-serif;
    justify-content: center;
}

div.pBox {
    display: flex;
    justify-content: center;
}

p#description {
    max-width: 70vh;
    text-align: center;
    margin-top: 24px;
    margin-bottom: 60px;
    margin-left: 12px;
    margin-right: 12px;
}

h1 {
    text-align: center;
    font-weight: lighter;
    padding: 48px;
    margin: 0px;
    font-style: italic;
}

h2, h3 {
    text-align: center;
}

h2 {
    margin: 0px;
}

h3 {
    font-weight: lighter;
    margin-top: 0px;
}
</style>

<script setup>
import intro from "./json/intro.json";
import PhotoReel from "./PhotoReel.vue";
import photos from "./json/photos.json";

function getFile(filePath) {
    console.log("getting file")
    return new URL(`../assets/${filePath}`, import.meta.url)
}

console.log(getFile(intro.intro.image));
</script>