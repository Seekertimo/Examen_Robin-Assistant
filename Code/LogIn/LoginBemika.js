var attempt = 3; // Variable om aantal inlog pogingen te tellen.

// Login functie.
function validate(){
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
if ( username == "begeleider" && password == "begeleider123"){
alert ("Login successfully");
window.location = "account.html"; // Naar andere pagina.
return false;
}
else{
attempt --;// Voor aftellen.
alert("You have left "+attempt+" attempt;");
// Na 3 tellen log in veld disabled.
if( attempt == 0){
document.getElementById("username").disabled = true;
document.getElementById("password").disabled = true;
document.getElementById("submit").disabled = true;
return false;
}
}
}