<template>
  <div class="footer">
    <div class="container">
      <div class="footer-artist">
        <ad-atom-heading
          :tag="4"
          text="Tomasz Nowicki"
          class="footer-artist-heading shiny-text title"
        />
        <div class="footer-artist-contact-info">
          <ad-atom-paragraph
            text="nowickitn@wp.pl"
            @click="copyContent('nowickitn@wp.pl')"
          >
            <i class="pi pi-copy"></i>
          </ad-atom-paragraph>
          <ad-atom-paragraph
            text="+48 123 456 789"
            @click="copyContent('+48 123 456 789')"
          >
            <i class="pi pi-copy"></i>
          </ad-atom-paragraph>
          <ad-template-social-links />
        </div>
      </div>

      <div class="footer-authors">
        <ad-molecule-anchor href="https://github.com/Atomic-IT">
          made by &nbsp;
          <span class="shiny-text">Atomic IT</span>
          <img
            class="desktop"
            src="/logo.png"
            width="28"
            height="28"
            alt="Atomic IT logo"
          />
        </ad-molecule-anchor>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@use 'index';
</style>
