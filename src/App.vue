<template>
  <h1 v-if="isLoading">Application is loading</h1>
  <h1 v-else>Application is not loading</h1>
  <button @click="makeAxiosRequest">Make an Axios request</button>
</template>

<script setup>
import axios from 'axios';
import { isLoading } from './stores/loading';

const makeAxiosRequest = async () => {
  await axios.get('https://jsonplaceholder.typicode.com/photos');
};
</script>
