<template>
  <header class="header" id="header">
    <h1 class="logo">
      <Logo/>
    </h1>
  </header>
</template>

<script>
import Logo from '~/components/Logo'
export default {
  components: {
    Logo,
  },
}
</script>


<style lang="scss" scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100%;
  padding: $row6 $col1;
  // border-bottom: 1px solid rgba(255,255,255,.9);
  // background: rgba($white,0.8);
  // background: linear-gradient(rgba(255,255,255,0.9), rgba(255,255,255,0.8));
  // background: linear-gradient(rgba(255,255,255,1) 60%, rgba(255,255,255,0));
  // background: linear-gradient(#fff, rgba(255,255,255,0));
  // backdrop-filter: blur(3px);

  .logo {
    // height: 24px;
    // img {
    //   width: auto;
    //   height: 100%;
    // }
    font-size: 2.4rem;
  }
}

@media screen and (min-width: 769px) {
  .header {
    background: none;
  }
}
</style>
