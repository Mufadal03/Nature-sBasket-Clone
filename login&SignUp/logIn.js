var signUpData=JSON.parse(localStorage.getItem("signUpData"))




document.querySelector("form").addEventListener("submit",logInFun)

function logInFun(){
    event.preventDefault()

    // var Email=document.querySelector("#mail")
    // var Password=document.querySelector("#key")

    var logInObj={

        email:signUp.mail.value,
        key:signUp.key.value
     }
     if(signUpData==null)  
     {
         alert("Please SignUp First")
         window.location.href="signup.html"
     }
   
   else if(logInObj.email==signUpData.Email && logInObj.key==signUpData.key)
     {
         alert("LogIn Successful")
       var LogInData = localStorage.setItem("logInInfo", JSON.stringify(logInObj))
       window.location.href="/Nature-sBasket/index.html"
     } 
   else
     {
         alert("Wrong Credentials")
     }



}


 