<template>
  <div>
    <Header></Header>
    <Menu></Menu>
    <nuxt/>
    <!-- <Footer></Footer> -->
    <!-- <Loading/> -->
  </div>
</template>

<script>
import Header from '~/components/Header'
import Menu from '~/components/Menu'
// import Footer from '~/components/Footer'
// import Loading from '@/components/Loading'

export default {
  components: {
    Header,
    Menu,
    // Footer,
    // Loading,
  },
}
</script>
