<template>
  <nav class="navbar">
    <div class="container">
      <ad-molecule-anchor
        href="https://www.youtube.com/@wejrzeniawsiebie8813"
        label="Sztanga & Sztaluga"
        target="_blank"
        class="navbar-heading"
      />
      <desktop />
      <mobile />
    </div>
  </nav>
</template>

<script setup lang="ts">
import { Desktop, Mobile } from './components'
</script>

<style lang="scss">
@use 'index';
</style>
