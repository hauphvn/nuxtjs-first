<template>
  <div class="admin-post-page">
    <section class="update-form">
      <AdminPostForm :post="loadedPost"/>
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
      loadedPost: {
        author: 'hauphvn',
        title: 'Title hauphvn',
        thumbnailLink: 'https://www.elegantthemes.com/blog/wp-content/uploads/2018/04/Best-Code-and-Text-Editors.png',
        content: 'Content hauphvn'
      }
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
