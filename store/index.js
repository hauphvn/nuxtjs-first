import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedPosts: []
    },
    mutations: {
      setPosts (state, posts) {
        state.loadedPosts = posts
      },
      addPost (state, newPost) {
        state.loadedPosts.unshift(newPost)
      },
      editPost (state, currentPost) {
        const index = state.loadedPosts.findIndex(post => post.id === currentPost.id)
        state.loadedPosts[index] = currentPost
      }
    },
    actions: {
      nuxtServerInit (vuexContext, context) {
        return context.app.$axios.$get('/posts.json')
          .then((data) => {
            const postsArray = []
            for (const key in data) {
              postsArray.push({
                ...data[key],
                id: key
              })
            }
            vuexContext.commit('setPosts', postsArray)
          })
          .catch(e => console.log(e))
        // return new Promise((resolve, reject) => {
        //   setTimeout(() => {
        //     vuexContext.commit('setPosts', [
        //       {
        //         id: '1',
        //         title: 'Title 1',
        //         previewText: 'Preview text 1',
        //         thumbnail: 'https://www.elegantthemes.com/blog/wp-content/uploads/2018/04/Best-Code-and-Text-Editors.png'
        //       },
        //       {
        //         id: '2',
        //         title: 'Title 2',
        //         previewText: 'Preview text 2',
        //         thumbnail: 'https://www.elegantthemes.com/blog/wp-content/uploads/2018/04/Best-Code-and-Text-Editors.png'
        //       }
        //     ])
        //     resolve()
        //   }, 1000)
        // })
      },
      setPosts (vuexContext, posts) {
        vuexContext.commit('setPosts', posts)
      },
      addPost (vuexContext, newPost) {
        return this.$axios.$post('/posts.json',
          {
            ...newPost,
            updatedDate: new Date()
          })
          .then((data) => {
            vuexContext.commit('addPost', {
              ...newPost,
              id: data.name
            })
          })
          .catch(e => console.log(e))
      },
      editPost (vuexContext, currentPost) {
        return this.$axios.$put(`/${currentPost.id}.json`, currentPost)
          .then((resp) => {
            vuexContext.commit('editPost', currentPost)
          })
          .catch(e => console.log(e))
      }
    },
    getters: {
      loadedPosts (state) {
        return state.loadedPosts
      }
    }
  })
}

export default createStore
