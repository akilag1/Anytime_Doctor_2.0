<template>
<div class="signup"> 
        <form action="" class="formsign">
            <div class="form-group formitem">
            <label for="name">First Name</label>
            <input type="text" class="form-control" id="name" required>
            </div>
            <div class="form-group formitem">
            <label for="lname">Last Name</label>
            <input type="text" class="form-control" id="lname" required>
            </div>
            <div class="form-group formitem">
            <label for="email">Email</label>
            <input type="email" class="form-control" id="email" required>
            </div>
            <div class="form-group formitem">
              <label for="contact">Contact No</label>
              <input type="text" class="form-control" id="contact" required>
            </div>
            <div class="form-group formitem">
            <label for="pword">Password</label>
            <input type="text" class="form-control" id="pword" required>
            </div>
            <div class="form-group formitem lastman">
              <label for="cpword">Confirm Password</label>
              <input type="text" class="form-control" id="cpword" required>
            </div>
            <button class="btn btn-block joinformbtn" type="submit">Join</button>
        </form> 
    </div>      
</template>
<script>
export default {
    
}
</script>
<style>
.signup{
     display: flex; 
   /* justify-content: center; */
    flex: 1;
    width: 100%;
    margin-bottom: 3rem;
	flex-direction:column;
	align-items: center;
}
.signup label{
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 1rem;
    font-weight: 600;
    width: 10rem;
}
.formitem{
    display: flex;
    width: 30rem;
}
.signup form button{
    text-align: center;
    margin: auto;
    width: 50%;
}
.joinformbtn{
    text-align: center;
    color: white;
    background-color: rgb(243, 121, 14);;
}
.joinformbtn:hover{
    text-align: center;
    color: white;
    background-color: rgb(236, 138, 52);
}
.signup form .lastman{
    margin-bottom: 2rem;
}
</style>