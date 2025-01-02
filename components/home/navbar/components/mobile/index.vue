<template>
  <div class="mobile">
    <div class="navbar-items">
      <ad-atom-button
        class="navbar-items-button"
        icon="pi pi-bars"
        aria-label="Expand sidebar button"
        @click="visibleRight = true"
      />
      <Drawer
        v-model:visible="visibleRight"
        class="navbar-items-drawer"
        position="right"
      >
        <p class="shiny-text title">Tomasz Nowicki</p>
        <div class="navbar-items-container">
          <a href="/">STRONA GŁÓWNA</a>
          <a href="/">O MNIE</a>
          <a href="/">GALERIA</a>
          <a href="/">KONTAKT</a>
        </div>
        <social-links />
      </Drawer>
    </div>
  </div>
</template>

<script setup lang="ts">
const visibleRight = ref(false)
</script>

<style lang="scss">
@use 'index';
</style>
