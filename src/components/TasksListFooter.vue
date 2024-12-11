<script setup>
import { useTasksStore } from "@/stores/tasks";
const tasksStore = useTasksStore();
</script>
<template>
  <footer class="footer">
    <span class="todo-count">
      {{ tasksStore.itemsLeftCount }} item(s) left
    </span>
    <ul class="filters">
      <li><a href="#/" class="selected">All</a></li>
      <li><a href="#/active">Active</a></li>
      <li><a href="#/completed">Completed</a></li>
    </ul>
    <button class="clear-completed">Clear completed</button>
  </footer>
</template>
<style scoped></style>
