import {guideSection,appContainer,aboutContainer} from "../../components/BottomSection.js";
import {navbar,navbarjs} from "../../components/navbar.js";

let nav=document.getElementById("nav").innerHTML=navbar();
let guideContainer=document.getElementById("container-guide").innerHTML=guideSection();
let app=document.getElementById("app").innerHTML=appContainer();
let aboutSection=document.getElementById("about-section").innerHTML=aboutContainer();

navbarjs();
// localStorage.setItem("cartData", JSON.stringify(arr));
let cartData=JSON.parse(localStorage.getItem("cartData"));
let options = [];
let innerdiv = document.getElementById("checkout");
function append(data) {
  let main  = document.getElementById("main")
  if(data.length==0){
    main.style.display="block"
    main.innerHTML = null
    let empty = document.createElement("img")
     empty.src ="https://freepikpsd.com/file/2019/10/empty-cart-png-Transparent-Images.png" 
     empty.id="empty"
     let shop = document.createElement("button")
     shop.innerText="Shop Now"
     shop.id="shop";
     shop.addEventListener("click",function(){
      window.location.href = "#"
     })
     main.append(empty,shop)
  } else {
    data.forEach(function (el, index) {

      // console.log(el);
      let big = document.createElement("div");
      big.id = "big";
  
    
  
      let img = document.createElement("img");
      img.setAttribute("id", "innerimg");
      img.src = el.img1;
  
      //   firstdiv
  
      let firstdiv = document.createElement("div");
      let h3 = document.createElement("h3");
      h3.innerText = el.brand;
      h3.style.fontSize = "20px";
  
      let p = document.createElement("p");
      p.innerText = el.category;
  
      //   seconddiv
  
      let seconddiv = document.createElement("div");
  
      let h2 = document.createElement("h4");
      h2.innerText = el.price;
      h2.style.fontSize = "20px";
  
      let para = document.createElement("para");
      para.innerText = "(Import duties included)";
  
      //  thirddiv
      let thirddiv = document.createElement("div");
      let quantity = document.createElement("h4");
      quantity.innerText = "Quantity";
  
      let select = document.createElement("select");
      select.id = "getOp";
      let option = document.createElement("option");
      option.text = "1";
      let option1 = document.createElement("option");
      option1.text = "2";
      let option2 = document.createElement("option");
      option2.text = "3";
      let option3 = document.createElement("option");
      option3.text = "4";
  
      select.add(option);
      select.add(option1);
      select.add(option2);
      select.add(option3);
  
      select.addEventListener("click", function () {
         if(select.value != 1){
          call();
         }
      });
  
      let cross = document.createElement("img");
      cross.setAttribute("id", "cross");
      cross.src = "../cross.png";
      cross.addEventListener("click", function () {
        remove(el, index);
      });
  
      firstdiv.append(h3, p);
      seconddiv.append(h2, para);
      thirddiv.append(quantity, select);
      big.append(img, firstdiv, seconddiv, thirddiv, cross);
      innerdiv.append(big);
    })
  }
 
 
}



append(cartData);
function call() {
  let sum = 0;
  let s = document.querySelectorAll("#getOp");
  for (let i = 0; i < s.length; i++) {
    sum += (s[i].value*cartData[i].price);
   
  }
  let semi = document.getElementById("semi");
  let delhi = document.getElementById("delhi");
  let x = Math.floor(Math.random(400)*60)
  delhi.innerText = x;
  let final = document.getElementById("finalP");
  
  semi.innerText = sum;
  let finalAmt = sum+x;
  let last = [];
  last.push(finalAmt)
  last.push(x);
  final.innerText = "USD $ "+finalAmt;
  localStorage.setItem("total",JSON.stringify(last))
localStorage.setItem("amtPayable",finalAmt);
}
// window.location.reload()

function remove(el, index) {
  let arr = JSON.parse(localStorage.getItem("cartData"));
  let newData = arr.filter(function (el, i) {
    return i !== index;
  });
  //Again set the new data.
  localStorage.setItem("cartData", JSON.stringify(newData));

  innerdiv.innerHTML = null;
  append(newData);
  call();

  window.location.reload();
}
call();

