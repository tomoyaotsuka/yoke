<template>
  <div class="page">
    <!-- <div class="opening">
      <Logo/>
    </div> -->
  </div>
</template>

<script>
import anime from 'animejs'
import Joyride from '~/plugins/Joyride'
// import Logo from '@/components/Logo'
export default {
  components: {
    // Logo,
  },
  mounted() {
    const joyride = new Joyride()
    joyride.stagger('.logo span', 100, 100);

    // const tl = anime.timeline({
    //   complete: () => {
    //     document.querySelector('.opening').style.visibility = 'hidden'
    //     document.querySelector('.header').style.opacity = 1
    //   }
    // });

    // tl
    //   .add({
    //     targets: '.opening p',
    //     filter: 'blur(32px)',
    //     opacity: 0,
    //     // scale: 1.2,
    //     easing: 'linear',
    //     duration: 600,
    //     delay: 3600,
    //   })
    //   .add({
    //     targets: '.opening',
    //     filter: 'blur(32px)',
    //     opacity: 0,
    //     scale: 1.2,
    //     easing: 'linear',
    //     duration: 300,
    //   })
  }
}
</script>

<style lang="scss">
// .header {
//   opacity: 0;
// }
.page {
  // .opening {
  //   position: fixed;
  //   top: 0;
  //   left: 0;
  //   z-index: 100;
  //   width: 100%;
  //   height: 100%;
  //   background: #858687;
  //   .logo {
  //     @include centering();
  //     position: absolute;
  //     margin: 0;
  //     color: #e8e8e8;
  //     span {
  //       filter: blur(16px);
  //       transition: all 2s;
  //       &.active {
  //         filter: blur(0);
  //       }
  //     }
  //   }
  // }
}
</style>
