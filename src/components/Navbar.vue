<template>
    <div class="navbarWrapper">
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
.navbarWrapper {
    margin: 0px;
    display: flex;
    justify-content: center;
    background-color: #ff6a00;
}
.itemsBox {
    display: flex;
    flex-direction: row;
    justify-content: center;
    transition: height 0.25s;
}

a {
    color: rgba(255, 255, 255, 0.671);
    transition: font-size, 0.25s, color 0.25s, padding 0.25s;
    text-decoration: none;
    font-family: serif;
}

a.router-link-exact-active {
    color: white;
    transition: font-size 0.25s, color 0.25s;
}

div.divider {
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
        flex-direction: column;
        height: v-bind('itemsBoxHeight');
        align-items: start;
        flex-grow: 1;
    }

    a {
        padding: 3px;
        font-size: 16pt;
        display: v-bind(inactiveLinkState);
    }

    a.router-link-exact-active {
        font-size: 35pt;
        display: inline-block;
    }

    div.divider {
        display: none;
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
        align-items: center;
        height: 155px;
    }

    a {
        padding: 16px;
        font-size: 20pt;
        
    }

    a:hover {
        font-size: 36pt;
        transition: font-size 0.25s;
    }

    a.router-link-exact-active {
        font-size: 72pt;
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