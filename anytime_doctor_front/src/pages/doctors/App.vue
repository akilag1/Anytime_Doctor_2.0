<template>
  <div id="app">
     <doc_profile v-show="false"></doc_profile>
     <navbar>
      <slot slot="slot1"><a href="index" class="nav-link">Home</a></slot>
      <slot slot="slot2"><a href="hospitals" class="nav-link">Hospitals</a></slot>
     </navbar>
     <search></search>
     <doc_avatar></doc_avatar>
     <footer_main></footer_main>
  </div>
</template>

<script>
import navbar from "../../components/Basic/navbar.vue";
import footer from "../../components/Basic/footer.vue";
import search from "../../components/Basic/search.vue";
import doc_avatar from "../../components/Doctors/doc_avatar.vue";
import doc_profile from "../../components/Doctors/doc_profile.vue";

export default {
    components:{
    "navbar":navbar,
    "footer_main":footer,
    "search":search,
    "doc_avatar":doc_avatar,
    "doc_profile": doc_profile
  }
}
</script>

<style>

</style>
