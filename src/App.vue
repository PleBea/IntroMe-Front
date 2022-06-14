<template>
  <HeaderItem/>
  <router-view/>
</template>

<script>
import HeaderItem from "./components/HeaderItem.vue"

export default {
  components: {
    HeaderItem
  }
}
</script>

<style>
@import "./assets/global.css";
</style>
