<template>
  <Introduction />
</template>

<script setup>
import { useRoute } from 'vue-router';
import Introduction from '../components/Introduction.vue';
import { onMounted } from 'vue';

const title = useRoute().meta.title;

onMounted(() => {
  document.title = title;
});

</script>
