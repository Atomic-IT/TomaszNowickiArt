<template>
  <div class="gallery">
    <ad-atom-heading
      :tag="2"
      text="Galeria obrazów"
      class="gallery-title shiny-text title"
    />
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
        v-for="(image, index) in paintings"
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

import { paintings } from '.'
</script>

<style lang="scss">
@use 'index';
</style>
