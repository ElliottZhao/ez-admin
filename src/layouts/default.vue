<script setup lang="ts">
  import PageLayout from './page.vue';
  defineOptions({
    name: 'DefaultLayout',
  });
</script>

<template>
  <n-config-provider preflight-style-disabled>
    <n-layout class="h-screen" has-sider>
      <n-layout-sider>
        <div>Menu</div>
      </n-layout-sider>
      <n-layout content-class="flex flex-col">
        <n-layout-header>
          <span>Header</span>
        </n-layout-header>
        <n-layout-content
          content-class="flex-1 overflow-y-hidden flex flex-col"
        >
          <div>tabs</div>
          <PageLayout />
        </n-layout-content>
        <n-layout-footer>
          <span>Footer</span>
        </n-layout-footer>
      </n-layout>
    </n-layout>
  </n-config-provider>
</template>
