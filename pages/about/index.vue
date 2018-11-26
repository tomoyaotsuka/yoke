<template lang="pug">
div
  section.page
    h2.headline About
    div.thumbnail
      img(src="~assets/images/about/mainvisual.jpg")
    div.bodycopy
      p.paragraph.ja.
        ブランド名の"YOKE/ヨーク"は、<br class="mobile-only">
        『繋ぐ』『絆』『洋服の切り替え布』などの意味。
      p.paragraph.ja.
        "つなぐ" をコンセプトに<br class="mobile-only">
        2018AWにブランドをスタート。
      p.paragraph.ja.
        『モノがヒトをつなぎ、<br class="mobile-only"><span>&ensp;</span>
        ヒトがヒトをつなぎ、ヒトがモノをつなぐ』
      p.paragraph.ja.
        ブランドのアイテムがいろんな人たちに<br class="mobile-only">
        繋がっていって欲しいという思いを込めている。
      p.paragraph.ja.
        ニットアイテムをメインにし、ユニセックスで<br class="mobile-only">
        着こなせる上質なアイテムを提案​します​。
      p.paragraph.en.
        Japanese label YOKE, <br class="mobile-only">
        started by designer Norio Terada in 2018, <br>
        produces casual knit clothing that <br class="mobile-only">
        we can where any time as <br class="mobile-only">
        we pursue our usual lifestyle.
  Footer(:props="footer")
</template>

<script>
import Footer from '~/components/Footer'
// import Joyride from '~/plugins/Joyride'

// const joyride = new Joyride()

export default {
  head () {
    return {
      title: 'ABOUT',
    }
  },
  data () {
    return {
      footer: {
        name: 'Collection',
        path: 'collection',
      }
    }
  },
  components: {
    Footer,
  },
  mounted() {
    // joyride.init('.page')
    // joyride.stagger('.page', 400, 200);
  }
}
</script>

<style lang="scss" scoped>
.page {
  margin-right: 0;

  .thumbnail {
    margin: 0 0 $row8;
    img {
      width: 100%;
    }
  }

  .paragraph {
    margin: 0 0 $row2;
    &:nth-child(3) {
      margin-left: -5px;
      span {
        display: inline;
      }
    }
    &.en {
      margin-top: $row5;
    }
  }
}

@media screen and (min-width: 769px) {

  .page {

    .paragraph {
      margin-bottom: $row1;
      &:nth-child(3) {
        margin: $row3 0;
        span {
          display: none;
        }
      }
    }
  }
}
</style>
