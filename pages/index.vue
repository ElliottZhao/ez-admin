<script setup lang="ts">
definePageMeta({
  title: 'pages.title.dashboard',
});
const { status, data, lastRefreshedAt, signOut } = useAuth();
</script>
<template>
  <div>
    <p>status: {{ status }}</p>
    <p>data: {{ data }}</p>
    <p>lastRefreshedAt: {{ lastRefreshedAt }}</p>
    <n-button
      v-if="status === 'authenticated'"
      @click="signOut({ callbackUrl: '/login' })"
    >
      {{ $t('layouts.signOut') }}
    </n-button>
  </div>
</template>
