<script setup>
import AppHeader from "@/components/AppHeader.vue";
import TasksListMain from "@/components/TasksListMain.vue";
import TasksListFooter from "@/components/TasksListFooter.vue";
import AppFooter from "@/components/AppFooter.vue";
</script>

<template>
  <section class="todoapp">
    <AppHeader />
    <TasksListMain />
    <TasksListFooter />
  </section>
  <AppFooter />
</template>

<style scoped>
.todoapp {
  background: #fff;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);
  margin: 130px 0 40px;
  position: relative;
}
</style>
