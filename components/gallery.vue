<template>
  <div class="gallery-container" id="galleria">
    <h2 class="gallery-title">Galeria obrazów</h2>
    <swiper-container class="my-swiper" :modules="[Navigation]" navigation loop>
      <swiper-slide
        v-for="(image, idx) in images"
        :key="idx"
        class="gallery-slide"
      >
        <div class="gallery-slide-content">
          <img class="gallery-image" :src="image.source" :alt="image.title" />
          <h3 class="gallery-image-title">{{ image.title }}</h3>
          <p class="gallery-image-description">{{ image.description }}</p>
        </div>
      </swiper-slide>
    </swiper-container>
  </div>
</template>

<script setup lang="ts">
import { Navigation } from 'swiper/modules'

import 'swiper/swiper-bundle.css'

const images = ref([
  {
    source: 'img/gallery/castle-tree.webp',
    title: 'Obraz 1',
    description: 'Opis obrazu 1',
  },
  {
    source: 'img/gallery/floating-pyramid.webp',
    title: 'Obraz 2',
    description: 'Opis obrazu 2',
  },
  {
    source: 'img/gallery/foggy-portal.webp',
    title: 'Obraz 3',
    description: 'Opis obrazu 3',
  },
  {
    source: 'img/gallery/hovering-pyramid.webp',
    title: 'Obraz 4',
    description: 'Opis obrazu 4',
  },
  {
    source: 'img/gallery/in-the-air.webp',
    title: 'Obraz 5',
    description: 'Opis obrazu 5',
  },
  {
    source: 'img/gallery/in-the-clouds.webp',
    title: 'Obraz 6',
    description: 'Opis obrazu 6',
  },
  {
    source: 'img/gallery/mystical-pyramid.webp',
    title: 'Obraz 7',
    description: 'Opis obrazu 7',
  },
  {
    source: 'img/gallery/nokturn.webp',
    title: 'Obraz 8',
    description: 'Opis obrazu 8',
  },
  {
    source: 'img/gallery/pyramid.webp',
    title: 'Obraz 9',
    description: 'Opis obrazu 9',
  },
  {
    source: 'img/gallery/surreal-tree.webp',
    title: 'Obraz 10',
    description: 'Opis obrazu 10',
  },
  {
    source: 'img/gallery/tower.webp',
    title: 'Obraz 11',
    description: 'Opis obrazu 11',
  },
  {
    source: 'img/gallery/weeping-willow.webp',
    title: 'Obraz 12',
    description: 'Opis obrazu 12',
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
