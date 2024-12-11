import { reactive, computed, watch } from "vue";
import { defineStore } from "pinia";

export const useTasksStore = defineStore("tasks", () => {
  const tasks = reactive(JSON.parse(localStorage.getItem("tasks")) || []);

  // Nombre de tâches restantes
  const itemsLeftCount = computed(() => {
    return tasks.filter((task) => !task.completed).length;
  });

  // MÉTHODES CRUD
  const addTask = (task) => {
    tasks.unshift(task);
  };

  const deleteOneById = (id) => {
    tasks.splice(
      tasks.findIndex((item) => item.id == id),
      1
    );
  };

  const checkEditingById = (id) => {
    tasks.forEach((task) => {
      task.isEditing = task.id === id;
    });
  };

  watch(tasks, (newValue, oldValue) => {
    localStorage.setItem("tasks", JSON.stringify(newValue));
  });

  return { tasks, itemsLeftCount, addTask, deleteOneById, checkEditingById };
});
