<template>
  <div class="admin-new-post-page">
    <section class="new-post-form">
      <AdminPostForm @submit="onSubmitted"/>
    </section>
  </div>
</template>

<script>

import AdminPostForm from '~/components/Admin/AdminPostForm'

export default {
  name: 'index',
  components: {
    AdminPostForm
  },
  data () {
    return {
      editedPost: {
        author: '',
        title: '',
        thumbnail: '',
        content: ''
      }
    }
  },
  methods: {
    onSubmitted (postData) {
      this.$store.dispatch('addPost', postData)
        .then(() => this.$router.push('/admin'))
      // axios.post('https://nuxt-blog-first-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json', {
      //   ...postData,
      //   updatedDate: new Date()
      // })
      //   .then(response => this.$router.push('/admin'))
      //   .catch(e => console.log(e))
    }
  }
}
</script>

<style scoped>
.new-post-form {
  width: 90%;
  margin: 20px auto;
}
@media (min-width: 768px) {
  .new-post-form {
    width: 500px;
  }
}
</style>
