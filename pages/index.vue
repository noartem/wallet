<script lang="ts" setup>
const user = useUser()
</script>

<template>
  <h1>
    Hello, world!
  </h1>

  <pre v-text="JSON.stringify(user, null, '\t')"/>
</template>
