<template>
  <div id="app">
     <navbar></navbar>
     <search></search>
     <online_doc></online_doc>
     <footer_main></footer_main>
  </div>
</template>

<script>
import navbar from "../../components/Basic/navbar.vue";
import footer from "../../components/Basic/footer.vue";
import search from "../../components/Basic/search.vue";
import online_doc from '../../components/Doctors/online_doc.vue';

export default {
    components:{
    "navbar":navbar,
    "footer_main":footer,
    "search":search,
    "online_doc":online_doc
  }
}
</script>

<style>

</style>
