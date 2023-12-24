<script setup lang="ts">
defineProps<{
  addTodo: () => void;
  inputContent: string;
  inputCategory: "business" | "personal" | null;
}>();

defineEmits(["update:inputContent", "update:inputCategory"]);
</script>

<template>
  <section class="create-todo">
    <h3>CREATE A TODO</h3>

    <form @submit.prevent="addTodo">
      <h4>What's on your todo list?</h4>
      <input
        type="text"
        placeholder="Type here"
        :value="inputContent"
        @input="
          $emit(
            'update:inputContent',
            ($event.target as HTMLInputElement).value
          )
        "
      />

      <h4>Pick a category</h4>
      <div class="options">
        <label>
          <input
            type="radio"
            name="category"
            value="business"
            :checked="inputCategory === 'business'"
            @input="
              $emit(
                'update:inputCategory',
                ($event.target as HTMLInputElement).value
              )
            "
          />
          <span class="bubble business"></span>
          <div>Business</div>
        </label>

        <label>
          <input
            type="radio"
            name="category"
            value="personal"
            :checked="inputCategory === 'personal'"
            @input="
              $emit(
                'update:inputCategory',
                ($event.target as HTMLInputElement).value
              )
            "
          />
          <span class="bubble personal"></span>
          <div>Personal</div>
        </label>
      </div>

      <input type="submit" value="Add todo" />
    </form>
  </section>
</template>
