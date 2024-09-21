<script setup lang="ts">
  import { RouterView } from 'vue-router';
  import { useSystemStore } from '@/store/system';

  defineOptions({
    name: 'PageLayout',
  });
  const systemStore = useSystemStore();
</script>

<template>
  <div>Breadcrumbs</div>
  <div class="flex-1 overflow-y-auto">
    <keep-alive :include="systemStore.cachedPages">
      <RouterView />
    </keep-alive>
  </div>
</template>
