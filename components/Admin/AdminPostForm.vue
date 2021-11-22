<template>
  <form @submit.prevent="onSave">
    <AppControlInput v-model="editedPost.author">Author Name</AppControlInput>
    <AppControlInput v-model="editedPost.title">Title</AppControlInput>
    <AppControlInput v-model="editedPost.thumbnail">Thumbnail Link</AppControlInput>
    <AppControlInput control-type="textarea" v-model="editedPost.previewText">Preview text</AppControlInput>
    <AppControlInput control-type="textarea" v-model="editedPost.content">Content</AppControlInput>
    <AppButton type="submit">Save</AppButton>
    <AppButton
      type="button"
      style="margin-left: 10px"
      btn-style="cancel"
      @click="onCancel"
    >Cancel
    </AppButton>
  </form>
</template>

<script>
import AppControlInput from '~/components/UI/AppControlInput'
import AppButton from '~/components/UI/AppButton'

export default {
  name: 'AdminPostForm',
  props: {
    post: {
      type: Object,
      required: false
    }
  },
  data () {
    if (this.post) {
      return {
        editedPost: { ...this.post }
      }
    } else {
      return {
        editedPost: {
          author: '',
          title: '',
          thumbnail: '',
          previewText: '',
          content: ''
        }
      }
    }
  },
  components: {
    AppButton,
    AppControlInput
  },
  methods: {
    onSave () {
      this.$emit('submit', this.editedPost)
    },
    onCancel () {
      this.$router.push('/admin')
    }
  }
}
</script>

<style scoped>

</style>
