<template>
  <div id="app">
    <navbar>
      <a slot="slot1">Hospitals</a>
    </navbar>
    <header_main></header_main>
    <docpanel></docpanel>
    <services></services>
    <subscribe></subscribe>
    <footer_main></footer_main>
  </div>
</template>

<script>
import navbar from "../../components/Basic/navbar.vue";
import header from "../../components/Index/header.vue";
import docpanel from "../../components/Index/docpanel.vue";
import services from "../../components/Index/services.vue";
import subscribe from "../../components/Index/subscribe.vue";
import footer from "../../components/Basic/footer.vue";

export default {
  components:{
    "navbar":navbar,
    "header_main":header,
    "docpanel":docpanel,
    "services":services,
    "subscribe":subscribe,
    "footer_main":footer,
  },
}
</script>

<style>

</style>
