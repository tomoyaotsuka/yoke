<template lang="pug">
  div
    section.page
      h2.headline Collection
      section.season(v-for="item in items")
        h3.headline.
          {{ item.year }}<br>
          {{ item.season }}
        div.thumbnail
          img(:src="require(`@/assets/images/collection/${item.path}/mainvisual.jpg`)")
        h4.theme "Tricot"
        p.description
          span(v-for="line in item.description").
            {{ line }}
        ul.list
          li
            nuxt-link(:to="`/collection/${item.path}/look`").
              — Look
          li
            nuxt-link(:to="`/collection/${item.path}/image`").
              — Image
    Footer(:props="footer")
</template>

<script>
import Footer from '~/components/Footer'
// import Joyride from '~/plugins/Joyride'

// const joyride = new Joyride()

export default {
  data () {
    return {
      items: [
        {
          year:   '2018',
          season: 'Autumn & Winter',
          path:   '18aw',
          description: [
            '編地をテーマに、布帛てあるものを',
            'ニットで表現することを意識。',
            'ニットの可能性を広げるためのコレクション。',
          ],
        },
      ],
      footer: {
        name: '2018 AW Look',
        path: 'collection/18aw/look',
      }
    }
  },
  components: {
    Footer,
  },
  mounted() {
    // joyride.init('.page .headline')
    // joyride.stagger('.page', 400, 200)
  }
}
</script>

<style lang="scss" scoped>
.page {
  margin-right: 0;

  .season {
    .headline {
      margin: 0 0 $row4;
    }
    .thumbnail {
      margin: 0 0 $row5;
      img {
        width: 100%;
      }
    }
    .theme {
      margin: 0 0 $row4;
    }
    .description {
      margin: 0 0 $row4;
      span {
        display: block;
      }
    }
    .list  {
      li {
        margin: 0 0 $row2;
      }
    }
  }
}
@media screen and (min-width: 769px) {

  .page {

    .season {

      > .thumbnail {
        width: $col6-12;
      }
    }
  }
}
</style>

