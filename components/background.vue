<template>
  <div class="background-image-blur"></div>
  <img class="background-image desktop" src="/background.jpg" alt="" />
</template>

<style scoped lang="scss">
.background-image-blur {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  z-index: -1;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(1em);
  overflow: hidden;
  opacity: 0;
  animation: fade-in 1s 0.5s forwards;
}

.background-image {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  object-fit: cover;
  z-index: -2;
  opacity: 0;
  animation:
    fade-in 1.5s forwards,
    zoom-in 1s 0.7s ease-out forwards;
}

@keyframes fade-in {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

@keyframes zoom-in {
  0% {
    transform: none;
  }
  100% {
    transform: scale(1.2);
  }
}
</style>
