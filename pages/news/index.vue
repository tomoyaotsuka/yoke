<template lang="pug">
div
  section.page
    h2.headline News
    ul.list
      li.item(v-for='post in posts')
        nuxt-link(:to="'/news/'+post.fields.slug")
          h3.headline {{ post.fields.title }}
          p.date {{ post.fields.publicationDate | formatDate }}
    pagination(path='/news', :next='next', :prev='prev')
  Footer(:props="footer")
</template>

<script>
import { createClient } from '~/plugins/contentful.js'
import Pagination from '~/components/Pagination'
import Footer from '~/components/Footer'

const client = createClient()

export default {
  components: {
    Pagination,
    Footer,
  },
  watchQuery: [
    'page'
  ],
  data () {
    return {
      footer: {
        name: 'Contact',
        path: 'contact',
      }
    }
  },
  asyncData({ env, query }) {
    const num = 5;
    const current = parseInt(query['page']) || 1;
    return client.getEntries({
      'content_type': env.CTF_BLOG_POST_TYPE_ID,
      'order': '-fields.publicationDate',
      'skip': current * num - num || 0,
      'limit': num,
    }).then(entries => {
      return {
        posts: entries.items,
        prev: (current > 1) ? current - 1 : null,
        next: (current < Math.round(entries.total/num)) ? parseInt(current + 1) : null,
      }
    }).catch(console.error)
  }
}
</script>

<style lang="scss" scoped>
.page {
  // margin-left: $col2;
  // margin-right: $col1;

  .list {
    .item {
      margin: 0 0 $row2;
      .headline {
        font-size: 1.3rem;
      }
      .date {
        font-size: 1.0rem;
      }
    }
  }
}
@media screen and (min-width: 769px) {
  // .page {
  // }
}
</style>

