<template>
<div class="signup"> 
        <form action="#" class="formsign">
            <div class="form-group formitem">
            <label for="name">First Name</label>
            <input type="text" class="form-control" id="name" v-model="fname" required>
            </div>
            <div class="form-group formitem">
            <label for="lname">Last Name</label>
            <input type="text" class="form-control" id="lname" v-model="lname" required>
            </div>
            <div class="form-group formitem">
            <label for="email">Email</label>
            <input type="email" class="form-control" id="email" v-model="email" required>
            </div>
            <div class="form-group formitem">
              <label for="contact">Contact No</label>
              <input type="text" class="form-control" id="contact" v-model="contact" required>
            </div>
            <div class="form-group formitem">
            <label for="pword">Password</label>
            <input type="text" class="form-control" id="pword" v-model="pword" required>
            </div>
            <div class="form-group formitem lastman">
              <label for="cpword">Confirm Password</label>
              <input type="text" class="form-control" id="cpword" v-model="cpword" required>
            </div>
            <button class="btn btn-block joinformbtn" @click="sendPost()">Join</button>
        </form> 
    </div> 
</template>
<script>
export default {
    data:function(){
        return{
            users:[],
            fname:"",
            lname:"",
            email:"",
            contact:"",
            pword:"",
            cpword:"",
            j:0,
        }
    },
    methods:{
        // fetchData:function(){
        //     this.$http.get('http://localhost:8000/accounts/users/')
        //         .then(response => {
        //             this.users = response.body;
        //         })
        // }
        sendPost:function(){
            if(this.pword==this.cpword)
            {
                this.j=0;
                // this.$http.get('http://localhost:8000/accounts/users/')
                // .then(response => {
                //     this.users = response.body;
                    // console.log(this.users);

                for(var i=0;i<this.users.length;i++){
                    if(this.users[i].email==this.email)
                    {
                        console.log("Already Exist");
                        this.j=1;
                    }
                }
                // })
                if(this.j==0){
                    console.log("inside");
                    const postData={username:this.fname,first_name:this.fname,last_name:this.lname,email:this.email,password:this.cpword};
                    this.$http.post("http://localhost:8000/accounts/users/", postData);

                    // this.$http.get('http://localhost:8000/accounts/users/')
                    //     .then(response => {
                    // this.users = response.body;
                    // // console.log(this.users);
                    //     })

                    const postDataEx={user:(this.users[this.users.length-1].id)+1,contact_no:this.contact};
                    this.$http.post("http://localhost:8000/accounts/usersEx/", postDataEx);
                }

                // if(this.j==0){
                //     const postDataEx={user:22,contact_no:this.contact};
                //     this.$http.post("http://localhost:8000/accounts/usersEx/", postDataEx);
                // }

                // this.$http.get('http://localhost:8000/accounts/users/')
                // .then(response => {
                //     this.users = response.body;
                //     console.log(this.users);
                // })

                // const postDataEx={user:this.users[3],contact_no:this.contact};
                // this.$http.post("http://localhost:8000/accounts/usersEx/", postDataEx)
                // .then(res=>{
                //      console.log(res.body);
                // })
            }
            else{
                console.log("Re-enter Password");
            }
        }
    },
    created(){
        this.$http.get('http://localhost:8000/accounts/users/')
                .then(response => {
                    this.users = response.body;
            }  
                )}   

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