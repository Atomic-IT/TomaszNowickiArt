<template>
  <div class="mobile">
    <ad-atom-button
      icon="pi pi-bars"
      aria-label="Expand sidebar button"
      class="navbar-items-button"
      @click="visibleRight = true"
    />
    <Drawer
      v-model:visible="visibleRight"
      position="right"
      class="navbar-items-drawer"
    >
      <ad-atom-paragraph text="Tomasz Nowicki" class="shiny-text title" />
      <navbar-items />
      <ad-template-social-links />
    </Drawer>
  </div>
</template>

<script setup lang="ts">
import { NavbarItems } from '../'

const visibleRight = ref(false)
</script>

<style lang="scss">
@use 'index';
</style>
