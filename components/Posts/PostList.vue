<template>
  <section class="post-list">
    <PostPreview
      id="1"
      thumbnail="https://www.elegantthemes.com/blog/wp-content/uploads/2018/04/Best-Code-and-Text-Editors.png"
      preview-text="Preview text 1"
      title="Title 1"
    ></PostPreview>
    <PostPreview
      id="2"
      thumbnail="https://www.elegantthemes.com/blog/wp-content/uploads/2018/04/Best-Code-and-Text-Editors.png"
      preview-text="Preview text 2"
      title="Title 2"
    ></PostPreview>
  </section>
</template>

<script>
import PostPreview from '~/components/Posts/PostPreview'

export default {
  name: 'PostList',
  components: {
    PostPreview
  }
}
</script>

<style scoped>
.post-list {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>
