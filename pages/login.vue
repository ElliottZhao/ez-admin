<script setup lang="ts">
definePageMeta({
    auth: {
        unauthenticatedOnly: true,
        navigateAuthenticatedTo: '/',
    },
    layout: 'page',
})
const { signIn } = useAuth()
const { setLocale } = useI18n()
</script>

<template>
  <div>
    <button @click="setLocale('en')">{{$t('en')}}</button>
    <button @click="setLocale('zh')">{{$t('zh')}}</button>
    <p>{{$t('signInOptions')}}:</p>
    <button @click="signIn('credentials', { username: 'admin', password: 'admin', callbackUrl: '/' })">{{$t('signInWithCredentials')}}</button>
  </div>
</template>