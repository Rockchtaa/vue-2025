<script setup>
import JobCard from '@/components/JobCard.vue'
defineProps({
  jobs: {
    type: Array,
    required: true,
  },
})
</script>

<template>
  <section class="bg-green-50 px-4 py-10">
    <div class="container-xl lg:container m-auto">
      <h2 class="text-3xl font-bold text-green-500 mb-6 text-center">
        Browse Jobs
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div
          v-for="job in jobs"
          :key="job.id"
          class="bg-white rounded-xl shadow-md relative"
        >
          <JobCard :job="job" />
        </div>
      </div>
    </div>
  </section>
</template>
