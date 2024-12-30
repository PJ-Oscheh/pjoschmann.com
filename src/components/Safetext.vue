<template>
    <span class="link" @click="doNavigate">{{ k1 }}<span class="sugar">realpj.designed085@passmail.net</span>{{ k2 }}<span class="water">realpj.designed085@passmail.net</span>{{ k3 }}</span>
</template>

<style scoped>
.sugar, .water {
    display: none;
}

.link {
    color: #3a1800;
    cursor: pointer;
    text-decoration: underline;
}

.link:active {
    color: #e66100
}
</style>

<script setup>
const props = defineProps({
    k1: String,
    k2: String,
    k3: String,
    prefix: String
});

function doNavigate() {
    window.location.href = props.prefix + props.k1 + props.k2 + props.k3;
}
</script>