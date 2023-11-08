//Jamal Hamilton
function CheckLogin() {
    //These next 4 lines create variables that help theuser to login
    console.log("CheckLogin() started");
    document.getElementById("Login").innerHTML = "Login Status"
    
    var FirstName = document.getElementById("First").value;
    console.log("The First Name entered was " + FirstName);
    
    var LastName = document.getElementById("Last").value;
    console.log("The Last Name entered was " + LastName);
    
    var ZipCode = document.getElementById("Zip").value;
    console.log("The Zip Code that was entered was " + ZipCode);
    
    var FirstLast = FirstName + " " + LastName;
    console.log("The Full Name entered was " + FirstLast);
    
    FirstLastlength = FirstLast.length;
    console.log("The Full Name has " + FirstLastlength + " characters");
    
    ZipNum = parseInt(ZipCode);
    console.log("The Zip Code number is " + ZipNum);

    
    
    //these create a statement that lets the user know if the information used is corecct! 
    if (FirstLastlength > 20) {
        document.getElementById("Login").innerHTML = "Full Name is to long or incorrect, please RENTER!";
    }
    else if (ZipCode.length != 5) {
        document.getElementById("Login").innerHTML = "Your Zip Code is Incorrect, please RENTER!";
    }
    //this creates an alert saying that the user has logged in sucessfully   
    else {
        alert("ACCESS GRANTED, WELCOME " + FirstLast + "!!");
    }
}    