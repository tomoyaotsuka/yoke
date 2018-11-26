<template>
  <p class="logo">
    <span class="" data-effect="blur">y</span>
    <span class="" data-effect="blur">O</span>
    <span class="" data-effect="blur">K</span>
    <span class="" data-effect="blur">E</span>
  </p>
</template>

<style lang="scss" scoped>
.logo {
  margin: 0 0 0 0.28em;
  font-family: 'Brandon Grotesque Light';
  font-size: 3.2rem;
  line-height: 1;
  letter-spacing: .050em;

  span {
    display: inline-block;
    position: relative;
    -webkit-font-smoothing: subpixel-antialiased;
    &:first-child {
      top: -0.27em;
      // left: -2px;
      transform: scaleX(1.28);
    }
  }
}
</style>
