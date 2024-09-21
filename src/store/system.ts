import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useSystemStore = defineStore('system', () => {
  const tabs = ref<string[]>([]);
  const cachedPages = ref<string[]>([]);

  return {
    tabs,
    cachedPages,
  };
});
