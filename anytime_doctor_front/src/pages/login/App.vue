<template>
  <div id="app">
     <navbar></navbar>
     <div class="maincontent">
        <h1>Welcome</h1>
    </div>
     <log_form></log_form>
     <footer_main></footer_main>
  </div>
</template>

<script>
import navbar from "../../components/Basic/navbar.vue";
import footer from "../../components/Basic/footer.vue";
import log_form from "../../components/Login/log_form.vue";

export default {
    components:{
    "navbar":navbar,
    "footer_main":footer,
    "log_form":log_form
  }
}
</script>

<style>
.maincontent{
    text-align: center;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    padding-top: 4rem;
    padding-bottom: 2rem;
}
.maincontent h1{
    color: rgb(243, 121, 14);
    font-weight: 300;
    font-size: 2.5rem;
}
.maincontent p{
    font-size: 1rem;
}
</style>
