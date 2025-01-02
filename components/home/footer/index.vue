<template>
  <div class="footer">
    <div class="container">
      <div class="footer-artist">
        <h4 class="footer-artist-heading shiny-text title">Tomasz Nowicki</h4>
        <div class="footer-artist-contact-info">
          <p @click="copyContent('nowickitn@wp.pl')">
            nowickitn@wp.pl<i class="pi pi-copy"></i>
          </p>
          <p @click="copyContent('+48 123 456 789')">
            +48 123 456 789<i class="pi pi-copy"></i>
          </p>
        </div>
      </div>

      <div class="footer-authors">
        <a href="https://github.com/Atomic-IT">
          made by &nbsp;
          <span class="shiny-text">Atomic IT</span>
          <img
            class="desktop"
            src="/logo.png"
            width="30"
            height="30"
            alt="Atomic IT logo"
          />
        </a>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@use 'index';
</style>
