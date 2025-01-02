<template>
  <div class="gallery">
    <h2 class="gallery-title">Galeria obrazów</h2>
    <swiper
      class="gallery-swiper"
      :modules="[Autoplay]"
      :grab-cursor="true"
      :slides-per-view="1"
      :breakpoints="{
        '600': {
          slidesPerView: 2,
          slidesPerGroup: 2,
        },
        '1200': {
          slidesPerView: 3,
          slidesPerGroup: 3,
        },
      }"
      :autoplay="{
        delay: 5000,
      }"
      :lazy="true"
      free-mode
      loop
    >
      <swiper-slide
        v-for="(image, index) in images"
        :key="index"
        class="gallery-swiper-slide"
      >
        <img
          class="gallery-swiper-slide-image"
          :src="image.source"
          :alt="image.alt"
          fetchpriority="low"
        />
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup lang="ts">
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'

import 'swiper/swiper-bundle.css'

const imageBaseNames = [
  'glacier',
  'circle',
  'nocturne',
  'in-the-clouds',
  'foggy-portal',
  'in-the-air',
  'castle-tree',
  'spire',
  'hovering-pyramid',
  'pyramid',
  'floating-pyramid',
  'mystical-pyramid',
  'fire-walk-with-me',
  'ink-flood',
  'enormous-loneliness',
  'weeping-willow',
  'surreal-tree',
  'barrens',
  'without-title-2',
  'frozen-tree',
  'tower',
  'without-title-1',
  'uroboros',
  'dragon-hunting',
]

const images = imageBaseNames.map((name) => ({
  source: `img/gallery/${name}.webp`,
  alt: `${name.replace(/-/g, ' ')} painting`,
}))
</script>

<style lang="scss">
@use 'index';
</style>
