<template>
    <div class="experiencesWrapper">
        <div class="experiencesHolder" v-for="(item, j, i) in experience.history">
            <ExperienceCard :employer="item.employer" :work_start="item.work_start" :work_end="item.work_end" :tasks="item.tasks" :k="i"/>
        </div>
    </div>
</template>

<style scoped>
.experiencesHolder {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.experiencesWrapper {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    margin-top: 24px;
}
</style>

<script setup>
import ExperienceCard from '../components/ExperienceCard.vue';
import experience from './json/experience.json'
</script>