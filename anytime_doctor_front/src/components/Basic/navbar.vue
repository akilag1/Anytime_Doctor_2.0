<template>
    <div class="row navrow">
        <div class="col-md-12">
          <nav class="navbar navbar-expand-lg navbar-light myNavbar">
            <a class="navbar-brand myNavTitle" href="index.html">ANYTIME DOCTOR</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                  <a class="nav-link" href="index.html">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Doctors</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link slot_link" href="howthiswork.html"><slot name="slot1"></slot></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Services</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="howthiswork.html">How this works</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="howthiswork.html"><slot name="slot2"></slot></a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
    </div>    
</template>

<script>
export default {
    
}
</script>

<style>
.navrow{
    position: sticky;
    top: 0;
    z-index: 1;
}
.myNavbar{
    background-color: #fad487;
    padding: 2rem;
    height: 4rem;
    font-size: 1.3rem;
}
.myNavTitle{
    font-size: 1.5rem;
    font-weight: 200;
    border: #901838 solid 1px ;
    border-radius: 5px;
    padding: 4px;
    background-color: #96c2f5;
}
#navbarSupportedContent li a{
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: rgb(0, 1, 5);
}
#navbarSupportedContent li a:hover{
    padding-bottom: 6px;
    color: rgb(236, 80, 18);
    border-bottom: solid red 2px;
}

body {
  font-family: 'Lato', 'Helvetica Neue', Helvetica, Arial, sans-serif;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: 'Lato', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: 700;
}
.slot_link{
  text-decoration: none !important;
}
</style>