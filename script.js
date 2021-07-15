 

function checkName(){
    var name = document.getElementById("inputName").value
    var validation
    var pattern = /^[a-z A-z\s]*$/;

    if (name==""){
        validation = "Please Enter your name"
    }else if(name.match(pattern)){
        validation = ""
    }else{
        validation = "Please use characters only"
    }
    document.getElementById("nameValid").innerHTML = validation

}

function checkPlace(){
    var place = document.getElementById("inputPlace").value
    var validation
    var pattern = /^[a-z A-z 0-9\s]*$/;
    if (place==""){
        validation = "Please Enter your details"
    }else if(name.match(pattern)){
        validation = ""
    }else{
        validation = ""
    }
    document.getElementById("placeValid").innerHTML = validation
}

function checkAddress(){
    var address = document.getElementById("inputAddress").value
    var validation
    
    
    if (address==""){
        validation = "Please Enter your details"
    }else if(address.length<10){
        validation = "Please add more details"
    }
    else{
        validation = ""
    }
    document.getElementById("addressValid").innerHTML = validation
}

function checkEmail(){
    var email = document.getElementById("inputEmail").value
    var validation
    var pattern = /^[^]+@[^]+\.[a-z]{2,3}$/
    if (email==""){
        validation = "Please Enter your mail"
    }else if(email.match(pattern)){
        validation = ""
    }else{
        validation = "Please Enter your mail "
    }
    document.getElementById("emailValid").innerHTML = validation
}

function checkPhone(){
    var phone = document.getElementById("inputPhone").value
    var validation
    var pattern = /^\d{10}$/;
    if (phone==""){
        validation = "Please Enter your phone number"
    }else if(phone.match(pattern)){
        validation = ""
    }
    else{
        validation = "Invalid"
    }
    document.getElementById("phoneValid").innerHTML = validation
}
function checkMessage(){
    var message = document.getElementById("inputMessage").value
    var validation
    var pattern = /^[^]*$/;
    if (message==""){
        validation = "Please Enter your message"
    }else if(message.match(pattern)){
        validation = ""
    }
    else{
        validation = " "
    }
    document.getElementById("messageValid").innerHTML = validation
}