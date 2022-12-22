
    import { header,fonts } from '../components/header.js';
    import { append } from '../components/append.js';
    import {guideSection,appContainer,aboutContainer} from "../../components/BottomSection.js";
    import {navbar,navbarjs} from "../../../components/navbar.js";
    
    let nav=document.getElementById("nav").innerHTML=navbar();
    let guideContainer=document.getElementById("container-guide").innerHTML=guideSection();
    let app=document.getElementById("app").innerHTML=appContainer();
    let aboutSection=document.getElementById("about-section").innerHTML=aboutContainer();
navbarjs();
let head = document.getElementById('header')
head.innerHTML = header();
let font = document.getElementById('fonts')
font.innerHTML = fonts();

let data  = JSON.parse(localStorage.getItem('item'))

let container = document.getElementById('container')

let img1 = document.getElementById('img1')
img1.src = data.img1

let img2 = document.getElementById('img2')
img2.src = data.img2

let detail = document.querySelector('#detail>div')

let brand = document.createElement('h2')
brand.innerText = data.brand;

let category = document.createElement('p')
category.innerText = data.category;

let priceDiv = document.createElement('div')


let prices = JSON.parse(localStorage.getItem('prices'))

let price = document.createElement('h3')
price.innerText = prices.price;
price.id = 'price'

let discount = document.createElement('span')
 discount.innerText = prices.discount;
    discount.id = 'discount'
    
 let finalPrice = document.createElement('span')
 finalPrice.innerText = prices.finalPrice
 finalPrice.id = 'finalPrice'
        
let pr = document.createElement('p')
pr.innerText = "(Import duties included)"

priceDiv.append(price,discount,finalPrice,pr)
priceDiv.id = 'priceDiv'

detail.append(brand,category,priceDiv)

let img = document.querySelector('#tDetails>img')
img.src = data.img2;

let title = document.getElementById('titles')
title.innerText = data.brand;

let detailCat = document.getElementById('detailCat')
detailCat.innerText = data.category;

let desc = document.getElementById('desc')
desc.innerText = data.desc;

let products = JSON.parse(localStorage.getItem('womenProducts'))

let product = products.filter(el=>{
    if(data.type == el.type){
        return el;
    }
})
let recommended = product.splice(0,8)

append(recommended,container)

let middleFooter = document.getElementById('middleFooter')
middleFooter.addEventListener('click',function(){
    window.location.href = "https://www.farfetch.com/in/shopping/women/briston-watches/items.aspx?msc=briston_w_may22&mktref=display_w"

})

//  WishList Function :-

let wishData = JSON.parse(localStorage.getItem('wishlist')) ||  [];

let favouriteButton = document.getElementById('favouriteButton')
favouriteButton.addEventListener('click',function(){
    if(heart.src == 'https://cdn1.iconfinder.com/data/icons/modern-universal/32/icon-19-128.png'){
        heart.src = "https://cdn0.iconfinder.com/data/icons/essentials-solid-glyphs-vol-1/100/Heart-Love-Like-128.png"
        
        let count =  0;
        for(let i = 0;i<wishData.length;i++){
            if(data.id == wishData[i].id){
                count++
            }
        }
       if(count == 0){
        wishData.push(data)
        localStorage.setItem('wishlist',JSON.stringify(wishData))
       }

    }
    else{
        heart.src = 'https://cdn1.iconfinder.com/data/icons/modern-universal/32/icon-19-128.png'
       let newWish =  wishData.filter(ele=>{
            if(ele.id != data.id){
                return ele
            }
        })
        localStorage.setItem('wishlist',JSON.stringify(newWish))
        window.location.reload();
    }

    window.location.href("../../wishlist/wishlist.html")

})



//  Add to bag function :-

let cartButton = document.getElementById('cartButton')
cartButton.addEventListener('click',function(){
 console.log(data)

 let cartArr = JSON.parse(localStorage.getItem('cartData')) || []
console.log(cartArr)
 cartArr.push(data)
    localStorage.setItem('cartData', JSON.stringify(cartArr))
    window.location.href="../../Cart Page/cart/cart.html"
})
 

// brand: "VEJA"
// category: "Venturi suede sneakers"
// desc: "These Venturi sneakers from VEJA have been crafted from environmentally friendly and sustainable materials. They showcase a panelled design reminiscent of sports footwear from the '70s and sit atop a sturdy sole made of wild rubber from the Amazonian forest."
// id: 42
// img1: "https://cdn-images.farfetch-contents.com/16/94/49/31/16944931_34978752_1000.jpg"
// img2: "https://cdn-images.farfetch-contents.com/16/94/49/31/16944931_34980323_1000.jpg"
// price: 267
// type: "shoes"

