<template>
    <div class="wrapper">
        <div class="menuButtonBox">
            <button class="menuButton" v-on:click="toggleMenu">
            <div class="menuLine"></div>
            <div class="menuLine"></div>
            <div class="menuLine"></div>
        </button>
        </div>
        <div class="itemsBox">
                <div class="itemEntry" v-for="(item, name, i) in navlinks" :key="item.name">
                    <RouterLink :to="{path: item.route}" v-on:click="toggleMenu">{{item.name}}</RouterLink>
                    <div class="divider" v-if="i != Object.keys(navlinks).length-1">

                    </div>
                </div>
        </div>
    </div>
</template>

<style scoped>
.wrapper {
    margin: 0px;
    display: flex;
    justify-content: center;
    background-color: #ff6a00;
}
.itemsBox {
    display: flex;
    flex-direction: row;
}

.divider {
    display: flex;
    width: 2px;
    background-color: #722f00;
    height: 20%;
    margin-top: 3px;
    justify-content: center;
    align-items: center;
}
/* Mobile */
@media screen and (max-width: 700px) {
    .itemsBox {
        display: flex;
        flex-direction: column;
        height: v-bind('itemsBoxHeight');
        justify-content: center;
        align-items: start;
        transition: height 0.25s;
        flex-grow: 1;
    }

    a {
        color: rgba(255, 255, 255, 0.671);
        padding: 3px;
        font-size: 16pt;
        transition: font-size 0.25s, padding 0.25s;
        text-decoration: none;
        font-family: serif;
        display: v-bind(inactiveLinkState);
    }

    .divider {
        display: none;
    }

    a.router-link-exact-active {
        color: white;
        font-size: 35pt;
        transition: font-size 0.25s;
        display: inline-block;
    }

    .menuButton {
        border-style: none;
        background-color: transparent;
        margin-left: 0px;
        padding-top: 6px;
    }

    .menuButton:active {
        background-color: rgba(0, 0, 0, 0.411);
    }

    .menuLine {
        background-color: white;
        height: 3px;
        margin-bottom: 6px;
        width: 40px;
    }

    .menuButtonBox {
        display: flex;
        width:70px;
        justify-content: center;
        align-items: start;
        padding-top: 33px;
    }
}

/* Desktop */
@media screen and (min-width: 701px) {
    div {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 155px;
        transition: height 0.25s
    }

    .itemsBox {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 155px;
        transition: height 0.25s
    }

    a {
        color: rgba(255, 255, 255, 0.671);
        padding: 16px;
        font-size: 20pt;
        transition: font-size, 0.25s, color 0.25s, padding 0.25s;
        text-decoration: none;
        font-family: serif;
    }

    a:hover {
        font-size: 36pt;
        transition: font-size 0.25s;
    }

    a.router-link-exact-active {
        font-size: 72pt;
        transition: font-size 0.25s color 0.25s;;
        color: white
    }

    .menuButton {
        display: none;
    }
}
</style>

<script setup>
import { RouterLink } from 'vue-router'
import navlinks from './json/navlinks.json'
import { ref } from 'vue';

const mobileThreshold = 700;

const itemsBoxClosedHeight = '100px';
const itemsBoxOpenHeight = '175px';

const inactiveLinkStateClosed = 'none';
const inactiveLinkStateOpen = 'inline-block';


const itemsBoxHeight = ref(itemsBoxClosedHeight);
const inactiveLinkState = ref(inactiveLinkStateClosed);

function toggleMenu() {
    if (window.innerWidth <= mobileThreshold) {
        itemsBoxHeight.value = itemsBoxHeight.value == itemsBoxClosedHeight ? itemsBoxOpenHeight : itemsBoxClosedHeight;
        inactiveLinkState.value = inactiveLinkState.value == inactiveLinkStateClosed ? inactiveLinkStateOpen : inactiveLinkStateClosed;
    }
}
</script>