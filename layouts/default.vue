<script setup lang="ts">
const { setLocale } = useI18n()
</script>
<template>
  <button @click="setLocale('en')">{{$t('en')}}</button>
  <button @click="setLocale('zh')">{{$t('zh')}}</button>
  <NuxtPage />
</template>