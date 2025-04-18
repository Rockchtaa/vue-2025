<script setup>
import JobListing from '@/components/JobListing.vue'
import data from '@/jobs.json'

const jobs = data.jobs
</script>

<template>
  <JobListing :jobs="jobs" />
</template>
