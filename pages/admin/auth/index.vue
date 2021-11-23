<template>
  <div class="admin-auth-page">
    <div class="auth-container">
      <form @submit.prevent="onSubmit">
        <AppControlInput
          :click="isAlertEmail = false"
          v-model="email"
          type="email"
        >E-mail Address
        </AppControlInput>
        <p
          v-show="isAlertEmail"
          style="font-size: small; color: red"
        >{{ alertContent }}</p>
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
      password: '',
      isAlertEmail: false,
      alertContent: ''
    }
  },
  components: {
    AppButton,
    AppControlInput
  },
  methods: {
    onSubmit () {
      this.$store.dispatch('authenticateUser', {
        isLogin: this.isLogin,
        email: this.email,
        password: this.password
      })
        .then(() => this.$router.push('/admin'))
        .catch(() => {
        })
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
