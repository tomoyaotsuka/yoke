<template lang="pug">
  div
    section.page
      h2.headline Collection
      h3.subheads 2018 Autumn&amp;Winter Image
      ul.list
        li.item(@click="activate")
          img(src="~/assets/images/collection/18aw/men/look-1.jpg")
    Footer(:props="footer")
</template>

<script>
import Footer from '~/components/Footer'
export default {
  components: {
    Footer,
  },
  data () {
    return {
      footer: {
        name: 'Stockist',
        path: 'stockist',
      }
    }
  },
  methods: {
    activate: function (e) {
      const target = e.currentTarget
      target.classList.toggle('active')
      target.parentNode.classList.toggle('active')
    }
  }
}
</script>

<style lang="scss" scoped>
.page {
  // margin-left: $col2;
  // margin-right: $col2;

  .list {
    .item {
      margin: 0 0 $row6;
    }
  }
}
</style>
