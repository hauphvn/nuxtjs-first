import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedPosts: []
    },
    mutations: {
      setPosts (state, posts) {
        state.loadedPosts = posts
      }
    },
    actions: {
      nuxtServerInit (vuexContext, context) {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            vuexContext.commit('setPosts', [
              {
                id: '1',
                title: 'Title 1',
                previewText: 'Preview text 1',
                thumbnail: 'https://www.elegantthemes.com/blog/wp-content/uploads/2018/04/Best-Code-and-Text-Editors.png'
              },
              {
                id: '2',
                title: 'Title 2',
                previewText: 'Preview text 2',
                thumbnail: 'https://www.elegantthemes.com/blog/wp-content/uploads/2018/04/Best-Code-and-Text-Editors.png'
              }
            ])
            resolve()
          }, 1000)
        })
      },
      setPosts (vuexContext, posts) {
        vuexContext.commit('setPosts', posts)
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
