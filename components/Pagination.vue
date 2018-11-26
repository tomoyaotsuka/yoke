<template>
  <ul class="pagination">
    <li v-if="prev !== null">
      <nuxt-link :to="{ path: path, query: { page: prev }}">
        » Newer Posts
      </nuxt-link>
    </li>
    <li v-if="next !== null">
      <nuxt-link :to="{ path: path, query: { page: next }}">
        « Older Posts
      </nuxt-link>
    </li>
  </ul>
</template>

<script>
  export default {
    props: [
      'path',
      'prev',
      'next',
    ]
  }
</script>

<style lang="scss" scoped>
.pagination {
  // list-style: none;
  // margin: $row6 $col1;
  margin: $row4 0;
}
</style>
