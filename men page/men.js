var mensData = JSON.parse(localStorage.getItem("mensData"));

var cartArr =JSON.parse(localStorage.getItem("cartItem")) || [];

var wishArr =JSON.parse(localStorage.getItem("wishItem")) || [];

displayData(mensData);



function displayData(mensData){
  document.querySelector("#container").innerHTML = "";
mensData.map(function (data) {
  //main div of product -->
  var div = document.createElement("div");

  //image -->
  var image = document.createElement("img");
  image.setAttribute("src", data.image_url);

  //brand-name -->
  var brand = document.createElement("p");
  brand.textContent = data.brand;

  // name -->
  var name = document.createElement("p");
  name.textContent = data.name;

  //creating a div - contain symPrice & strikedoffprice -->
  var div2 = document.createElement("div");
  div2.setAttribute("id", "div2");
  //creating a small symbol price div which contain rupee symbol and price of product-->
  var symPrice = document.createElement("div");
  symPrice.setAttribute("id", "symPrice");

  var symbol = document.createElement("p");
  symbol.textContent = data.Symbol;

  var price = document.createElement("p");
  price.textContent = data.price;

  symPrice.append(symbol, price);

  var strikPri = document.createElement("p");
  strikPri.textContent = data.strikedoffprice;
  strikPri.style.textDecoration = "line-through";
  strikPri.style.color = "grey";


  div2.append(symPrice, strikPri);

  //   created a div for "add to cart button" && "wishlist button" -->
  var btnDiv = document.createElement("div");
  btnDiv.setAttribute("id" , "btnDiv");

  var addBtn = document.createElement("button");
  addBtn.textContent = "Add To Cart";
  addBtn.addEventListener("click" , function(){
    addToCart(data)
  })

  var wishBtn = document.createElement("button");
  wishBtn.textContent = "Wishlist";
  wishBtn.addEventListener("click" , function(){
    wishlist(data)
  })

  btnDiv.append(addBtn,wishBtn);

  //appending-->
  div.append(image, brand, name, div2,btnDiv);

  document.querySelector("#container").append(div);
});
}




//function for addtocart button-->
function addToCart(data) {
    console.log(data);
    cartArr.push(data);
    localStorage.setItem("cartItem", JSON.stringify(cartArr));
  }



  // function for wishlist button-->
  function wishlist(data) {
    console.log(data);
    wishArr.push(data);
    localStorage.setItem("wishItem", JSON.stringify(wishArr));
  }



//sorting to handle price -->

function handlePriceSort(){
  var selected = document.querySelector("#priceSort").value;
  // console.log(selected);
  if (selected == "high"){
    //descending price 
    mensData.sort(function(a,b){
      return b.price - a.price;
    })
  }
  if(selected == "low"){
    //ascending
    mensData.sort(function(a,b){
      return a.price - b.price;
    })

  }
  console.log(mensData);
  displayData(mensData);
}
  


//filter by Brand Name -->

function filterBrand(){
  var selected = document.querySelector("#brandFilter").value
  console.log(selected);

  var filteredList = mensData.filter(function(elem){
    return elem.brand ==selected;
  });

  console.log(filteredList);
  displayData(filteredList);
}


//filter by Category-->
function filterCategory(){
  var selected = document.querySelector("#CategoryFilter").value
  console.log(selected);

  var filteredList = mensData.filter(function(elem){
    return elem.category == selected;
  });

  console.log(filteredList);
  displayData(filteredList);

}
