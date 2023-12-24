<script setup lang="ts">
defineProps<{
  name: string;
}>();

defineEmits(["update:name"]);
</script>

<template>
  <section class="greeting">
    <h2 class="title">
      Hello,
      <input
        type="text"
        placeholder="Type your name"
        :value="name"
        @input="$emit('update:name', ($event.target as HTMLInputElement).value)"
      />
    </h2>
  </section>
</template>
