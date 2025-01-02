<template>
  <div id="index">
    <home-navbar />
    <home-about />
    <home-gallery />
    <home-contact />
    <home-footer />
    <background />
  </div>
</template>

<style lang="scss">
#index {
  display: flex;
  flex-direction: column;
  gap: 2em;

  @media (width >= 768px) {
    gap: 5em;
  }

  @media (width >= 992px) {
    gap: 8em;
  }

  @media (width >= 1200px) {
    gap: 12em;
  }
}
</style>
