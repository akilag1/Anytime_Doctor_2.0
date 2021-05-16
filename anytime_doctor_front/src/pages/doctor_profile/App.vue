<template>
  <div id="app">
     <navbar></navbar>
     <doc_profile></doc_profile>
     <footer_main></footer_main>
  </div>
</template>

<script>
import navbar from "../../components/Basic/navbar.vue";
import footer from "../../components/Basic/footer.vue";
import doc_profile from "../../components/Doctors/doc_profile.vue";

export default {
    components:{
    "navbar":navbar,
    "footer_main":footer,
    "doc_profile": doc_profile
  }
}
</script>

<style>

</style>
