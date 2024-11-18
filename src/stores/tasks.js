import { reactive, computed } from "vue";
import { defineStore } from "pinia";

export const useTasksStore = defineStore("tasks", () => {
  const tasks = reactive(JSON.parse(localStorage.getItem("tasks")) || []);

  return { tasks };
});
