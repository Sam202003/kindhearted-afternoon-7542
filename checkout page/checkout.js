document.querySelector("#form").addEventListener("submit", payDebit);

function payDebit(event) {
  event.preventDefault();
  console.log("click");

  let cardHolderName = document.querySelector("#cardH").value;
  let cardNumber = document.querySelector("#cardNum").value;
  let expDate = document.querySelector("#expDate").value;
  let cvv = document.querySelector("#cvv").value;


  if (cvv == 123 || 000 ) {
    alert("Congratulation! your payment is succesful");
    window.location.href = "/thankyou/thankyou.html";
  }
  else{
    alert("enter valid data");
  }


}