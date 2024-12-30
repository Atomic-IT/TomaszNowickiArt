<template>
  <div id="about" class="about-container">
    <img
      src="public/img/tomasz-nowicki.webp"
      class="image-artist"
      alt="Tomasz Nowicki"
    />
    <div class="description">
      <h3>Nazywam się Tomasz Nowicki.</h3>
      <p class="description-content">
        Ukończyłem Wydział Sztuk Pięknych na Uniwersytecie im. Jana Długosza w
        Częstochowie w 2019r. Malarstwo studiowałem pod kierownictwem prof.
        Mariana Jarzemskiego. Zakres moich prac to malarstwo sztalugowe olejne
        oraz rysunek.
      </p>
      <div class="social-links">
        <a href="https://www.instagram.com/tomasz_nowy_nowicki_art/">
          <img
            class="social-links-image"
            src="/img/instagram.webp"
            alt="instagram icon"
        /></a>
        <a href="https://www.facebook.com/profile.php?id=100087463981706">
          <img
            class="social-links-image"
            src="/img/facebook.webp"
            alt="facebook icon"
        /></a>
        <a href="https://www.youtube.com/@wejrzeniawsiebie8813">
          <img
            class="social-links-image"
            src="/img/youtube.webp"
            alt="youtube icon"
        /></a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
.about-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  color: #fff;
  opacity: 0;
  animation: fade-in 0.7s 1s forwards;

  .image-artist {
    max-width: 400px;
    max-height: 400px;
    margin-bottom: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  }

  .description {
    display: flex;
    flex-direction: column;
    font-size: 1.2rem;
    line-height: 1.6;
    max-width: 600px;
    margin-left: 3em;
    padding: 3em;
  }

  .social-links {
    display: flex;
    justify-content: start;
    gap: 1.2em;
    margin-top: 1em;

    .social-links-image {
      width: 40px;
      height: 40px;
      cursor: pointer;
      transition:
        transform 0.5s ease,
        opacity 0.5s ease;
    }
    .social-links-image:hover {
      transform: scale(1.2);
      opacity: 0.5;
    }
  }
  .description-content {
    margin-top: -0.5em;
  }
}
@keyframes fade-in {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

@media (max-width: 1024px) {
  .about-container {
    flex-direction: column;
    height: auto;
    justify-content: center;
    align-items: center;
    text-align: center;

    .description {
      max-width: 80%;
      font-size: 1.5em;

      .social-links {
        justify-content: center;
      }
    }
  }
}

@media (max-width: 768px) {
  .about-container {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;

    .description {
      font-size: 1.5rem;
      max-width: 90%;
      margin-left: 0;
      text-align: center;
    }

    .social-links {
      justify-content: center;
    }
  }
}

@media (max-width: 480px) {
  .description {
    font-size: 0.95rem;
  }
}
</style>
