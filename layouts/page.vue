<script setup lang="ts">
import { zhCN, dateZhCN, enUS, dateEnUS } from 'naive-ui';
import type { NLocale, NDateLocale } from 'naive-ui';

const route = useRoute();
const { t, locale } = useI18n();
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
        <slot />
      </n-config-provider>
    </Body>
  </Html>
</template>
