<template>
  <div id="app">
     <navbar></navbar>
     <doc_appointment></doc_appointment>
     <footer_main></footer_main>
  </div>
</template>

<script>
import navbar from "../../components/Basic/navbar.vue";
import footer from "../../components/Basic/footer.vue";
import doc_appointment from "../../components/Appointments/doc_appointment.vue";

export default {
    components:{
    "navbar":navbar,
    "footer_main":footer,
    "doc_appointment":doc_appointment
  }
}
</script>

<style>

</style>
