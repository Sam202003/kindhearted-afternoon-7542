//importing navbar & bottomSection 

import {guideSection,appContainer,aboutContainer} from "../components/BottomSection.js";
import {navbar,navbarjs,navbarResp} from "../components/navbar.js";

let nav=document.getElementById("nav").innerHTML=navbar();
let guideContainer=document.getElementById("container-guide").innerHTML=guideSection();
let app=document.getElementById("app").innerHTML=appContainer();
let aboutSection=document.getElementById("about-section").innerHTML=aboutContainer();

navbarjs();
navbarResp();
// Fetching products from localstorage, which has been stored from products page.
let storeArr = JSON.parse(localStorage.getItem("wishlist")) || [];


let clothing = {
  measure: `Centimeter (CM)`,
  sizeDes:
    "Some sizes are only available at alternative FARFETCH partners, with a different price",
  one: "44 - XS",
  two: "48 - M",
  three: "50 - L",
  four: "52 - XL",
  five: "54 - XXL",
};
let shoes = {
  measure: `Centimeter (CM)`,
  sizeDes:
    "Some sizes are only available at alternative FARFETCH partners, with a different price",
  one: "41 FR",
  two: "42 FR",
  three: "43 FR",
  four: "44  FR",
  five: "45 FR",
};

let accessories = {
  measure: `Centimeter (CM)`,
  sizeDes:
    "Some sizes are only available at alternative FARFETCH partners, with a different price",
  one: 58,
  two: 59,
  three: 60,
  four: 61,
  five: 62,
};
let otherSizes = {
  sizeDes:
    "Some sizes are only available at alternative FARFETCH partners, with a different price",
  one: "Only one size available",
};

navbarjs();

// Appending all products to the wishlist page.

let display = document.querySelector("#display");
showData(storeArr);
function showData(data) {
  data.forEach((element) => {
    let small = document.createElement("div");
    small.setAttribute("class", "small");
    let image1 = document.createElement("img");
    let image2 = document.createElement("img");
    let name = document.createElement("h6");
    let cate = document.createElement("p");
    let price = document.createElement("p");
    let id = document.createElement("p");
    let btn = document.createElement("button");
    let sizeBtn = document.createElement("button");
    let closeBtn = document.createElement("img");
    let size = document.createElement("div");
    let type;
    if (element.type == "clothing") {
      type = clothing;
    } else if (element.type == "shoes" || element.type == "sneakers") {
      type = shoes;
    } else if (element.type == "accessories") {
      type = accessories;
    } else {
      type = otherSizes;
    }
    btn.setAttribute("class", "btn size");
    closeBtn.setAttribute("class", "close");
    closeBtn.src = "../icons/icons8-close-26.png";
    sizeBtn.setAttribute("class", "btn sizeBtn");
    size.setAttribute("class", "card mw-75 text-left py-2 box");
    if (type !== otherSizes) {
      size.innerHTML = `
           <h6>${type.measure}</h6>
           <div class="bg-light"><ul><li>${type.sizeDes}</li></ul></div>
            <ul class="list-group">
                <li class="list-group-item item-size">${type.one}</li>
                <li class="list-group-item item-size">${type.two}</li>
                <li class="list-group-item item-size">${type.three}</li>
                <li class="list-group-item item-size">${type.four}</li>
                <li class="list-group-item item-size">${type.five}</li>
                
            </ul>    
        `;
    } else {
      size.innerHTML = `
            <div class="bg-light"><ul><li>${type.sizeDes}</li></ul></div>
            <ul class="list-group">
                <li class="list-group-item item-size">${type.one}</li>
                </ul>`;
    }
    let sz = document.getElementsByClassName("item-size");
    image1.srcset = element.img1;
    name.innerText = element.brand;
    cate.innerText = element.category;
    price.innerText = `$${element.price}`;
    id.innerText = element.id;
    btn.innerText = "Add To Bag";
    sizeBtn.innerText = "Select Size";
    display.append(small);
    small.append(closeBtn, image1, name, cate, price, sizeBtn, size, btn);
    image1.addEventListener("mouseenter", () => {
      image1.srcset = element.img2;
    });
    image1.addEventListener("mouseout", () => {
      image1.srcset = element.img1;
    });
    sizeBtn.addEventListener("click", () => {
      showSize(size, sz, sizeBtn);
    });
    closeBtn.addEventListener("click", () => {
      removeItem(element);
    });
    btn.addEventListener("click", () => {
      addItem(element);
    });
  });
}
// function for selecting size
let size = true;
function showSize(s, el, sizeBtn) {
  for (let i = 0; i < el.length; i++) {
    el[i].addEventListener("click", () => {
      sizeBtn.innerText = `${el[i].innerText}`;
    });
  }

  if (size) {
    s.style.display = "block";
    size = false;
  } else {
    s.style.display = "none";
    size = true;
  }
}

// function for removing product from wishlist
function removeItem(el) {
  storeArr = storeArr.filter((x) => {
    return el.id !== x.id;
  });
  display.innerHTML = null;
  showData(storeArr);
  localStorage.setItem("wishlist",JSON.stringify(storeArr));
  window.location.reload();
}

// function for adding product to the cart

let msg = document.getElementById("alert");
let cart = JSON.parse(localStorage.getItem("cartData")) || [];
function addItem(el) {
  cart.push(el);
  localStorage.setItem("cartData", JSON.stringify(cart));
  window.location.reload();
  // msg.innerHTML = `<div class="alert alert-info" role="alert">
  //   Product added successfully, go to <a href="#" class="alert-link">Cart</a>
  // </div>`;
  // setTimeout(() => {
  //   msg.innerHTML = null;
  // }, 3000);
}

