<script setup>
import { ref } from "vue";
import { useTasksStore } from "@/stores/tasks";

const tasksStore = useTasksStore();

// Props définis pour recevoir une tâche
const props = defineProps({
  task: Object,
});

// Gestion du mode édition
const isEditing = ref(false);
</script>

<template>
  <li :class="{ completed: task.completed, editing: isEditing }">
    <div class="view">
      <!-- Checkbox pour marquer comme complété -->
      <input
        class="toggle"
        type="checkbox"
        v-model="task.completed"
      />

      <!-- Mode lecture -->
      <label
        v-if="!isEditing"
        @dblclick="isEditing = true"
      >
        {{ task.content }}
      </label>

      <!-- Mode édition -->
      <input
        v-else
        class="edit"
        type="text"
        v-model="task.content"
        @blur="isEditing = false"
        @keyup.enter="isEditing = false"
      />

      <!-- Bouton pour supprimer une tâche -->
      <button
        class="destroy"
        @click.prevent="tasksStore.deleteOneById(task.id)"
      ></button>
    </div>
    <!-- Quand je double clique sur le label isEditing passe en true et montre le code en dessous ici de base il affiche le code du dessus et quand il double clique alors le isEditing passe au false -->
    <input type="text" class="edit" v-model="task.content" v-if="isEditing" @keyup.enter="isEditing = false">
  </li>
</template>

<style scoped>

</style>
