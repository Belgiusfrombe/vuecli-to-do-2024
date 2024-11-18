<script setup>
const props = defineProps({
  task: {
    type: Object,
    required: true
  }
});
</script>

<template>
  <li
    :class="{ completed : task.completed }">
    <div class="view">
      <input class="toggle" type="checkbox" :checked="task.completed" />
      <label>{{ task.content }}</label>
      <button class="destroy"></button>
    </div>
  </li>
</template>
