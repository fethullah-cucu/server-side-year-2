function validateUserData(){

    const firstName = document.getElementById("firstname").value;
    const lastName = document.getElementById("lastname").value;
    const accessType = document.getElementById("userType").value;
    const password = document.getElementById("password").value;

    if(!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/.test(password)){
        alert("Password Must Contain at least one Small and one Capital letters and one Number");
    }

    
    if(firstName && lastName && password){
        //Redirect the user to the home page
        if (accessType !== "Student"){
        window.location.href = "home.html"
        }else{
            alert("Sorry we could not find you in our database")
        }
    }else{
        alert("Please try again, make sure all required fields are filled in")
    }
}