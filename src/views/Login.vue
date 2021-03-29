/* eslint-disable no-debugger */
<template>
  <div>
    Username:
    <input v-model="username" @change="onLogin" />
  </div>
</template>
<script lang="ts">
import { Role } from '@/types'
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class Login extends Vue {
  username = '';

  onLogin (): void {
    if (this.username.toLowerCase() === 'admin') {
      this.$store.dispatch('setRole', Role.ADMIN)
      this.$router.push({ name: 'Admin' })
    }
    if (this.username.toLowerCase() === 'editor') {
      this.$store.dispatch('setRole', Role.EDITOR)
      this.$router.push({ name: 'Editor' })
    }
    if (this.username.toLowerCase().includes('viewer')) {
      this.$store.dispatch('setRole', Role.VIEWER)
      this.$router.push({ name: 'Viewer' })
      if (this.username.includes('paid-viewer')) {
        this.$store.dispatch('setIsPaid', true)
      }
    }
  }

  get loggedIn (): boolean {
    return this.$store.state.loggedIn
  }
}
</script>
