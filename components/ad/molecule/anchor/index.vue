<template>
  <a
    :href="props.href"
    :rel="props.rel"
    :target="props.target"
    :style="props.style"
  >
    <slot />
    <ad-atom-icon v-if="props.icon" :icon="props.icon" />
    {{ props.label }}
  </a>
</template>

<script setup lang="ts">
import type { AnchorInterface } from '.'

const props = defineProps<AnchorInterface>()
</script>
