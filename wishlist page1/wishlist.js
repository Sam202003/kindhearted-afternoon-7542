var wishArr = JSON.parse(localStorage.getItem("wishItem"));

console.log(wishArr);

wishArr.map(function (data) {
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


  // removing button for wishlist page --->
  var remove = document.createElement("button");
  remove.setAttribute("id" ,"removeBtn" )
  remove.textContent = "Remove";
  remove.addEventListener("click", function () {
    cremove(data);
  });
  function cremove(product) {
    var iid = product.price;
    // console.log(iid);
    var rl = JSON.parse(localStorage.getItem("wishItem"));
    console.log(rl);
    var arr = [];
    for (key in rl) {
      if (iid != rl[key].price) {
        arr.push(rl[key]);
      }
      // console.log(rl.price)
    }
    console.log(arr);
    localStorage.setItem("wishItem", JSON.stringify(arr));
    div.remove();
    function Refresh() {
      window.parent.location = window.parent.location.href;
    }
    Refresh();
  }



  
  div2.append(symPrice, strikPri);

  //appending-->
  div.append(image, brand, name, div2,remove);

  document.querySelector("#container").append(div);
});