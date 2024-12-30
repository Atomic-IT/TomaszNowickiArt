<template>
  <div class="gallery-container">
    <h2 class="gallery-title">Galeria obrazów</h2>
    <swiper class="my-swiper" :modules="[Navigation]" navigation loop>
      <swiper-slide
        v-for="(image, index) in images"
        :key="index"
        class="gallery-slide"
      >
        <img class="gallery-image" :src="image.source" :alt="image.alt" />
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup lang="ts">
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'

import 'swiper/swiper-bundle.css'

const images = ref([
  {
    source: 'img/gallery/castle-tree.webp',
    alt: 'Castle Tree painting',
  },
  {
    source: 'img/gallery/floating-pyramid.webp',
    alt: 'Floating Pyramid painting',
  },
  {
    source: 'img/gallery/foggy-portal.webp',
    alt: 'Foggy Portal painting',
  },
  {
    source: 'img/gallery/hovering-pyramid.webp',
    alt: 'Hovering Pyramid painting',
  },
  {
    source: 'img/gallery/in-the-air.webp',
    alt: 'In the Air painting',
  },
  {
    source: 'img/gallery/in-the-clouds.webp',
    alt: 'In the Clouds painting',
  },
  {
    source: 'img/gallery/mystical-pyramid.webp',
    alt: 'Mystical Pyramid painting',
  },
  {
    source: 'img/gallery/nokturn.webp',
    alt: 'Nokturn painting',
  },
  {
    source: 'img/gallery/pyramid.webp',
    alt: 'Pyramid painting',
  },
  {
    source: 'img/gallery/surreal-tree.webp',
    alt: 'Surreal Tree painting',
  },
  {
    source: 'img/gallery/tower.webp',
    alt: 'Tower painting',
  },
  {
    source: 'img/gallery/weeping-willow.webp',
    alt: 'Weeping Willow painting',
  },
])
</script>

<style scoped lang="scss">
.gallery-container {
  padding: 3em;
  text-align: center;

  .my-swiper {
    margin-top: 3em;
  }

  .gallery-title {
    font-size: 2em;
    color: #99ccff;
    text-shadow: 0 0 5px;
  }

  .gallery-slide-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .gallery-image {
    max-width: 50%;
    border-radius: 8px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  }

  .gallery-image-title {
    margin: 10px 0;
    font-size: 1.2rem;
    color: #fff;
  }

  .gallery-image-description {
    font-size: 1rem;
    color: #fff;
  }

  .gallery-title {
    font-size: 2rem;
  }

  .swiper-button-prev,
  .swiper-button-next {
    width: 35px;
    height: 35px;
  }

  @media (max-width: 1024px) {
    .gallery-slide-content {
      margin-top: 5em;
    }
    .gallery-title {
      margin-top: 3em;
      font-size: 3em;
    }

    .gallery-image {
      max-width: 80%;
    }
  }
}

@media (max-width: 768px) {
  .gallery-slide-content {
    margin: 1em;
  }

  .gallery-title {
    font-size: 3em;
    margin-bottom: -1em;
  }

  .swiper-button-prev,
  .swiper-button-next {
    width: 35px;
    height: 35px;
  }
}

@media (max-width: 480px) {
  .gallery-title {
    font-size: 1.2rem;
  }

  .gallery-image-title {
    font-size: 1rem;
  }

  .gallery-image-description {
    font-size: 0.9rem;
  }
}
</style>
