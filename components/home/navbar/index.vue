<template>
  <nav class="navbar">
    <div class="container">
      <p class="navbar-heading">Sztanga & Sztaluga</p>
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
