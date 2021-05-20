<template>
 <section class="testimonials text-center bg-light testMnial">
    <div class="row">
      <!-- {{ this.fetchData() }} -->
        <div class="col-lg-4 docitem" v-for="doctor in doctors" :key="doctor.id">
          <!-- {{this.i=this.i+1}} -->
          <div class="testimonial-item mx-auto mb-5 mb-lg-0">
            <img class="img-fluid rounded-circle mb-3" :src=doctor.picture alt="">
            <a href="#" @click="sendDoc()"><h5>{{doctor.name}}</h5></a>
            <p class="font-weight-light mb-0 docpanelsubtext">{{doctor.description}}</p>
          </div>
        </div>
    </div>
 </section>      
</template>
<script>

// import { eventBus } from "../../pages/doctors/main"

export default {
    data:function(){
        return{
          // i:0,
          doctors:[]
        }   
    },
    methods:{
      //  fetchData:function(){
      //       this.$http.get('http://localhost:8000/doctors/doctors/')
      //           .then(response => {
      //               this.doctors = response.body;
      //           })
      //   },
        sendDoc:function(){
            this.$store.state.i++;
            console.log(this.$store.state.i);
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
.docitem{
    margin-bottom: 2.5rem;
}
.testMnial{
    padding-top: 4rem;
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
</style>