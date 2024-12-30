<template>
  <div class="gallery">
    <h2 class="gallery-title">Galeria obrazów</h2>
    <swiper
      class="gallery-swiper"
      :modules="[Autoplay]"
      :slides-per-view="1"
      :breakpoints="{
        '600': {
          slidesPerView: 2,
        },
        '1200': {
          slidesPerView: 3,
        },
      }"
      autoplay
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
  'castle-tree',
  'floating-pyramid',
  'foggy-portal',
  'hovering-pyramid',
  'in-the-air',
  'in-the-clouds',
  'mystical-pyramid',
  'nokturn',
  'pyramid',
  'surreal-tree',
  'tower',
  'weeping-willow',
]

const images = imageBaseNames.map((name) => ({
  source: `img/gallery/${name}.webp`,
  alt: `${name.replace(/-/g, ' ')} painting`,
}))
</script>

<style lang="scss">
@use 'index';
</style>
