<script lang="ts" setup>
const route = useRoute()

const links = ref([
  ['Home', 'index'],
  ['Currencies', 'currencies'],
])

const menuOptions = computed(() =>
    links.value.map(([title, name]) => ({
      label: () => h(resolveComponent('NuxtLink'), {to: {name}}, title),
      key: name,
    })))
</script>

<template>
  <header class="p-4">
    <n-menu
        :value="route.name"
        :options="menuOptions" class="-mx-2"/>

    <AuthButton/>
  </header>

  <main>
    <NuxtPage/>
  </main>
</template>
