document.querySelector("form").addEventListener("submit", formSubmit);
//<-- storing user-details in localStorage -->
var userStack = JSON.parse(localStorage.getItem("userDataBase")) || [];

//<-- Creating a function to get all form details given by user -->
function formSubmit(event) {
  event.preventDefault();
  var name = document.querySelector("#name").value;
  var email = document.querySelector("#email").value;
  var pass = document.querySelector("#pass").value;
  // console.log(name, email, pass);

  //<-- converting form input into userData(Object) -->
  var userData = {
    name: name,
    emailAddress: email,
    password: pass,
  };
  userStack.push(userData);
  // console.log(userStack);

  localStorage.setItem("userDataBase", JSON.stringify(userStack));
  alert("Sign-Up Successfully");
  window.location.href = "/signIn/login.html";
}