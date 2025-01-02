<template>
  <div class="desktop">
    <div class="navbar-items">
      <a
        v-for="(link, index) in navbarItems"
        :key="index"
        :href="link.href"
        class="navbar-items-link"
      >
        {{ link.label }}
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { navbarItems } from '~/components'
</script>

<style lang="scss">
@use 'index';
</style>
