<template>
    <div class="card">
        <h1>{{ project_name }}</h1>
        <h2>{{ project_type }}</h2>
        <h3 class="workDate" v-if="work_start != null">{{ work_start }} - {{ work_end }}</h3>
        <span class="skillsLabel" v-if="skills != null">Skills: </span><span class="skill" v-for="(skillItem, i) in skills">{{ skillItem }}</span>
        <ul v-if="tidbits != null">
            <li v-for="(item, i) in tidbits">{{ item }}</li>
        </ul>
        <ul v-if="my_work != null">
            <li>My work:</li>
            <ul v-for="(item, i) in my_work">
                <li>{{ item }}</li>
            </ul>
        </ul>
        <span class="aboutLabel" v-if="description != null">About:</span>
        <p>{{ description }}</p>
        <div class="images">
            <PhotoInline v-for="(image, i) in images" :image="image.path" height="160px" :caption="image.caption" :k="parseInt(`${k}${i}`)" fit-style="cover"/>
        </div>
    </div>
</template>

<style scoped>
    .card {
        background-color: #e660002a;
        border-radius: 12px;
        border: 2px solid #e66100;
        max-width: 720px;
        margin: 12px;
        padding: 12px;
        box-shadow: 0px 0px 5px rgb(61, 61, 61);
    }

    .tasks {
        border: 2px solid #4f2000;
        border-radius: 6px;
        margin-bottom: 6px;
        padding: 6px;
        background-color: #ffab6f;
    }

    .skill {
        display: inline-block;
        background-color: #ffcca7;
        border: 2px solid #4f2000;
        padding: 6px;
        margin-right: 6px;
        margin-bottom: 6px;
        font-size: 12pt;
        border-radius: 6px;
        font-family: Arial, Helvetica, sans-serif;
    }

    .skillsLabel, .aboutLabel {
        font-size: 18pt;
        font-family: Arial, Helvetica, sans-serif;
    }

    h1 {
        font-family: Arial, Helvetica, sans-serif;
        font-size: 36pt;
        margin-bottom: 2px;
        margin-top: 2px;
        text-align: center;
    }

    h2 {
        font-weight: lighter;
        font-family: Arial, Helvetica, sans-serif;
        text-align: center;
    }

    h3 {
        font-family:Arial, Helvetica, sans-serif;
    }

    h3.workDate {
        text-align: center;
    }

    h3.taskTitle {
        font-size: 24pt;
    }

    p {
        white-space: pre-wrap;
        font-family: Arial, Helvetica, sans-serif;
    }

    ul {
        font-family: Arial, Helvetica, sans-serif;
    }

    .images {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
</style>

<script setup>
import PhotoInline from './PhotoInline.vue';

    const props = defineProps({
        project_name: String,
        project_type: String,
        work_start: String,
        work_end: String,
        description: String,
        skills: Array,
        tidbits: Array,
        my_work: Array,
        images: Array,
        k: Number,
    })
</script>