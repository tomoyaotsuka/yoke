<template lang="pug">
div
  section.page
    h2.headline Contact
    ul.list
      li.item
        h3.headline Mail
        a(href='mailto:info@yoketokyo.com')
          | info@yoketokyo.com
      li.item
        h3.headline Instagram
        a(href='//www.instagram.com/yoke_tokyo/', target='_blank')
          | @yoke_tokyo
      li.item
        h3.headline PRESS
        p.name STUDIO FABWORK
        p.address 306 SHUWAGAIEN RESIDENCE 2-6-6 JINGUMAE SHIBUYA-KU TOKYO 150-0001
        p.tel 03-6438-9575
        a(href='www.studiofabwork.com', target='_blank')
          | http://www.studiofabwork.com
    //
      <form name="contact" method="POST" netlify>
      <p>
      <label>Your Name*: <input type="text" name="name" required></label>
      </p>
      <p>
      <label>Your Email*: <input type="email" name="email" required></label>
      </p>
      <p>
      <label>Subject*: <input type="text" name="subject"></label>
      </p>
      <p>
      <label>Message: <textarea name="message"></textarea></label>
      </p>
      <p>
      <button type="submit">Send</button>
      </p>
      </form>
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
        name: 'About',
        path: 'about',
      }
    }
  },
}
</script>


<style lang="scss" scoped>
.page {
  // margin-left: $col2;
  // margin-right: $col1;

  .list {
    .item {
      margin: 0 0 $row4;
      .headline {
        margin-bottom: $row1;
        font-size: 1.3rem;
        font-family: 'ProximaNova Light', sans-serif;
        text-transform: uppercase;
      }
      p {
        margin-bottom: 0;
      }
    }
  }
}
@media screen and (min-width: 769px) {
  .page {
    // @include centeringY();
    // position: absolute;
    // margin-top: 0;
  }
}
</style>
