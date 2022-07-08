import { ref } from 'vue';
import axios from 'axios';

export const isLoading = ref(false);

axios.interceptors.request.use((config) => {
  isLoading.value = true;
  return config;
});

axios.interceptors.response.use(
  (response) => {
    isLoading.value = false;
    return response;
  },
  (error) => {
    isLoading.value = false;
    throw error;
  }
);
