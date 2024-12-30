<template>
  <div class="contact-container">
    <div class="contact-content">
      <h2 class="contact-title">Kontakt</h2>
      <p class="contact-description">
        Masz pytania? Skontaktuj się ze mną, a chętnie odpowiem na Twoje pytania
        dotyczące mojej pracy.
      </p>
      <div class="contact-buttons">
        <a href="mailto:email@example.com" class="contact-button">Gmail</a>
      </div>
    </div>

    <div class="social-links">
      <a href="https://www.instagram.com/tomasz_nowy_nowicki_art/">
        <img
          class="social-links-image"
          src="/img/instagram.webp"
          alt="Instagram"
        />
      </a>
      <a href="https://www.facebook.com/profile.php?id=100087463981706">
        <img
          class="social-links-image"
          src="/img/facebook.webp"
          alt="Facebook"
        />
      </a>
      <a href="https://www.youtube.com/@wejrzeniawsiebie8813">
        <img class="social-links-image" src="/img/youtube.webp" alt="YouTube" />
      </a>
    </div>
  </div>
</template>

<style scoped lang="scss">
.contact-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  .contact-content {
    text-align: center;

    .contact-title {
      font-weight: bold;
      font-size: 2em;
      color: #b3cde0;
      text-shadow: 0 0 5px;
      padding: 0.2em;
    }

    .contact-description {
      font-size: 1.2rem;
      color: #b3cde0;
      margin-bottom: 2rem;
      line-height: 1.6;
      padding: 0.5em;
    }
  }

  .contact-buttons {
    .contact-button {
      display: inline-block;
      padding: 0.8em 2em;
      font-size: 1em;
      color: #e6f7ff;
      border: 2px solid #e6f7ff;
      border-radius: 10px;
      text-decoration: none;
      transition:
        background-color 0.3s,
        color 0.3s;

      &:hover {
        background-color: #e6f7ff;
        color: #121212;
      }
    }
  }

  .social-links {
    display: flex;
    justify-content: center;
    gap: 2em;
    padding: 1em;

    .social-links-image {
      width: 60px;
      height: 60px;
      cursor: pointer;
      transition:
        transform 0.3s ease,
        opacity 0.3s ease;

      &:hover {
        transform: scale(1.2);
        opacity: 0.7;
      }
    }
  }
  @media (max-width: 1024px) {
    .contact-content {
      .contact-title {
        font-size: 3em;
      }

      .contact-description {
        font-size: 2.2em;
      }
    }

    .contact-buttons {
      .contact-button {
        font-size: 1.7em;
      }
    }
    .social-links {
      .social-links-image {
        width: 50px;
        height: 50px;
      }
    }
  }

  @media (max-width: 768px) {
    .contact-content {
      .contact-title {
        font-size: 2.5em;
      }

      .contact-description {
        font-size: 2.2em;
      }
    }

    .contact-buttons {
      .contact-button {
        font-size: 1.5em;
      }
    }
  }
}
</style>
