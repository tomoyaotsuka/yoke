<template>
  <div>
    <section class="page">
      <h2 class="headline">Stockist</h2>
      <ul class="anchor">
        <li class="item" v-for="stockist in $store.state.stockists">
          <a :rel="'#'+stockist.area" @click="anchorScroll">{{ stockist.area }}</a>
        </li>
      </ul>
      <section class="area" v-for="stockist in $store.state.stockists" :id="stockist.area">
        <h3 class="headline">{{ stockist.area }}</h3>
        <ul class="list">
          <li class="item" v-for="item in stockist.items">
            <p class="name">{{ item.name }}</p>
            <p class="address">{{ item.postcode }}<br>{{ item.address }}</p>
            <p class="tel">{{ item.tel }}</p>
            <a :href="item.link" target="_blank" class="link">{{ item.link }}</a>
          </li>
        </ul>
      </section>
    </section>
    <Footer :props="footer"/>
  </div>
</template>

<script>
import Footer from '~/components/Footer'
import anime from 'animejs'
export default {
  components: {
    Footer,
  },
  data () {
    return {
      footer: {
        name: 'News',
        path: 'news',
      }
    }
  },
  // mounted: function () {
  //   console.log(this.$parent.footer)
  //   this.$parent.footer = {
  //       name: 'test',
  //       link: '/news',
  //       path: 'collection/18aw/lady/look-6.jpg',
  //   }
  // },
  methods: {
    anchorScroll: function (e) {
      const target = e.currentTarget.getAttribute('rel')
      const offset = document.querySelector(target).getBoundingClientRect().top
      const margin = document.querySelector('.header').clientHeight
      anime({
        targets: 'body,html',
        scrollTop: offset - margin + 1,
        easing: 'easeOutQuint',
        duration: 1000
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.page {
  // margin-left: $col2;
  // margin-right: $col1;

  .anchor {
    display: grid;
    grid-template: auto / repeat(2, 1fr);
    grid-gap: $mar1-12;
    margin: 0 0 $row4;
    .item {
      text-transform: uppercase;
      a {
        position: relative;
        padding-left: $col1;
        &::before {
          @include arrow(4px, 1px, $gray50, 'bottom');
          left: 0;
        }
      }
    }
  }

  .area {
    margin: 0 0 $row4;
    padding: $row4 0 0;
    border-top: 1px solid $gray10;
    > .headline {
      margin-bottom: $row2;
      font-family: 'ProximaNova Light', sans-serif;
      text-transform: uppercase;
    }
    .list {
      .item {
        margin: 0 0 $row2;
        p {
          margin-bottom: 0;
        }
      }
    }
  }
}

@media screen and (min-width: 769px) {
  .page {
    .anchor {
      grid-template: auto/repeat(4, 1fr);
      grid-gap: $mar1-8;
      .item {
        cursor: pointer;
        a {
          padding-left: 16px;
        }
      }
    }
    .area {
      margin-bottom: $row6;
      padding-top: $row6;
    }
  }
}
</style>

