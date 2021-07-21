<template>
  <div id="app">
    <navbar>
      <slot slot="slot1">Hospitals</slot>
    </navbar>
    <header_main></header_main>
    <docpanel></docpanel>
    <hosppanel></hosppanel>
    <services></services>
    <footer_main></footer_main>
  </div>
</template>

<script>
import navbar from "../../components/Basic/navbar.vue";
import header from "../../components/Index/header.vue";
import docpanel from "../../components/Index/docpanel.vue";
import hosppanel from "../../components/Index/hosppanel.vue";
import services from "../../components/Index/services.vue";
import footer from "../../components/Basic/footer.vue";
import Hosppanel from '../../components/Index/hosppanel.vue';

export default {
  components:{
    "navbar":navbar,
    "header_main":header,
    "docpanel":docpanel,
    "hosppanel":hosppanel,
    "services":services,
    "footer_main":footer,
    Hosppanel,
  },
}
</script>

<style>

</style>
