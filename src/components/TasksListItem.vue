<script setup>
import { useTasksStore } from "@/stores/tasks";
const tasksStore = useTasksStore();

const props = defineProps({
  task: Object,
});
</script>
<template>
  <li
    data-id="2"
    :class="{ completed: task.completed, editing: task.isEditing }"
  >
    <div class="view">
      <input
        class="toggle"
        type="checkbox"
        :checked="task.completed"
        v-model="task.completed"
      />
      <label
        @dblclick="tasksStore.checkEditingById(task.id)"
        v-if="!task.isEditing"
        >{{ task.content }}</label
      >
      <button
        class="destroy"
        @click.prevent="tasksStore.deleteOneById(task.id)"
      ></button>
    </div>
    <!-- Quand je double clique sur le label isEditing passe en true et montre le code en dessous ici de base il affiche le code du dessus et quand il double clique alors le isEditing passe au false -->
    <!-- Mettre un lazy sur le v-model pour ne pas prendre toute la bande passante, il ne prend en charge la modif que quand le keyup.enter est enregistré-->
    <input
      type="text"
      v-if="task.isEditing"
      class="edit"
      v-model.lazy="task.content"
      @keyup.enter="task.isEditing = false"
    />
  </li>
</template>
