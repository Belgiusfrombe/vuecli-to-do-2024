<script setup>
import { reactive } from "vue";
import { useTasksStore } from "@/stores/tasks";
const tasksStore = useTasksStore();

const newTask = reactive({ id: null, content: null, completed: false });

const add = () => {
  newTask.id = Date.now();
  tasksStore.addTask({ ...newTask });
  newTask.id = null;
  newTask.content = null;
};
</script>

<template>
  <input
    class="new-todo"
    placeholder="What needs to be done?"
    autofocus
    v-model="newTask.content"
    @change="add()"
  />
</template>

<style scoped>
.new-todo {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  border: 1px solid #999;
  box-shadow: inset 0 -1px 5px 0 rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  color: inherit;
  font-family: inherit;
  font-size: 24px;
  font-weight: inherit;
  line-height: 1.4em;
  margin: 0;
  padding: 6px;
  position: relative;
  width: 100%;
  background: rgba(0, 0, 0, 0.003);
  border: none;
  box-shadow: inset 0 -2px 1px rgba(0, 0, 0, 0.03);
  height: 65px;
  padding: 16px 16px 16px 60px;
}
</style>
