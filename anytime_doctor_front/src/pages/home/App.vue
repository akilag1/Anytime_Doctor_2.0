<template>
  <div id="app">
    <navbar></navbar>
    <header_main></header_main>
  </div>
</template>

<script>
import navbar from "../../components/Basic/navbar.vue";
import header from "../../components/Index/header.vue";

export default {
  components:{
    "navbar":navbar,
    "header_main":header
  }
}
</script>

<style>

</style>
