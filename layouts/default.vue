<script setup lang="ts">
import { zhCN, dateZhCN, enUS, dateEnUS, NAvatar, NText } from 'naive-ui';
import type { NLocale, NDateLocale } from 'naive-ui';

const route = useRoute();
const { t, locale, locales } = useI18n();
const localePath = useLocalePath();
const head = useLocaleHead({
  addDirAttribute: true,
  identifierAttribute: 'id',
  addSeoAttributes: true,
});
const title = computed(() => t(route.meta.title ?? '', t('layouts.title')));

const naiveLocales: Record<
  string,
  {
    locale: NLocale;
    dateLocale: NDateLocale;
  }
> = {
  zhCN: {
    locale: zhCN,
    dateLocale: dateZhCN,
  },
  enUS: {
    locale: enUS,
    dateLocale: dateEnUS,
  },
};
const { signOut } = useAuth();
const dropdownOptions = [
  {
    key: 'header',
    type: 'render',
    render: () =>
      h(
        'div',
        {
          class: 'p-4 flex items-center gap-2',
        },
        [
          h(NAvatar, {}, 'A'),
          h('div', {
            class: 'flex flex-col'
          }, [
            h(NText, { depth: 2 }, { default: () => 'Admin' }),
            h(NText, { depth: 3, class: 'text-sm' }, { default: () => '系统管理员' }),
          ]),
        ]
      ),
  },
  {
    label: t('layouts.signOut'),
    key: 'signOut',
  },
];
const switchLocalePath = useSwitchLocalePath();
const availableLocales = computed(() => {
  return locales.value.filter(i => i.code !== locale.value);
});
const dropdownSelect = (key: string) => {
  switch (key) {
    case 'signOut':
      signOut({ callbackUrl: localePath('/signIn', locale.value) });
      break;
  }
};
</script>
<template>
  <Html :lang="head.htmlAttrs.lang" :dir="head.htmlAttrs.dir">
    <Head>
      <Title>{{ title }}</Title>
      <template v-for="link in head.link" :key="link.id">
        <Link
          :id="link.id"
          :rel="link.rel"
          :href="link.href"
          :hreflang="link.hreflang"
        />
      </template>
      <template v-for="meta in head.meta" :key="meta.id">
        <Meta :id="meta.id" :property="meta.property" :content="meta.content" />
      </template>
    </Head>
    <Body>
      <n-config-provider
        :locale="naiveLocales[locale]?.locale"
        :date-locale="naiveLocales[locale]?.dateLocale"
        abstract
        inline-theme-disabled
      >
        <n-layout has-sider class="h-screen">
          <n-layout-sider content-class="p-4"> 侧栏 </n-layout-sider>
          <n-layout content-class="h-full flex flex-col">
            <n-layout-header class="p-4 flex items-center justify-between">
              <div></div>
              <div class="flex items-center gap-2">
                <NuxtLink
                  v-for="locale in availableLocales"
                  :key="locale.code"
                  :to="switchLocalePath(locale.code)"
                >
                  {{ locale.name }}
                </NuxtLink>
                <n-dropdown
                  trigger="hover"
                  :options="dropdownOptions"
                  @select="dropdownSelect"
                >
                  <div class="flex items-center gap-2">
                    <n-avatar size="small">A</n-avatar>
                    <span>{{ $t('layouts.welcome', { name: 'Admin' }) }}</span>
                  </div>
                </n-dropdown>
              </div>
            </n-layout-header>
            <n-layout-content content-class="p-4">
              <slot />
            </n-layout-content>
            <n-layout-footer class="p-4 flex items-center justify-center"><span class="text-sm text-gray-500">Elliott Zhao@2024</span></n-layout-footer>
          </n-layout>
        </n-layout>
      </n-config-provider>
    </Body>
  </Html>
</template>
