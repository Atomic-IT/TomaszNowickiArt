<template>
  <div class="navbar-items">
    <ad-molecule-anchor
      v-for="(link, index) in navbarItems"
      :key="index"
      :href="link.href"
      :label="link.label"
      :data-replace="link.label"
      class="navbar-items-link"
    />
  </div>
</template>

<script setup lang="ts">
import { navbarItems } from '~/components'
</script>

<style lang="scss">
@use 'index';
</style>
