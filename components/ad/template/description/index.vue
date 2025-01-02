<template>
  <div class="template-description">
    <div class="container">
      <img
        :src="props.src"
        :alt="props.alt"
        class="template-description-image"
      />
      <div class="template-description-content">
        <ad-atom-heading
          v-if="props.headingTag && (props.heading || props.shinyHeading)"
          :tag="props.headingTag"
          :text="props.heading"
          class="template-description-content-heading"
        >
          <span v-if="props.shinyHeading" class="shiny-text">
            {{ props.shinyHeading }}
          </span>
        </ad-atom-heading>
        <ad-atom-paragraph
          v-if="props.paragraph"
          :text="props.paragraph"
          class="template-description-content-paragraph"
        />
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { TemplateDescriptionInterface } from '.'

const props = defineProps<TemplateDescriptionInterface>()
</script>

<style lang="scss">
@use 'index';
</style>
