<template>
  <div class="contact">
    <div class="container">
      <div class="contact-content">
        <h3 class="contact-content-title shiny-text title">Kontakt</h3>
        <p class="contact-content-description">
          Masz jakieś pytania? Skontaktuj się ze mną, a chętnie opowiem Ci
          więcej o mojej pracy.
        </p>
        <ad-atom-button
          class="contact-content-button"
          label="Gmail"
          @click="navigateTo('mailto:email@example.com', { external: true })"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@use 'index';
</style>
