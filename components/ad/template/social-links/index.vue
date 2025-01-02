<template>
  <div class="social-links">
    <a
      v-for="(link, index) in socialLinks"
      :key="index"
      :class="link.icon"
      :href="link.url"
      :aria-label="link.label"
      target="_blank"
    ></a>
  </div>
</template>

<script setup lang="ts">
import { socialLinks } from '~/components'
</script>

<style lang="scss">
@use 'index';
</style>
