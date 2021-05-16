<template>
   <div> 
     <!-- pic and facts -->
    <div class="row" id="picfacts">
      <section id="pic" class="col-md-4">
          <img src="#" alt="">
      </section>
      <section id="facts" class="col-md-8">
          <div class="docfacts">
              <ul>
                <div class="docfact_li">
                  <li>Name</li>
                  <p></p>
                </div>
                <div class="docfact_li">
                  <li>Speciality</li>
                  <p>}</p>
                </div>
                <div class="docfact_li">
                  <li>Hospital</li>
                  <p></p>
                </div>
                <div class="docfact_li">
                  <li>Email </li>
                  <p></p>
                </div>
              </ul>              
          </div>
      </section>
    </div>


    <!-- description -->

    <div class="row" id="description"> 
        <div class="col-md-12 descri">
            <p></p>
        </div>
    </div>
   </div> 
</template>
<script>
export default {
    
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