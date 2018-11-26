<template>
  <main class="page">
    <h2 class="headline">
      {{ currentPost.fields.title }}
      </h2>
    <p class="date">
      {{ currentPost.fields.publicationDate | formatDate }}
    </p>
    <!-- <div class="visual">
      <img
        :src="require(`@/assets/images/posts/${currentPost.fields.slug}/thumbnail.jpg`)"
        :alt="currentPost.fields.title">
    </div> -->
    <div class="bodycopy">
      <vue-markdown>{{ currentPost.fields.bodycopy }}</vue-markdown>
    </div>
    <!-- <p class="tag">
      {{ currentPost.fields.tag }}
    </p> -->
    <!-- <div v-if="currentPost.fields.associateName" class="babylink-box">
      <div class="babylink-image">
        <a :href="currentPost.fields.associateUrl" rel="nofollow" target="_blank">
          <img :src="currentPost.fields.associateImage" width="51" height="75">
        </a>
      </div>
      <div class="babylink-info">
        <div class="babylink-title">
          <a :href="currentPost.fields.associateUrl" rel="nofollow" target="_blank">
            {{ currentPost.fields.associateName }}
          </a>
        </div>
        <div class="babylink-manufacturer">
          {{ currentPost.fields.associateAuthor }}
        </div>
      </div>
    </div>
    <nav class="pagination">
      <ul>
        <li v-if="prevPost" class="prev">
          <nuxt-link :to="'/posts/' + prevPost.fields.slug">
            &laquo; {{ prevPost.fields.title }}
          </nuxt-link>
        </li>
        <li v-if="nextPost" class="next">
          <nuxt-link :to="'/posts/' + nextPost.fields.slug">
            &raquo; {{ nextPost.fields.title }}
          </nuxt-link>
        </li>
      </ul>
    </nav> -->
  </main>
</template>

<script>
import { createClient } from '~/plugins/contentful.js'
import VueMarkdown from 'vue-markdown'

const client = createClient()

export default {
  head () {
    return {
      title: this.currentPost.fields.title,
      // meta: [
      //   {
      //     hid: 'description',
      //     name: 'description',
      //     content: this.currentPost.fields.description
      //   },
      //   {
      //     property: 'og:url',
      //     content: `https://tomoyaotsuka.github.io/acperience${this.$route.path}`
      //   },
      //   {
      //     hid: 'og:title',
      //     property: 'og:title',
      //     content: this.currentPost.fields.title
      //   },
      //   {
      //     hid: 'og:description',
      //     property: 'og:description',
      //     content: this.currentPost.fields.description
      //   },
      //   {
      //     property: 'og:image',
      //     content: `https://tomoyaotsuka.github.io/acperience/images/posts/${this.currentPost.fields.slug}/thumbnail.jpg`
      //   }
      // ]
    }
  },
  data () {
    return {
      allPosts: [],
      currentPost: []
    }
  },
  components: {
    VueMarkdown
  },
  asyncData ({ env, params }) {
    return client.getEntries({
      'content_type': env.CTF_BLOG_POST_TYPE_ID,
      'order': '-fields.publicationDate'
    }).then(entries => {
      const posts = entries.items
      const current = posts.filter(function (item) {
        return item.fields.slug === params.slug
      })
      return {
        allPosts: posts,
        currentPost: current[0],
        // path: process.env.DEPLOY_ENV === 'PRD' ? '.' : '..'
      }
    }).catch(console.error)
  },
  // computed: {
  //   dateOrder: function () {
  //     for (let i = 0; i < this.allPosts.length; i++) {
  //       if (this.allPosts[i].fields.publicationDate === this.currentPost.fields.publicationDate) {
  //         return i
  //       }
  //     }
  //   },
  //   nextPost: function () {
  //     if (this.dateOrder === 0) {
  //       return false
  //     } else {
  //       return this.allPosts[this.dateOrder - 1]
  //     }
  //   },
  //   prevPost: function () {
  //     if (this.dateOrder === this.allPosts.length - 1) {
  //       return false
  //     } else {
  //       return this.allPosts[this.dateOrder + 1]
  //     }
  //   }
  // },
}
</script>

<style lang="scss" scoped>
.page {
  // margin-left: $col2;
  // margin-right: $col1;

  .headline {
    @include text-crop(1.6);
    margin: 0 0 $row2;
  }

  .date {
    @include text-crop(1.0);
    margin: 0 0 $row4;
    color: $gray50;
  }

  .bodycopy {
    margin: 0 0 $row6;

    h3 {
      @include text-crop(1.3);
      margin-top: $row8;
      margin-bottom: $row4;
      font-weight: bold;
    }

    h4 {
      @include text-crop(1.3);
      margin-top: $row4;
      margin-bottom: $row1;
      font-weight: bold;
    }

    p {
      margin-bottom: $row2;
    }

    ul,
    ol {
      margin-top: $row4;
      margin-bottom: $row4;
    }

    blockquote {
      padding: 0 0 0 $col1 + $mar1-12;
      box-sizing: border-box;
      border-left: 2px solid $gray10;
      color: $gray50;
      font-style: italic;
    }

    table {
      tr {
      }
      th {
        // padding-left: $col1;
        // padding-right: 0;
        // text-align-last: left;
      }
      td {
        padding: 0;
        &:nth-of-type(1) {
          // padding-left: $col1;
          // padding-right: 0;
          text-align: left;
        }
      }
    }
  }
}
</style>

<style lang="scss">
.bodycopy {

  a {
    // border-bottom: 1px solid $black;
    text-decoration: underline;
  }

  img {
    display: block;
    margin: $row4 0;
  }
}
</style>
