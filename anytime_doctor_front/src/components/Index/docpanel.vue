<template>
  <section class="testimonials text-center bg-light testMnil">
    <div class="container">
      <h2 class="mb-5 docpaneltext">People who here to help You..</h2>
      <div class="row">
        {{this.docList()}}
        <div class="col-lg-4" v-for="doctor in dcList" :key="doctor.id">
          <div class="testimonial-item mx-auto mb-5 mb-lg-0">
            <img class="img-fluid rounded-circle mb-3" :src="doctor.picture" alt="">
            <a :href="`doctor_profile/${doctor.id}`"><h5>{{doctor.name}}</h5></a>
            <p class="font-weight-light mb-0 docpanelsubtext">{{doctor.speciality}}</p>
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
        doctors:[],
        dcList:[]
       }
     },
     methods:{
       docList(){
         for(let i=0;i<3;i++){
           this.dcList[i]=this.doctors[i];
         }
       }
     },
     created(){
      this.$http.get('http://localhost:8000/doctors/doctors/')
                .then(response => {
                    this.doctors = response.body;
                })
    }
}
</script>
<style>
.testMnil{
    padding-top: 4rem;
    padding-bottom: 0;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
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
    border-radius: 5px;
}
.docpanelviewmore button:hover{
    background-color: rgb(236, 138, 52);
}

/* Doctor_Bar */

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
  padding-top: 7rem;
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