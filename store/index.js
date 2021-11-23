import Vuex from 'vuex'
import Cookie from 'js-cookie'

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedPosts: [],
      token: ''
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
      },
      setToken (state, token) {
        state.token = token
      },
      clearToken (state) {
        state.token = null
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
        return this.$axios.$post(`/posts.json?auth=${vuexContext.getters.token}`,
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
        return this.$axios.$put(`/${currentPost.id}.json?auth=${vuexContext.getters.token}`, currentPost)
          .then((resp) => {
            vuexContext.commit('editPost', currentPost)
          })
          .catch(e => console.log(e))
      },
      authenticateUser (vuexContext, authData) {
        let urlAuth = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.firebaseAPIKey}`
        if (!authData.isLogin) {
          urlAuth = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.firebaseAPIKey}`
        }
        return this.$axios.$post(urlAuth, {
          email: authData.email,
          password: authData.password,
          returnSecureToken: true
        })
          .then((resp) => {
            vuexContext.commit('setToken', resp.idToken)
            localStorage.setItem('token', resp.idToken)
            const expiredTime = new Date().getTime() + 1000 * 60 * 15
            localStorage.setItem('tokenExpiration', expiredTime)
            Cookie.set('jwt', resp.idToken)
            Cookie.set('tokenExpiration', expiredTime)
            vuexContext.dispatch('setLogoutTimer', 1000 * 60 * 15)
            // {
            //   "kind": "identitytoolkit#SignupNewUserResponse",
            //   "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjJlMzZhMWNiZDBiMjE2NjYxOTViZGIxZGZhMDFiNGNkYjAwNzg3OWQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vbnV4dC1ibG9nLWZpcnN0IiwiYXVkIjoibnV4dC1ibG9nLWZpcnN0IiwiYXV0aF90aW1lIjoxNjM3NjM2MjI1LCJ1c2VyX2lkIjoiVjlwZnFUdjRCWVJtZWZrSEdURnI4N3ZpMlpIMyIsInN1YiI6IlY5cGZxVHY0QllSbWVma0hHVEZyODd2aTJaSDMiLCJpYXQiOjE2Mzc2MzYyMjUsImV4cCI6MTYzNzYzOTgyNSwiZW1haWwiOiJoYXVwaHZuQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJoYXVwaHZuQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.JFk9f-MoOiMtZuHAGBBv7Op4QlRttrW2JjeMnvyG39G-3CJoy9zU_-81e47p8Qi2Mb-fuA5f_iKVXU6Ss8ZLZwRxHXQEPzRcAZB7nLpm0kv8xWIQ1whGcBqax0pr1H5RygmfJJB1CdgOuuOlZ14sprlDLME8bwbZeTUnAErgK64Xq8VkfEX-Zg3Issy3q8ALmVQzxH3Nae4cK4ADV_PaQ3sQKBvEzs9ah_LUyfiWZua-P5J1214svCtai4sye3BAUonUIqM3eDDcUae_D1aDr0gpPl2AB9aiHtzmPTakFN0g-8P7WG_jZB9sw6Re7vp3SYTVNx9lrxQ06fWpDS9yMg",
            //   "email": "hauphvn@gmail.com",
            //   "refreshToken": "AFxQ4_pKY0M2GkMZWQhtacpM1w1xNuUJUOfctrLmaxpTNm4097e5miRo0gpF10NtJQZhQodgpjyGL9HTkrkGf5Ebk1-5dF939cRbsox2qDKaDWzAbqJ3KMBaO1i-o0NTK5FsluiM6BhaZYD_OKGhMvrYKXUKS639kEuaWP_4IugmgLZay8sN8Gv2I6CAyxjB7hJFxQcsTSaPPKImsWm48kzsAyV_-WU4ZQ",
            //   "expiresIn": "3600",
            //   "localId": "V9pfqTv4BYRmefkHGTFr87vi2ZH3"
            // }
          })
          .catch(() => {
            this.alertContent = 'Email existed'
            this.isAlertEmail = true
          })
      },
      setLogoutTimer (vuexContext, duration) {
        setTimeout(() => {
          vuexContext.commit('clearToken')
        }, duration)
      },
      initAuth (vuexContext, req) {
        let token = ''
        let expirationTime = ''
        if (req) {
          if (req.headers && req.headers.cookie) {
            const jwtCooke = req.headers.cookie.split(';').find(c => c.trim().startsWith('jwt='))
            const tokenExpiration = req.headers.cookie.split(';').find(c => c.trim().startsWith('tokenExpiration='))
            if (jwtCooke && tokenExpiration) {
              token = jwtCooke.split('=')[1]
              expirationTime = tokenExpiration.split('=')[1]
            }
          }
        } else {
          token = localStorage.getItem('token')
          expirationTime = localStorage.getItem('tokenExpiration')
        }
        if (new Date().getTime() < expirationTime && token) {
          vuexContext.dispatch('setLogoutTimer', +expirationTime - new Date().getTime())
          vuexContext.commit('setToken', token)
        }
      }
    },
    getters: {
      loadedPosts (state) {
        return state.loadedPosts
      },
      token (state) {
        return state.token
      },
      isAuthenticated (state) {
        return !!state.token
      }
    }
  })
}

export default createStore
