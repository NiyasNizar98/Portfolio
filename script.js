 
var validName
var validPlace
var validAddress
var validEmail
var validPhone
var validMessage

function checkName(){
    validName = false
    var name = document.getElementById("inputName").value
    var validation
    var pattern = /^[-a-zA-Z-()]+(\s+[-a-zA-Z-()]+)*$/
    if (name==""){
        validation = "Please enter your name"
        validName = false
    }else if(name.match(pattern)){
        validation = ""
        validName = true
    }else{
        validation = "Please use characters only"
        validName = false
    }
    document.getElementById("nameValid").innerHTML = validation
    

}

function checkPlace(){
    var place = document.getElementById("inputPlace").value
    var validation
    validPlace = false
    var pattern = /^[a-z A-z 0-9\s]*$/;
    if (place==""){
        validation = "Please Enter your details"
        validPlace = false
    }else if(name.match(pattern)){
        validation = ""
        validPlace = true
    }else{
        validation = "Please enter your details"
        validPlace = false
    }
    document.getElementById("placeValid").innerHTML = validation
}

function checkAddress(){
    var address = document.getElementById("inputAddress").value
    var validation
    validAddress = false;
    var pattern = /^[-a-zA-Z0-9-()]+(\s+[-a-zA-Z0-9-()]+)*$/
    
    
    if (address==""){
        validation = "Please Enter your details"
        validAddress = false
    }else if(address.length<10){
        validation = "Please add more details"
        validAddress = false
    }
    else{
        validation = ""
        validAddress = true
    }
    document.getElementById("addressValid").innerHTML = validation
}

function checkEmail(){
    var email = document.getElementById("inputEmail").value
    var validation
    validEmail = false
    var pattern = /^[^]+@[^]+\.[a-z]{2,3}$/
    if (email==""){
        validEmail = false
        validation = "Please enter your mail"
    }else if(email.match(pattern)){
        validation = ""
        validEmail = true
    }else{
        validation = "Please enter valid mail "
        validEmail = false
    }
    document.getElementById("emailValid").innerHTML = validation
}

function checkPhone(){
    var phone = document.getElementById("inputPhone").value
    var validation
     valid = false
    var pattern = /^\d{10}$/;
    if (phone==""){
        validation = "Please enter your phone number"
        validPhone = false
    }else if(phone.match(pattern)){
        validation = ""
        validPhone = true
    }
    else{
        validation = "Please enter upto 10 digits"
        validPhone = false
    }
    document.getElementById("phoneValid").innerHTML = validation
}
function checkMessage(){
    var message = document.getElementById("inputMessage").value
    var validation
    validMessage = false
    var pattern = /^[-a-zA-Z0-9-()]+(\s+[-a-zA-Z0-9-()]+)*$/;
    if (message==""){
        validation = "Please enter your message"
        valvalidMessageid = false
    }else if(message.match(pattern)){
        validation = ""
        validMessage = true
    }
    else{
        validation = ""
        validMessage = true
    }
    document.getElementById("messageValid").innerHTML = validation


}
