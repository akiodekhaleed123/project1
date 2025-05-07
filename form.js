function signUp(){
    let myName = document.getElementById("userName").value 
    let myAge = document.getElementById("myAge").value
    let isMarried = document.getElementById("isMarried").value
    
    console.log(myName)
    console.log(myAge)
    console.log(isMarried)
    console.log("User signed up")
    alert('welcome to our ceremony  ' + myName + " you are " + myAge + " years old ," + " married? " + isMarried)
    document.getElementById("display").innerHTML = "<h1 class= 'hello'> welcome  </h1>"
    document.getElementById(userName).value = ""
    }