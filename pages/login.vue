<script setup lang="ts">
definePageMeta({
    auth: {
        unauthenticatedOnly: true,
        navigateAuthenticatedTo: '/',
    },
    layout: 'page',
})
const { signIn } = useAuth()
</script>

<template>
  <div>
    <p>Sign-In Options:</p>
    <button @click="signIn('credentials', { username: 'admin', password: 'admin', callbackUrl: '/' })">Username and Password</button>
  </div>
</template>