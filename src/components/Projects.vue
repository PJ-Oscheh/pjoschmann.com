<template>
    <div class="projectsWrapper">
        <div class="projectsHolder" v-for="(item, j, i) in projects.history">
            <ProjectCard :project_name="item.name" :project_type="item.type" :work_start="item.work_start" :work_end="item.work_end" :skills="item.skills" :description="item.description" :tidbits="item.tidbits" :my_work="item.my_work" :images="item.images" :k="i"/>
        </div>
    </div>
</template>

<style scoped>
    .wrapper {
        display: flex;
        flex-direction: column;
        flex-grow: 1;
    }
    .projectsWrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        flex-grow: 0;
        margin-top: 24px;
    }
</style>

<script setup>
import projects from "./json/projects.json"
import ProjectCard from "./ProjectCard.vue";

</script>