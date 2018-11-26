<template lang="pug">
div.menu(:class='{ active: isActive }')
  p.menu-opener(@click='open') Open
  div.menu-container
    //- Logo
    ul.list
      li.item.joyride(v-for='item in items')
        div
          nuxt-link(:to='item.path', @click.native='close')
            | {{ item.text }}
    div.account-instagram
      a(href="//www.instagram.com/yoke_tokyo/" target="_blank")
        img(src="~/assets/images/common/icon_instagram.png")
    //- p.copyright © 2018 Yoke.
  div.mask(@click='close')
</template>

<script>
import Logo from '@/components/Logo'
import Joyride from '~/plugins/Joyride'
import Touch from '~/plugins/touch'

const joyride = new Joyride()

export default {
  components: {
    Logo,
  },
  data () {
    return {
      isActive: false,
      items: [
        { path: '/', text: 'Home' },
        { path: '/about', text: 'About' },
        { path: '/collection', text: 'Collection' },
        // { path: '/', text: 'Instagram' },
        { path: '/stockist', text: 'Stockist' },
        { path: '/news', text: 'News' },
        { path: '/contact', text: 'Contact' },
      ]
    }
  },
  mounted () {

    const closeThreshold = -80
    const touch = new Touch('.menu-container')

    this.$container = document.querySelector('.menu-container')
    this.$opener = document.querySelector('.menu-opener')

    touch.on('move', diff => {
      if (this.$opener.parentNode.classList.contains('active')) {
        const value = Math.round(diff.x / 2)
        if (closeThreshold < value && value < 0) {
          this.$container.style.opacity = 1 + value / 100
          this.$opener.style.width = `${82.81 + value / 2}%`
        }
        else if (value <= closeThreshold) {
          this.close()
        }
      }
    })

    touch.on('end', (diff, end) => {
      if (this.$opener.parentNode.classList.contains('active')) {
        this.$container.style.opacity = 1
        this.$opener.style.width = '82.81%'
      }
    })

    this.init()
    window.addEventListener('resize', this.init)
  },
  methods: {
    init() {
      if (window.innerWidth > 768) {
        joyride.stagger('.list .joyride', 300, 75)
      }
      else {
        joyride.clear('.list')
      }
    },
    open() {
      if (window.innerWidth < 769) {
        this.isActive = true
        joyride.stagger('.list .joyride', 300, 75)
      }
    },
    close() {
      if (window.innerWidth < 769) {
        this.isActive = false
        setTimeout(() => {
          joyride.clear('.list')
          this.$container.style.opacity = 1
          this.$opener.style.width = '82.81%'
        }, 500)
      }
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~assets/styles/_modules/menu';
</style>