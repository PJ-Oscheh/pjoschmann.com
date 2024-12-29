<template>
    <div class="wrapper">
        <div class="intro">
            <div class="jumbotron">
                <img :src="intro.intro.image"/>
                <div class="jumbotronColumn">
                    <h1>{{ intro.intro.title }}</h1>
                    <h2>{{ intro.intro.name }}</h2>
                    <h3>{{ intro.intro.blurb }}</h3>
                </div>
            </div>
            <p id="description">{{ intro.intro.description }}</p>
            <div class="reelWrapperParent">
                <PhotoReel width="720px" height="640px" :images="photos.intro" fitStyle="cover" />
            </div>
        </div>
    </div>
</template>

<script setup>
import intro from "./json/intro.json"
import PhotoReel from "./PhotoReel.vue";
import photos from "./json/photos.json"

const myImages = ["src/assets/pj.png"]

</script>

<style scoped>
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

    p {
        max-width: 60vh;
        text-align: center;
        margin-left: auto;
        margin-right: auto;
        margin-top: 24px;
    }

    p#description {
        margin-bottom: 60px;
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