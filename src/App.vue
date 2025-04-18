<script setup>
import Navbar from '@/components/Navbar.vue';
import HeroSec from '@/components/HeroSec.vue';
import { RouterView } from 'vue-router';
import { ref } from 'vue';
const title = ref('Vue Jobs');
const paragraph = ref('Find your dream job in the Vue.js ecosystem!');


</script>

<template>
  <Navbar />
  <HeroSec :title="title" :paragraph="paragraph"/>
  <RouterView />
</template>
