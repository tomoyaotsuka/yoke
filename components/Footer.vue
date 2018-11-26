<template lang="pug">
  div.footer
    nuxt-link(:to="'/'+props.path")
      //- img(:src="require(`@/assets/images/${props.path}/navigation_visual.jpg`)")
      div.text
        p.subheads Next
        h3.headline.
          {{ props.name }}
</template>

<script>
export default {
  props: [
    'props',
  ]
}
</script>


<style lang="scss" scoped>
// .footer {
//   @include metallic-ratio('silver');
//   position: relative;
//   overflow: hidden;
//   // padding: round-decimal(586/768*100%) 0 0;
//   background: #828282;
//   a {
//     display: block;
//     position: absolute;
//     top: 0;
//     left: 0;
//     z-index: 10;
//     width: 100%;
//     height: 100%;
//     color: $white;
//     &:after {
//       @include arrow(32px, 1px, $white, 'right');
//       // @include centeringY();
//       position: absolute;
//       right: $col1;
//     }
//   }
//   .text {
//     @include centeringY();
//     position: absolute;
//     left: $col3;
//     z-index: 10;
//     text-shadow: 0 0 4px rgba($black,.8);
//     .subheads {
//       display: inline-block;
//       position: relative;
//       top: -1px;
//       margin: 0 32px 0 0;
//       font-size: 1.1rem;
//     }
//     .headline {
//       display: inline-block;
//       font-family: 'Proxima Nova Light';
//       font-size: 1.6rem;
//       text-transform: uppercase;
//     }
//   }

//   img {
//     z-index: 0;
//     opacity: .4;
//   }

//   a::before {
//     content: '';
//     display: block;
//     position: absolute;
//     top: 0;
//     left: 0;
//     z-index: 1;
//     opacity: .48;
//     width: 100%;
//     height: 100%;
//     background: linear-gradient(90deg, rgba($black,.32), $black);
//     // background: $black;
//     mix-blend-mode: overlay;
//   }
// }

// @media screen and (min-width: 769px) {

  .footer {
    // display: none;

    height: auto;
    // margin: 0 0 0 $col1 + $col4;
    margin: 0 0 0 $col3;
    padding: 0 0 $row16;
    background: none;

    a {
      position: relative;
      color: $black;

      &::before {
        display: none;
      }

      img {
        display: none;
      }

      .text {
        position: relative;
        top: 0;
        left: 0;
        text-shadow: none;
        transform: translateY(0);

        .subheads,
        .headline {
          display: inline-block;
        }

        .subheads {
          margin: 0 16px 0 0;
        }

        &::after {
          @include arrow(8px, 1px, $black, 'right');
          display: inline-block;
          position: relative;
          top: -1px;
          margin: 0 0 0 64px;
        }
      }
    }
  }
// }

@media screen and (min-width: 769px) {

  .footer {
    display: none;
  }
}
</style>
