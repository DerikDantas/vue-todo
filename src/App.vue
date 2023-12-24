<script setup lang="ts">
import { ref, onMounted, computed, watch } from "vue";
import { type ITodo } from "./interfaces/Todo";
import TodoList from './components/TodoList.vue'
import Greeting from './components/Greeting.vue'
import CreateTodo from './components/CreateTodo.vue'

const todos = ref<ITodo[]>([]);
const name = ref("");

const inputContent = ref("");
const inputCategory = ref<"business" | "personal" | null>(null);

const todosAsc = computed(() =>
  todos.value.sort((a, b) => b.createdAt - a.createdAt)
);

const addTodo = () => {
  if (!inputContent.value.trim() || !inputCategory.value) return;

  todos.value.push({
    content: inputContent.value,
    category: inputCategory.value,
    done: false,
    createdAt: new Date().getTime(),
  });

  inputContent.value = "";
  inputCategory.value = null;
};

const removeTodo = (todo: ITodo) => {
  todos.value = todos.value.filter((t) => t !== todo);
};

watch(
  todos,
  (newVal) => {
    localStorage.setItem("todos", JSON.stringify(newVal));
  },
  { deep: true }
);

watch(name, (newVal) => {
  localStorage.setItem("name", newVal);
});

onMounted(() => {
  name.value = localStorage.getItem("name") || "";
  todos.value = JSON.parse(localStorage.getItem("todos") ?? "") || [];
});
</script>

<template>
  <main class="app">
    <Greeting v-model:name="name" />

    <CreateTodo :addTodo="addTodo"  v-model:inputContent="inputContent"  v-model:inputCategory="inputCategory" />

    <TodoList :todosAsc="todosAsc" :removeTodo="removeTodo" />
  </main>
</template>
