<template>
    <Experiences />
</template>

<script setup>
import Experiences from '../components/Experiences.vue';
import { useRoute } from 'vue-router';
import { onMounted } from 'vue';

const title = useRoute().meta.title;

onMounted(() => {
  document.title = title;
});

</script>