<template>
<div class="posts-page">
<PostList :posts="loadedPosts"/>
</div>
</template>

<script>
import PostList from '~/components/Posts/PostList'

export default {
  name: 'index',
  components: {
    PostList
  },
  // This is aysncData approach
  // asyncData (context) {
  //   return new Promise((resolve, reject) => {
  //     // eslint-disable-next-line nuxt/no-timing-in-fetch-data
  //     setTimeout(() => {
  //       resolve({
  //         loadedPosts: [
  //           {
  //             id: '1',
  //             title: 'Title 1',
  //             previewText: 'Preview text 1',
  //             thumbnail: 'https://www.elegantthemes.com/blog/wp-content/uploads/2018/04/Best-Code-and-Text-Editors.png'
  //           },
  //           {
  //             id: '2',
  //             title: 'Title 2',
  //             previewText: 'Preview text 2',
  //             thumbnail: 'https://www.elegantthemes.com/blog/wp-content/uploads/2018/04/Best-Code-and-Text-Editors.png'
  //           }
  //         ]
  //       })
  //     }, 1000)
  //   })
  //     .then((data) => {
  //       return data
  //     })
  //     .catch((e) => {
  //       context.error(e)
  //     })
  // },
  // created () {
  //   this.$store.dispatch('setPosts', this.loadedPosts)
  // }
  // End asyncData approach

  // This is a fetch approach
  // fetch (context) {
  //   return new Promise((resolve, reject) => {
  //     // eslint-disable-next-line nuxt/no-timing-in-fetch-data
  //     setTimeout(() => {
  //       resolve({
  //         loadedPosts: [
  //           {
  //             id: '1',
  //             title: 'Title 1',
  //             previewText: 'Preview text 1',
  //             thumbnail: 'https://www.elegantthemes.com/blog/wp-content/uploads/2018/04/Best-Code-and-Text-Editors.png'
  //           },
  //           {
  //             id: '2',
  //             title: 'Title 2',
  //             previewText: 'Preview text 2',
  //             thumbnail: 'https://www.elegantthemes.com/blog/wp-content/uploads/2018/04/Best-Code-and-Text-Editors.png'
  //           }
  //         ]
  //       })
  //     }, 1000)
  //   })
  //     .then((data) => {
  //       context.store.dispatch('setPosts', data.loadedPosts)
  //     })
  //     .catch((e) => {
  //       context.error(e)
  //     })
  // },
  computed: {
    loadedPosts () {
      return this.$store.getters.loadedPosts
    }
  }
  // End a fetch approach
}
</script>

<style scoped>
.posts-page {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
