document.getElementById("log-in-btn").addEventListener('click', function(){
   const mobileNumber =parseInt( document.getElementById("mobile-number").value)
   const password = document.getElementById("password").value

   const userNumber=parseInt('01776433215')
   const pass="anik"

   if(userNumber===mobileNumber && password===pass){
    window.location.href='home.html'
   }else{
    alert("Invalid Input!")
   }


  
})