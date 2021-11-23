<template>
  <div class="admin-auth-page">
    <div class="auth-container">
      <form @submit.prevent="onSubmit">
        <AppControlInput
          v-model="email"
          type="email"
        >E-mail Address
        </AppControlInput>
        <AppControlInput
          v-model="password"
          type="password"
        >Password
        </AppControlInput>
        <AppButton type="submit">{{ isLogin ? 'Login' : 'Sign up' }}</AppButton>
        <AppButton
          type="button"
          btn-style="inverted"
          style="margin-left: 10px"
          @click="isLogin = !isLogin"
        >Switch to {{ isLogin ? 'Signup' : 'Login' }}
        </AppButton>
      </form>
    </div>
  </div>
</template>

<script>
import AppButton from '~/components/UI/AppButton'
import AppControlInput from '~/components/UI/AppControlInput'

export default {
  layout: 'admin',
  name: 'index',
  data () {
    return {
      isLogin: true,
      email: '',
      password: ''
    }
  },
  components: {
    AppButton,
    AppControlInput
  },
  methods: {
    onSubmit () {
      this.$axios.$post(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.firebaseAPIKey}`, {
        email: this.email,
        password: this.password,
        returnSecureToken: true
      })
        .then((resp) => {
          // {
          //   "kind": "identitytoolkit#SignupNewUserResponse",
          //   "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjJlMzZhMWNiZDBiMjE2NjYxOTViZGIxZGZhMDFiNGNkYjAwNzg3OWQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vbnV4dC1ibG9nLWZpcnN0IiwiYXVkIjoibnV4dC1ibG9nLWZpcnN0IiwiYXV0aF90aW1lIjoxNjM3NjM2MjI1LCJ1c2VyX2lkIjoiVjlwZnFUdjRCWVJtZWZrSEdURnI4N3ZpMlpIMyIsInN1YiI6IlY5cGZxVHY0QllSbWVma0hHVEZyODd2aTJaSDMiLCJpYXQiOjE2Mzc2MzYyMjUsImV4cCI6MTYzNzYzOTgyNSwiZW1haWwiOiJoYXVwaHZuQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJoYXVwaHZuQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.JFk9f-MoOiMtZuHAGBBv7Op4QlRttrW2JjeMnvyG39G-3CJoy9zU_-81e47p8Qi2Mb-fuA5f_iKVXU6Ss8ZLZwRxHXQEPzRcAZB7nLpm0kv8xWIQ1whGcBqax0pr1H5RygmfJJB1CdgOuuOlZ14sprlDLME8bwbZeTUnAErgK64Xq8VkfEX-Zg3Issy3q8ALmVQzxH3Nae4cK4ADV_PaQ3sQKBvEzs9ah_LUyfiWZua-P5J1214svCtai4sye3BAUonUIqM3eDDcUae_D1aDr0gpPl2AB9aiHtzmPTakFN0g-8P7WG_jZB9sw6Re7vp3SYTVNx9lrxQ06fWpDS9yMg",
          //   "email": "hauphvn@gmail.com",
          //   "refreshToken": "AFxQ4_pKY0M2GkMZWQhtacpM1w1xNuUJUOfctrLmaxpTNm4097e5miRo0gpF10NtJQZhQodgpjyGL9HTkrkGf5Ebk1-5dF939cRbsox2qDKaDWzAbqJ3KMBaO1i-o0NTK5FsluiM6BhaZYD_OKGhMvrYKXUKS639kEuaWP_4IugmgLZay8sN8Gv2I6CAyxjB7hJFxQcsTSaPPKImsWm48kzsAyV_-WU4ZQ",
          //   "expiresIn": "3600",
          //   "localId": "V9pfqTv4BYRmefkHGTFr87vi2ZH3"
          // }
        })
        .catch(e => console.log('error auth: ', e))
    }
  }
}
</script>

<style scoped>
.admin-auth-page {
  padding: 20px;
}

.auth-container {
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 2px #ccc;
  width: 300px;
  margin: auto;
  padding: 10px;
  box-sizing: border-box;
}
</style>
