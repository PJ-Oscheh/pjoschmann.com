<template>
    <Projects />
</template>

<script setup>
import Projects from '../components/Projects.vue';

import { useRoute } from 'vue-router';
import { onMounted } from 'vue';

const title = useRoute().meta.title;

onMounted(() => {
  document.title = title;
});
</script>