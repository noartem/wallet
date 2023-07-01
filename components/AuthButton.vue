<script lang="ts" setup>
const { status, signIn, signOut } = useAuth()
</script>

<template>
  <n-button
    v-if="status === 'authenticated'"
    :disabled="status === 'loading'"
    @click="signOut()"
  >
    Sign Out
  </n-button>
  <n-button v-else @click="signIn('github')">
    Sign In via GitHub
  </n-button>
</template>
