<template>
  <div id="app">
     <navbar></navbar>
     <test_appointment></test_appointment>
     <footer_main></footer_main>
  </div>
</template>

<script>
import navbar from "../../components/Basic/navbar.vue";
import footer from "../../components/Basic/footer.vue";
import test_appointment from '../../components/Appointments/test_appointment.vue';

export default {
    components:{
    "navbar":navbar,
    "footer_main":footer,
    "test_appointment":test_appointment
  }
}
</script>

<style>

</style>
