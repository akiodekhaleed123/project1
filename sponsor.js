function greetUser(){
    let userName = 
    document.getElementById("username").value 

    let time = 12

    if(time < 12){
        console.log("Good morning " + userName)
        document.getElementById("display").innerHTML = "<h1>" + "Good morning, " + userName + "!" + "</h1>"
    }
    else if(time < 18){
        console.log("Good afternoon "= userName)
        document.getElementById("display").innerHTML = ""
    }
}
