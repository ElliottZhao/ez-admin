<script setup lang="ts">
definePageMeta({
  title: 'pages.title.dashboard',
});
const { status, data, lastRefreshedAt } = useAuth();
</script>
<template>
  <div>
    <p>status: {{ status }}</p>
    <p>data: {{ data }}</p>
    <p>lastRefreshedAt: {{ lastRefreshedAt }}</p>
  </div>
</template>
