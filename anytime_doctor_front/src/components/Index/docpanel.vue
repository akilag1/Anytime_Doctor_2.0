<template>
  <section class="testimonials text-center bg-light testMnial">
    <div class="container">
      <h2 class="mb-5 docpaneltext">People who here to help You..</h2>
      <div class="row">
        <div class="col-lg-4">
          <div class="testimonial-item mx-auto mb-5 mb-lg-0">
            <img class="img-fluid rounded-circle mb-3" src="../../assets/img/Pic10.jpg" alt="">
            <h5>Margaret E.</h5>
            <p class="font-weight-light mb-0 docpanelsubtext">Doctor 1</p>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="testimonial-item mx-auto mb-5 mb-lg-0">
            <img class="img-fluid rounded-circle mb-3" src="../../assets/img/Pic13.jpg" alt="">
            <h5>Fred S.</h5>
            <p class="font-weight-light mb-0 docpanelsubtext">Doctor 2</p>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="testimonial-item mx-auto mb-5 mb-lg-0">
            <img class="img-fluid rounded-circle mb-3" src="../../assets/img/Pic14.jpg" alt="">
            <h5>Sarah W.</h5>
            <p class="font-weight-light mb-0 docpanelsubtext">Doctor 3</p>
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