<script setup>
import { useTasksStore } from "@/stores/tasks";
const tasksStore = useTasksStore();

const props = defineProps({
  task: Object,
});
</script>
<template>
  <li data-id="2" :class="{ completed: task.completed }">
    <div class="view">
      <input
        class="toggle"
        type="checkbox"
        :checked="task.completed"
        v-model="task.completed"
      />
      <label>{{ task.content }}</label>
      <button
        class="destroy"
        @click.prevent="tasksStore.deleteOneById(task.id)"
      ></button>
    </div>
  </li>
</template>
