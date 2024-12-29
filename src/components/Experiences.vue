<template>
    <div class="wrapper">
        <div class="experiencesHolder" v-for="(item, i) in experience.history">
            <ExperienceCard :employer="item.employer" :work_start="item.work_start" :work_end="item.work_end" :tasks="item.tasks"/>
        </div>
    </div>
</template>

<style scoped>
    .experiencesHolder {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .wrapper {
        display: flex;
        flex-direction: column;
        flex-grow: 1;
    }
</style>

<script setup>
import ExperienceCard from '../components/ExperienceCard.vue';
import experience from './json/experience.json'

</script>