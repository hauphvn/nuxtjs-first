<template>
  <div class="admin-post-page">
    <section class="update-form">
      <AdminPostForm
        @submit="onSubmitted"
        :post="loadedPost"
      />
    </section>
  </div>
</template>

<script>
import axios from 'axios'
import AdminPostForm from '~/components/Admin/AdminPostForm'

export default {
  layout: 'admin',
  name: 'index',
  components: {
    AdminPostForm
  },
  // data () {
  //   return {
  //     loadedPost: {
  //       author: 'hauphvn',
  //       title: 'Title hauphvn',
  //       thumbnailLink: 'https://www.elegantthemes.com/blog/wp-content/uploads/2018/04/Best-Code-and-Text-Editors.png',
  //       content: 'Content hauphvn'
  //     }
  //   }
  // },
  asyncData (context) {
    return axios.get(`https://nuxt-blog-first-default-rtdb.asia-southeast1.firebasedatabase.app/posts/${context.params.postId}.json`)
      .then((res) => {
        return { loadedPost: res.data }
      })
      .catch(e => context.error(e))
  },
  methods: {
    onSubmitted (dataPosted) {
      axios.put(`https://nuxt-blog-first-default-rtdb.asia-southeast1.firebasedatabase.app/posts/${this.$route.params.postId}.json`, dataPosted)
        .then((resp) => {
          this.$router.push('/admin')
        })
        .catch(e => console.log('Error update: ', e))
    }
  }
}
</script>

<style scoped>
.update-form {
  width: 90%;
  margin: 20px auto;
}
@media (min-width: 768px) {
  .update-form {
    width: 500px;
  }
}
</style>
