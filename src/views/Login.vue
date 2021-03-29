/* eslint-disable no-debugger */
<template>
  <div>
    Username:
    <input v-model="username" @change="onLogin" />
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class Login extends Vue {
  username = '';

  onLogin (): void {
    console.log('on-login')
    if (this.username) {
      this.$store.dispatch('setLoggedIn', true)
      this.$store.dispatch('setUsername', this.username)
      this.$router.push({ path: '/admin' })
    }
  }

  get loggedIn (): boolean {
    return this.$store.state.loggedIn
  }
}
</script>
