<template>
    <div class="card">
        <h1>{{ employer }}</h1>
        <h3 class="workDate">{{ work_start }} - {{ work_end }}</h3>
        <h2>Tasks:</h2>
        <div class="tasks" v-for="(item, i) in tasks">
            <h3 class="taskTitle">{{ item.name }}</h3>
            <span class="skillsLabel">Skills: </span><span class="skill" v-for="(skillItem, i) in item.skills">{{ skillItem }}</span>
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

    .skillsLabel {
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
        font-family: 'Times New Roman', Times, serif;
    }
</style>

<script setup>
    const props = defineProps({
        employer: String,
        work_start: String,
        work_end: String,
        tasks: Object
    })
</script>