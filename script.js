//javascript for form validation
function data(){
var email = document.getElementById("emailId").value;
var contact = document.getElementById("phone").value;
var password = document.getElementById("pass").value;
var cpassword = document.getElementById("cpass").value;

    // validating all the fields
    if(email==""||contact==""||password==""||cpassword==""){
        alert("All fields are mandatory!");
        return false;
    }
    // validating for contact number
    else if(contact.length<10 || contact.length>10){
        alert("Number should be of 10 digits only! Please Enter valid number");
        return false;
    }
    // validating for number with alphabets
    else if(isNaN(contact)){
        alert("Only digits are allowed! Please Enter valid number");
        return false;
    }
    // validating for password
    else if(password != cpassword){
        alert("Enter same password");
        return false;
    }
    else{
        true;
    }    
}