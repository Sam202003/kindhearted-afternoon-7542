var mensData = JSON.parse(localStorage.getItem("mensData"));

var cartArr =JSON.parse(localStorage.getItem("cartItem")) || [];

var wishArr =JSON.parse(localStorage.getItem("wishItem")) || [];

displayData(mensData);
var mensData = [
  {
    image_url:
      "https://cdn-images.farfetch-contents.com/17/76/54/10/17765410_37489437_600.jpg",
    name: "MEN'S PALM ANGLES TRACK JACKET",
    brand: "PALM ANGLE",
    category: "JACKET",
    Symbol: "₹",
    price: 745,
    strikedoffprice: 2599,
  },
  {
    image_url:
      "https://cdn-images.farfetch-contents.com/17/18/51/67/17185167_37027698_600.jpg",
    name: "MEN'S HERON PRESTON T-SHIRT ",
    brand: "HERON PRESTON",
    category: "T-SHIRT",
    price: 445,
    strikedoffprice: 999,
    Symbol: "₹",
  },
  {
    image_url:
      "https://cdn-images.farfetch-contents.com/17/45/47/28/17454728_37431510_600.jpg",
    name: " Wales Bonner Power geometric-print trousers",
    brand: "WALES BONNER",
    category: "PANT",
    price: 801,
    strikedoffprice: 1099,
    Symbol: "₹",
  },
  {
    image_url:
      "https://cdn-images.farfetch-contents.com/17/35/10/06/17351006_37528125_600.jpg",
    name: "Alexander McQueen intarsia-pattern cardigan",
    brand: "WALES BONNER",
    category: "SHIRT",
    price: 399,
    strikedoffprice: 799,
    Symbol: "₹",
  },
  {
    image_url:
      "https://cdn-images.farfetch-contents.com/17/45/63/05/17456305_36457255_600.jpg",
    name: "JW Anderson x Pol Anglada appliqué-logo shirt ",
    brand: "PALM ANGLE",
    price: 1620,
    strikedoffprice: 3599,
    category: "SHIRT",
    Symbol: "₹",
  },
  {
    image_url:
      "https://cdn-images.farfetch-contents.com/17/57/76/03/17577603_37061209_600.jpg",
    name: " Marni herringbone-effect jacket ",
    brand: "WALES BONNER",
    price: 1440,
    strikedoffprice: 3199,
    category: "JACKET",
    Symbol: "₹",
  },
  {
    image_url:
      "https://cdn-images.farfetch-contents.com/17/53/23/75/17532375_37307240_600.jpg ",
    name: " MEN'S Gervon check-print overshirt ",
    brand: "WALES BONNER",
    price: 1999,
    strikedoffprice: 3199,
    category: "SHIRT",
    Symbol: "₹",
  },
  {
    image_url:
      "https://content.shop4reebok.com/static/Product-GQ8758/reebok_GQ8758_1.jpg.plp ",
    name: "MEN'S REEBOK TRAINING  POLO T-SHIRTS TEE  ",
    brand: "REEBOK",
    price: 769,
    strikedoffprice: 1099,
    category: "T-SHIRT",
    Symbol: "₹",
  },
  {
    image_url:
      "https://cdn-images.farfetch-contents.com/17/81/47/01/17814701_f6398c5f-26a6-4403-aa0b-814f882e3bfa_600.jpg",
    name: "Medusa plaque slim-fit jeans ",
    brand: "PALM ANGLE",
    price: 1299,
    strikedoffprice: 1440,
    category: "PANT",
    Symbol: "₹",
  },
  {
    image_url:
      "https://cdn-images.farfetch-contents.com/16/96/82/31/16968231_33877299_600.jpg ",
    name: "Marni cropped tailored trousers",
    brand: "HERON PRESTON",
    price: 699,
    strikedoffprice: 999,
    category: "PANT",
    Symbol: "₹",
  },
  {
    image_url:
      "https://cdn-images.farfetch-contents.com/16/04/66/26/16046626_30351839_600.jpg ",
    name: "Off-White Arrows intarsia-knit jumper",
    brand: "HERON PRESTON",
    category: "PANT",
    price: 1620,
    strikedoffprice: 3599,
    Symbol: "₹",
  },
  {
    image_url:
      "https://cdn-images.farfetch-contents.com/17/69/35/47/17693547_37152483_600.jpg ",
    name: " Balenciaga Phantom low-top sneakers",
    brand: "BALENCIAGA",
    category: "SHOES",
    price: 1620,
    strikedoffprice: 3599,
    Symbol: "₹",
  },
  {
    image_url:
      " https://cdn-images.farfetch-contents.com/16/63/80/29/16638029_32559388_600.jpg",
    name: "Brunello Cucinelli lace-up suede boots ",
    brand: "BALENCIAGA",
    category: "SHOES",
    price: 599,
    strikedoffprice: 999,
    Symbol: "₹",
  },
  {
    image_url:
      "https://content.shop4reebok.com/static/Product-FW0318/reebok_FW0318_1.jpg.plp ",
    name: " MEN'S REEBOK RUNNING RUNNER SHOES",
    brand: "REEBOK",
    category: "SHOES",
    price: 1575,
    strikedoffprice: 3499,
    Symbol: "₹",
  },
  {
    image_url:
      "https://cdn-images.farfetch-contents.com/16/04/71/52/16047152_31633872_600.jpg ",
    name: "Palm Angels palm tree high-top sneakers ",
    brand: "PALM ANGLE",
    category: "SHOES",
    price: 9999,
    strikedoffprice: 12000,
    Symbol: "₹",
  },
  {
    image_url:
      "https://cdn-images.farfetch-contents.com/17/38/87/94/17388794_36294381_600.jpg",
    name: " Off-White Arrows leather-trim backpack",
    brand: "OFF WHITE",
    category: "BAG",
    price: 779,
    strikedoffprice: 1299,
    Symbol: "₹",
  },
  {
    image_url:
      "https://content.shop4reebok.com/static/Product-GK9175/reebok_GK9175_1.jpg.plp",
    name: "MEN'S REEBOK TRAINING FOUNDATION  PANTS  ",
    brand: "REEBOK",
    category: "PANT",
    price: 1019,
    strikedoffprice: 1699,
    Symbol: "₹",
  },
  {
    image_url:
      "https://content.shop4reebok.com/static/Product-GK9176/reebok_GK9176_1.jpg.plp ",
    name: "MEN'S REEBOK TRAINING FOUNDATION PANTS  ",
    brand: "REEBOK",
    category: "PANT",
    price: 1019,
    strikedoffprice: 1699,
    Symbol: "₹",
  },
  {
    image_url:
      "https://cdn-images.farfetch-contents.com/16/86/53/38/16865338_36146527_600.jpg",
    name: "Palm Angels slogan-print tote bag ",
    brand: "PALM ANGLE",
    category: "BAG",
    price: 1575,
    strikedoffprice: 3499,
    Symbol: "₹",
  },
  {
    image_url:
      " https://content.shop4reebok.com/static/Product-G57776/reebok_G57776_1.jpg.plp ",
    name: "  MEN'S REEBOK RUNNING ZTAUR RUN SHOES ",
    brand: "REEBOK",
    category: "SHOES",
    price: 3449,
    strikedoffprice: 4999,
    Symbol: "₹",
  },
  {
    image_url:
      " https://cdn-images.farfetch-contents.com/16/32/31/49/16323149_37142236_600.jpg ",
    name: "MAD Paris MAD EMERALDS DAYTONA",
    brand: "MAD PARIS",
    category: "WATCH",
    price: 749,
    strikedoffprice: 1499,
    Symbol: "₹",
  },
  {
    image_url:
      "https://cdn-images.farfetch-contents.com/17/72/28/77/17722877_37116982_600.jpg",
    name: "MAD Paris Nobile quartz 43mm",
    brand: "MAD PARIS",
    category: "WATCH",
    price: 1149,
    strikedoffprice: 2299,
    Symbol: "₹",
  },
  {
    image_url:
      " https://content.shop4reebok.com/static/Product-EX4287/reebok_EX4287_1.jpg.plp  ",
    name: " MEN'S REEBOK RUNNING GENESIS RUNNER SHOE  ",
    brand: "REEBOK",
    category: "SHOES",
    price: 1620,
    strikedoffprice: 3599,
    Symbol: "₹",
  },
  {
    image_url:
      "https://content.shop4reebok.com/static/Product-G57705/reebok_G57705_1.jpg.plp",
    name: "UNISEX REEBOK CLASSICS  BASKETBALL SHOES",
    brand: "REEBOK",
    category: "SHOES",
    price: 3919,
    strikedoffprice: 5599,
    Symbol: "₹",
  },
  {
    image_url:
      " https://cdn-images.farfetch-contents.com/17/29/77/93/17297793_36378668_600.jpg",
    name: " Gucci Eyewear aviator-frame sunglasses ",
    brand: "GUCCI",
    category: "SUNGLASSES",
    price: 2779,
    strikedoffprice: 4299,
    Symbol: "₹",
  },
  {
    image_url:
      "https://cdn-images.farfetch-contents.com/17/29/93/01/17299301_36471919_600.jpg",
    name: "Gucci Eyewear aviator-frame sunglasses",
    brand: "GUCCI",
    category: "SUNGLASSES",
    price: 3490,
    strikedoffprice: 4999,
    Symbol: "₹",
  },
  {
    image_url:
      " https://cdn-images.farfetch-contents.com/17/75/27/86/17752786_37287322_600.jpg  ",
    name: "Gucci Strawberry Gucci print T-shirt ",
    brand: "GUCCI",
    category: "T-SHIRT",
    price: 3499,
    strikedoffprice: 4999,
    Symbol: "₹",
  },
  {
    image_url:
      "https://cdn-images.farfetch-contents.com/17/60/50/63/17605063_36598566_600.jpg ",
    name: "Gucci bleach-effect tapered-leg denim jeans",
    brand: "GUCCI",
    category: "PANT",
    price: 1399,
    strikedoffprice: 2799,
    Symbol: "₹",
  },
  {
    image_url:
      "https://cdn-images.farfetch-contents.com/15/40/06/66/15400666_27114541_600.jpg",
    name: "Gucci Ace GG Supreme sneaker",
    brand: "GUCCI",
    category: "SHOES",
    price: 1575,
    strikedoffprice: 3499,
    Symbol: "₹",
  },
  {
    image_url:
      "https://content.shop4reebok.com/static/Product-HC3528/reebok_HC3528_1.jpg.plp",
    name: "MEN'S REEBOK TRAINING BASIC POLO TEE",
    brand: "REEBOK",
    category: "T-SHIRT",
    price: 779,
    strikedoffprice: 1299,
    Symbol: "₹",
  },
  {
    image_url:
      "https://content.shop4reebok.com/static/Product-FW0344/reebok_FW0344_1.jpg.plp",
    name: "Gucci logo print hoodie",
    brand: "GUCCI",
    category: "SHOES",
    price: 1620,
    strikedoffprice: 3599,
    Symbol: "₹",
  },
];

localStorage.setItem("mensData", JSON.stringify(mensData));




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
