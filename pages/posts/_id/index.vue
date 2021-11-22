<template>
  <div class="single-post-page">
    <section class="post">
      <h1 class="post-title">
        {{ loadedPost.title }}
      </h1>
      <div class="post-details">
        <div class="post-detail">
          Last updated on {{ loadedPost.updatedDate }}
        </div>
        <div class="post-detail">
          Written by {{ loadedPost.author }}
        </div>
      </div>
      <p class="post-content">
        {{ loadedPost.content }}
      </p>
    </section>
    <section class="post-feedback">
      <p>
        Let me know what do you think about the post, send a mail to <a href="mailto:hauphvn@gmail.com">hauphvn@gmail.com</a>
      </p>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Index',
  computed: {
    loadedPost () {
      const post = this.$store.getters.loadedPosts.filter((post) => {
        return post.id === this.$route.params.id
      })
      return (post.length > 0) ? post[0] : {}
    }
  }

  /* asyncData (context) { */
  /*  return new Promise((resolve, reject) => { */
  /*    // eslint-disable-next-line nuxt/no-timing-in-fetch-data */
  /*    setTimeout(() => { */
  /*      resolve({ */
  /*        loadedPost: */
  /*          { */
  /*            id: '1', */
  /*            title: 'Title 1' + context.route.params.id, */
  /*            updatedDate: new Date(), */
  /*            author: 'Hauphvn', */
  /*            content: 'Lorem lorem lorem lorem lorem lorem', */
  /*            previewText: 'Preview text 1', */
  /*            thumbnail: 'https://www.elegantthemes.com/blog/wp-content/uploads/2018/04/Best-Code-and-Text-Editors.png' */
  /*          } */
  /*      }) */
//       // reject(new Error('my error'))
//     }, 1000)
//   })
//     .then((data) => {
//       return data
//     })
//     .catch((e) => {
//       context.error(e)
//     })
// }
}
</script>

<style scoped>
.single-post-page {
  padding: 30px;
  text-align: center;
  box-sizing: border-box;
}

.post {
  width: 100%;
}

@media (min-width: 768px) {
  .post {
    width: 600px;
    margin: auto;
  }
}

.post-title {
  margin: 0;
}

.post-details {
  padding: 10px;
  box-sizing: border-box;
  border-bottom: 1px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
@media (min-width: 768px) {
  .post-details {
    flex-direction: row ;
  }
}
</style>
