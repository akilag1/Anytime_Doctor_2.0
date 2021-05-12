<template>
  <div id="app">
     <navbar></navbar>
     <search></search>
     <available_doc></available_doc>
     <footer_main></footer_main>
  </div>
</template>

<script>
import navbar from "../../components/Basic/navbar.vue";
import footer from "../../components/Basic/footer.vue";
import search from "../../components/Basic/search.vue";
import available_doc from "../../components/Doctors/available_doc.vue";

export default {
    components:{
    "navbar":navbar,
    "footer_main":footer,
    "search":search,
    "available_doc":available_doc
  }
}
</script>

<style>

</style>
