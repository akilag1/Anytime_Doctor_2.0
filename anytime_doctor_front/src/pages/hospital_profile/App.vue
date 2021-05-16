<template>
  <div id="app">
     <navbar></navbar>
     <hosp_profile></hosp_profile>
     <footer_main></footer_main>
  </div>
</template>

<script>
import navbar from "../../components/Basic/navbar.vue";
import footer_main from "../../components/Basic/footer.vue";
import hosp_profile from "../../components/Hospitals/hosp_profile.vue";

export default {
    components:{
    "navbar":navbar,
    "footer_main":footer_main,
    "hosp_profile": hosp_profile
  }
}
</script>

<style>
#pic img{
    width: 100%;
    height: 100%;
    /* border-radius: 50%; */
}
#picfacts{
    margin-top: 4rem;
    margin-left: 4rem;
    margin-right: 4rem;
    margin-bottom: 4rem;
}
#description{
    margin: 3rem;
}
#facts ul{
    list-style: none;
}
#facts ul li{
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 2rem;
    background-color: rgb(240, 163, 75);
    width: 10rem;
    text-align: right;
    border-bottom:  #fff solid 2px;
    padding-right: 1rem;
    /* margin-bottom: 1rem; */
}
#facts .docfact_li{
    display: flex;
}
#facts .docfact_li p{
    background-color: rgb(224, 167, 114);
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 1.5rem;
    width: 30rem;
    margin-bottom: 0;
    height: 3rem;
    text-align: left;
    padding-left: 2rem;
    /* text-transform: uppercase; */
}
</style>
