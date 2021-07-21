<template>
  <section class="testimonials text-center bg-light testMnial">
    <div class="container">
      <h2 class="mb-5 docpaneltext">Places available to take care of you..</h2>
      <div class="row">
        {{this.hospList()}}
        <div class="col-lg-4" v-for="hospital in hcList" :key="hospital.id">
          <div class="testimonial-item mx-auto mb-5 mb-lg-0">
            <img class="img-fluid rounded-circle mb-3" :src="hospital.picture" alt="">
            <a :href="`hospital_profile/${hospital.id}`"><h5>{{hospital.name}}</h5></a>
            <p class="font-weight-light mb-0 docpanelsubtext">{{hospital.location}}</p>
          </div>
        </div>
      </div>
        <!-- viewmore -->

      <div class="docpanelviewmore">
          <a href="doctors.html"><button btn btn-lg>See All <i class="fas fa-arrow-circle-right"></i></button></a>
      </div>
    </div>
  </section>
</template>
<script>
export default {
     data:function(){
       return{
        hospitals:[],
        hcList:[]
       }
     },
     methods:{
       hospList(){
         for(let i=0;i<3;i++){
           this.hcList[i]=this.hospitals[i];
         }
       }
     },
     created(){
      this.$http.get('http://localhost:8000/hospitals/hospitals/')
                .then(response => {
                    this.hospitals = response.body;
                })
    }
}
</script>
<style>
.docpanelviewmore{
    display: flex;
    justify-content: flex-end;
}
.docpanelviewmore button{
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-weight: 200;
    width: 6rem;
    background-color: rgb(236, 118, 15);
    text-align: center;
    color:white;
    padding-right: 0;
    margin-right: -2rem;
    margin-bottom: -2rem;
}
.docpanelviewmore button:hover{
    background-color: rgb(236, 138, 52);
}

/* Doctor_Bar */

.testMnial{
    padding-top: 0 !important;
    padding-bottom: 5rem;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
.docpaneltext{
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: rgb(243, 121, 14);
    font-weight: 300;
    font-size: 2.5rem;
}
.docpanelsubtext{
    font-size: 1rem;
}
.testimonials {
  /* padding-top: 7rem; */
  padding-bottom: 7rem;
}

.testimonials .testimonial-item {
  max-width: 18rem;
}

.testimonials .testimonial-item img {
  max-width: 12rem;
  box-shadow: 0px 5px 5px 0px #adb5bd;
}
a:hover {
  text-decoration: none;
}
</style>