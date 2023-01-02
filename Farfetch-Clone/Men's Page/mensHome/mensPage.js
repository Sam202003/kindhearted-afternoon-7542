import { header , fonts } from '../components/header.js'
import { append } from '../components/append.js';
import {guideSection,appContainer,aboutContainer} from "../../components/BottomSection.js";
import {navbar,navbarjs} from "../../../components/navbar.js";

let nav=document.getElementById("nav").innerHTML=navbar();
let guideContainer=document.getElementById("container-guide").innerHTML=guideSection();
let app=document.getElementById("app").innerHTML=appContainer();
let aboutSection=document.getElementById("about-section").innerHTML=aboutContainer();

let head = document.getElementById('header')
head.innerHTML = header();
let shop = document.querySelectorAll('#shopButton')
shop.forEach((el)=>{
    el.addEventListener('click',function(){
        window.location.href = '../navOptions/clothing.html'
    })
})

let font = document.getElementById('fonts')
font.innerHTML = fonts();

let products = JSON.parse(localStorage.getItem('products'))

products =  products.filter((el)=>{
    if(el.type == 'clothing'){
        return el
    }
})



let data = products.splice(2,4)
console.log(data)

let container = document.getElementById('container')
append(data,container)
console.log(products)

products = JSON.parse(localStorage.getItem('products'))

data = products.splice(7,4)
let highlights = document.getElementById('highlights')
append(data,highlights)

products = JSON.parse(localStorage.getItem('products'))

data = products.splice(22,4)
let hoverProducts = document.getElementById('hoverProducts')
append(data,hoverProducts)
