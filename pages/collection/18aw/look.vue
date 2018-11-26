<template>
  <div>
    <section class="page">
      <h2 class="headline">Collection</h2>
      <h3 class="subheads">2018 Autumn&amp;Winter Look</h3>
      <ul class="list">
        <li class="item" v-for="n in 8" @click="activate" :data-id="n">
          <img
            :src="require(`@/assets/images/collection/18aw/men/look-${n}.jpg`)"
            :alt="'Men\'s Style ' + n">
        </li>
        <li class="item" v-for="n in 6" @click="activate" :data-id="n + 8">
          <img
            :src="require(`@/assets/images/collection/18aw/lady/look-${n}.jpg`)"
            :alt="'Lady\'s Style ' + n">
        </li>
      </ul>
      <div class="modal" @click="closeModal">
        <div class="modal-container">
          <div class="modal-content">
            <div class="swiper-container">
              <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="n in 8" @click="stop">
                  <div @click="stop">
                    <img
                      :src="require(`@/assets/images/collection/18aw/men/look-${n}.jpg`)"
                      :alt="'Men\'s Style ' + n">
                  </div>
                </div>
                <div class="swiper-slide" v-for="n in 6" @click="stop">
                  <div @click="stop">
                    <img
                      :src="require(`@/assets/images/collection/18aw/lady/look-${n}.jpg`)"
                      :alt="'Lady\'s Style ' + n">
                  </div>
                </div>
              </div>
              <div class="swiper-button-prev" @click="stop"></div>
              <div class="swiper-button-next" @click="stop"></div>
            </div>
          </div>
          <p class="modal-closer" @click="closeModal">Close</p>
          <!-- <div class="mask" @click="closeModal"></div> -->
        </div>
      </div>
    </section>
    <Footer :props="footer" />
  </div>
</template>

<script>
import Footer from '@/components/Footer'
// import 'swiper/dist/css/swiper.css'
// import Swiper from 'swiper'
import Swiper from '~/plugins/Swiper'
import Modal from '~/plugins/Modal'

export default {
  data () {
    return {
      items: [5],
      swiper: false,
      modal: false,
      footer: {
        name: '2018 AW Image',
        path: 'collection/18aw/image',
      }
    }
  },
  components: {
    Footer,
  },
  methods: {
    activate: function (e) {
      this.modal.open()
      this.swiper.slideTo(e.currentTarget.dataset.id, 0)
    },
    closeModal: function () {
      this.modal.close()
    },
    stop: function (e) {
      e.stopPropagation()
    },
  },
  mounted () {
    this.modal = new Modal()
    this.modal.on('close', this.closeModal)
    this.swiper = new Swiper()
  }
}
</script>

<style lang="scss" scoped>
.page {
  .list {
    .item {
      cursor: pointer;
      margin: 0 0 $row6;
    }
  }
}
@media screen and (min-width: 769px) {
  .page {
    .list {
      display: grid;
      grid-template: auto / repeat(3, 1fr);
      grid-column-gap: $mar1-8;
    }
  }
}


.swiper-wrapper {
  transition-timing-function: $easeOutQuint;
}
.swiper-slide {
  // width: 200px;
  /* Center slide text vertically */
  // display: -webkit-box;
  // display: -ms-flexbox;
  // display: -webkit-flex;
  // display: flex;
  // -webkit-box-pack: center;
  // -ms-flex-pack: center;
  // -webkit-justify-content: center;
  // justify-content: center;
  // -webkit-box-align: center;
  // -ms-flex-align: center;
  // -webkit-align-items: center;
  // align-items: center;
  // width: 60%;
  text-align: center;
  img {
    width: 75%;
  }
}
.swiper-button-next,
.swiper-button-prev {
  outline: none;
  background: none;
  transition: opacity .3s;
  &:hover {
    opacity: 0.5;
  }
}
.swiper-button-next {
  @include arrow(32px, 1px, #e8e8e8, 'right');
  right: $col1;
}
.swiper-button-prev {
  @include arrow(32px, 1px, #e8e8e8, 'left');
  left: $col1;
}
@media screen and (min-width: 769px) {
  .swiper-slide {
    img {
      width: 50%;
    }
  }
}
</style>
