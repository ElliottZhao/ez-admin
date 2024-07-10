<script setup lang="ts">
import type { FormInst } from 'naive-ui';

definePageMeta({
  auth: {
    unauthenticatedOnly: true,
    navigateAuthenticatedTo: '/',
  },
  layout: 'page',
  title: 'pages.title.login',
});
const { signIn } = useAuth();
const { t, locale, locales } = useI18n();
const localePath = useLocalePath();
const switchLocalePath = useSwitchLocalePath();

const availableLocales = computed(() => {
  return locales.value.filter(i => i.code !== locale.value);
});

const form = ref({
  username: '',
  password: '',
});

const rules = {
  username: {
    required: true,
    message: t('pages.signIn.username.required'),
    trigger: 'blur',
  },
  password: {
    required: true,
    message: t('pages.signIn.password.required'),
    trigger: 'blur',
  },
};
const formRef = ref<FormInst | null>();

const submit = async () => {
  const validate = await formRef.value?.validate();
  if (!validate?.warnings) {
    signIn('credentials', {
      ...form.value,
      callbackUrl: localePath('/', locale.value),
    });
  }
};
</script>

<template>
  <n-layout has-sider class="h-screen">
    <n-layout-sider
      content-class="p-4"
      content-style="background: url(https://images.unsplash.com/photo-1497005367839-6e852de72767)"
    >
    </n-layout-sider>
    <n-layout content-class="h-full flex flex-col">
      <n-layout-content
        content-class="p-4 flex flex-col items-center justify-center gap-2"
      >
        <n-gradient-text
          type="primary"
          class="absolute top-4 left-4 text-2xl"
          >{{ $t('layouts.title') }}</n-gradient-text
        >
        <n-form
          ref="formRef"
          :model="form"
          :rules="rules"
          label-placement="left"
          label-width="auto"
          class="w-[400px]"
        >
          <n-form-item
            :label="$t('pages.signIn.username.label')"
            path="username"
          >
            <n-input v-model:value="form.username" />
          </n-form-item>
          <n-form-item
            :label="$t('pages.signIn.password.label')"
            path="password"
          >
            <n-input type="password" v-model:value="form.password" />
          </n-form-item>
          <n-form-item>
            <n-button @click="submit">
              {{ $t('pages.signIn.signInWithCredentials') }}
            </n-button>
          </n-form-item>
        </n-form>
      </n-layout-content>
      <n-layout-footer class="p-4 flex items-center justify-center"
        ><span class="text-sm text-gray-500"
          >Elliott Zhao@2024</span
        ></n-layout-footer
      >
    </n-layout>
  </n-layout>
  <div class="absolute top-4 right-4">
    <NuxtLink
      v-for="locale in availableLocales"
      :key="locale.code"
      :to="switchLocalePath(locale.code)"
    >
      {{ locale.name }}
    </NuxtLink>
  </div>
</template>
