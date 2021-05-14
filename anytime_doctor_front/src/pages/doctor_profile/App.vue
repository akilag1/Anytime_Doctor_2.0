<template>
  <div id="app">
     <navbar></navbar>
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

export default {
    components:{
    "navbar":navbar,
    "footer_main":footer,
    "search":search,
    "doc_avatar":doc_avatar
  }
}
</script>

<style>

</style>
