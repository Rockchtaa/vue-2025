<template>
  <section class="m-auto max-w-lg my-10 px-6 text-center">
    <button
      @click="$emit('toggle')"
      class="block bg-black text-white py-4 px-6 rounded-xl hover:bg-gray-700 m-auto"
    >
      {{ showAll ? "Show Less" : "View All Jobs" }}
    </button>
  </section>
</template>

<script setup>
defineProps({
  showAll: Boolean,
});

defineEmits(["toggle"]);
</script>
