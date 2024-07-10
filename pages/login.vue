<script setup lang="ts">
definePageMeta({
    auth: {
        unauthenticatedOnly: true,
        navigateAuthenticatedTo: '/',
    },
    layout: 'page',
})
const { signIn } = useAuth()
const { locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()

const availableLocales = computed(() => {
  return locales.value.filter(i => i.code !== locale.value)
})
</script>

<template>
  <div>
    <NuxtLink v-for="locale in availableLocales" :key="locale.code" :to="switchLocalePath(locale.code)">
      {{ locale.name }}
    </NuxtLink>
    <p>{{$t('pages.login.signInOptions')}}:</p>
    <button @click="signIn('credentials', { username: 'admin', password: 'admin', callbackUrl: '/' })">{{$t('pages.login.signInWithCredentials')}}</button>
  </div>
</template>