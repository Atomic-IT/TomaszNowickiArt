<template>
  <div class="contact">
    <div class="container">
      <div class="contact-content">
        <ad-atom-heading
          :tag="3"
          text="Kontakt"
          class="contact-content-title shiny-text title"
        />
        <ad-atom-paragraph
          text="Masz jakieś pytania? Skontaktuj się ze mną, a chętnie opowiem Ci więcej o mojej pracy."
          class="contact-content-description"
        />
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
