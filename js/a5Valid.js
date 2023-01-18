function validateForm() {
    
   var username = document.getElementById("username").value;
   var text;
      if(username.charAt(0) != username.charAt(0).toUpperCase())
      {
         text = "username must start with Capital Letter";
         document.getElementById("errorz").innerHTML = text;
      
      }


var letters = /^[A-Za-z]+$/;
      if(!(username.match(letters)))
      {
         text = ("Only Alphabets are allowed");
         document.getElementById("error").innerHTML = text;
      }
   


 //phoneNumber


 var phoneNum = document.getElementById("phone").value;
 var validNum = /^(\()\d{3}(\))\d{3}(-)\d{4}$/;
 if(!(phoneNum.match(validNum)) || isNaN)
 {
    alert("Enter the Phone Number in the valid format")
 }
 
 //comments

 var comment = document.getElementById("text").value;

 if(comment == ".*\\S+.*")
 {
    alert("Comment Should not be empty");
 }
}





