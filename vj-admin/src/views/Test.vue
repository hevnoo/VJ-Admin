<template>
  <div></div>
</template>

<script setup>
const pathName = computed(() => {
  if (storage.getItem('pathName')) {
    return storage.getItem('pathName')
  } else {
    storage.setItem('pathName', store.state.bread.pathName)
    console.log('---', storage.getItem('pathName'))
    return store.state.bread.pathName
  }
  // return store.state.bread.pathName
})
// storage.setItem('pathName', pathName.value)
</script>

<style lang="scss" scoped></style>
