<template>
  <div id="app">
     <navbar>
      <slot slot="slot1"><a href="index" class="nav-link">Home</a></slot>
      <slot slot="slot2"><a href="doctors" class="nav-link">Doctors</a></slot>
     </navbar>
     <search></search>
     <hosp_avatar></hosp_avatar>
     <footer_main></footer_main>
  </div>
</template>

<script>
import navbar from "../../components/Basic/navbar.vue";
import footer from "../../components/Basic/footer.vue";
import search from "../../components/Basic/search.vue";
import hosp_avatar from "../../components/Hospitals/hosp_avatar.vue";


export default {
    components:{
    "navbar":navbar,
    "footer_main":footer,
    "search":search,
    "hosp_avatar":hosp_avatar
  }
}
</script>
<style>

</style>
