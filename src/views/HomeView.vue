<script setup>
import { ref, computed } from 'vue'
import data from '@/jobs.json'
import HeroSec from '@/components/HeroSec.vue'
import HomeCards from '@/components/HomeCards.vue'
import JobListing from '@/components/JobListing.vue'
import ToggleJobsButton from '@/components/ToggleJobsButton.vue'

const title = ref('Vue Jobs')
const paragraph = ref('Find your dream job in the Vue.js ecosystem!')

const showAll = ref(false)
const allJobs = data.jobs

const jobsToShow = computed(() => (showAll.value ? allJobs : allJobs.slice(0, 3)))

function toggleJobs() {
  showAll.value = !showAll.value
}
</script>

<template>
  <HeroSec :title="title" :paragraph="paragraph" />
  <HomeCards />
  <JobListing :jobs="jobsToShow" />
  <ToggleJobsButton :showAll="showAll" @toggle="toggleJobs" />
</template>
