<script setup>
import TasksListItem from "@/components/TasksListItem.vue";

const props = defineProps({
  tasks: Array,
});
</script>
<template>
  <ul class="todo-list">
    <TasksListItem v-for="task in tasks" :key="task.id" :task="task" />
  </ul>
</template>
