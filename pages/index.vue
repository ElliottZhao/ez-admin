<script setup lang="ts">
const {
  status,
  data,
  lastRefreshedAt,
  signOut,
} = useAuth()
definePageMeta({
  title: 'pages.title.home'
})
</script>
<template>
  <div>
    <p>status: {{ status }}</p>
    <p>data: {{ data }}</p>
    <p>lastRefreshedAt: {{ lastRefreshedAt }}</p>
    <button v-if="status === 'authenticated'" @click="signOut({callbackUrl: '/login'})">{{$t('layouts.signOut')}}</button>
  </div>
</template>