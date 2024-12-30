<template>
    <div class="card">
        <h1>{{ employer }}</h1>
        <h3 class="workDate">{{ work_start }} - {{ work_end }}</h3>
        <h2>Tasks:</h2>
        <div class="tasks" v-for="(item, i) in tasks">
            <h3 class="taskTitle">{{ item.name }}</h3>
            <span class="innerHeader">Skills: </span><span class="skill" v-for="(skillItem, i) in item.skills">{{ skillItem }}</span>
            <ul v-if="item.tidbits != null">
                <li v-for="(tidbitItem, i) in item.tidbits">{{ tidbitItem }}</li>
            </ul>
            <span class="innerHeader">About:</span>
            <p>{{ item.description }}</p>
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
        font-family: Arial, Helvetica, sans-serif;
        box-shadow: 0px 0px 5px rgb(61, 61, 61);
    }

    .tasks {
        border: 2px solid #4f2000;
        border-radius: 6px;
        margin-bottom: 6px;
        padding: 6px;
        background-color: transparent;
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

    span.innerHeader {
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
        font-weight: normal;
        font-family: Arial, Helvetica, sans-serif;
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
    }
</style>

<script setup>
    import { ref } from 'vue';

    const props = defineProps({
        employer: String,
        work_start: String,
        work_end: String,
        tasks: Object,
        k: Number
    })

    const showDescription = ref(false);
    const showDescriptionIdx = ref(-1);
</script>