<script setup>
import TasksList from "@/components/TasksList.vue";
import { useTasksStore } from "@/stores/tasks";
const tasksStore = useTasksStore();
</script>
<template>
  <main class="main">
    <div class="toggle-all-container">
      <input class="toggle-all" type="checkbox" />
      <label class="toggle-all-label" for="toggle-all"
        >Mark all as complete</label
      >
    </div>
    <TasksList :tasks="tasksStore.tasks" />
  </main>
</template>
<style scoped></style>
