<script setup>
import { ref } from 'vue'
import { useRoute, RouterLink } from 'vue-router'

const props = defineProps({
  job: Object
})

const showFullDescription = ref(false)

const toggleDescription = () => {
  showFullDescription.value = !showFullDescription.value
}
</script>

<template>
  <div class="p-4">
    <div class="mb-6">
      <div class="text-gray-600 my-2">{{ job.type }}</div>
      <h3 class="text-xl font-bold">{{ job.title }}</h3>
    </div>

    <div class="mb-5">
      <h3 class="text-lg">
        {{ showFullDescription ? job.description : job.description.slice(0, 80) + '...' }}
      </h3>
      <button
        class="text-green-600 text-sm mt-1"
        @click="toggleDescription"
      >
        {{ showFullDescription ? 'Show less' : 'Show more' }}
      </button>
    </div>

    <h3 class="text-green-500 mb-2">{{ job.salary }}</h3>

    <div class="border border-gray-100 mb-5"></div>

    <div class="flex flex-col lg:flex-row justify-between mb-4">
      <div class="text-orange-700 mb-3">
        <i class="fa-solid fa-location-dot text-lg"></i>
        {{ job.location }}
      </div>
      <RouterLink
        :to="'/jobs/' + job.id"
        class="h-[36px] bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-center text-sm"
      >
        Read More
      </RouterLink>
    </div>
  </div>
</template> 
