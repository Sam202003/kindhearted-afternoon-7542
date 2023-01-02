function append(products,container){
   
    let wishData = JSON.parse(localStorage.getItem('wishlist')) ||  [];
    console.log(wishData)
    container.innerHTML = null;
    products.forEach(el => {
        let card = document.createElement('div')
        card.id = 'card'
        

        
        // Wishlist Button :-
        let heart = document.createElement('img')
        heart.src = 'https://cdn1.iconfinder.com/data/icons/modern-universal/32/icon-19-128.png'
        heart.addEventListener('click',function(){
            if(heart.src == 'https://cdn1.iconfinder.com/data/icons/modern-universal/32/icon-19-128.png'){
                heart.src = "https://cdn0.iconfinder.com/data/icons/essentials-solid-glyphs-vol-1/100/Heart-Love-Like-128.png"
                
                let count =  0;
                for(let i = 0;i<wishData.length;i++){
                    if(el.id == wishData[i].id){
                        count++
                    }
                }
               if(count == 0){
                wishData.push(el)
                localStorage.setItem('wishlist',JSON.stringify(wishData))
               }                         
            }
            else{
                heart.src = 'https://cdn1.iconfinder.com/data/icons/modern-universal/32/icon-19-128.png'
               let newWish =  wishData.filter(ele=>{
                    if(ele.id != el.id){
                        return ele
                    }
                })
                localStorage.setItem('wishlist',JSON.stringify(newWish))
            }

        })
        heart.id = 'addToWishlist'


        let img = document.createElement('img')
        img.src = el.img1;
        img.id = 'img'
        img.setAttribute('onmouseout',`this.src="${el.img1}"`)
        img.setAttribute('onmouseover',`this.src="${el.img2}"`) ;

        img.addEventListener('click',()=>{
            console.log(el)
            localStorage.setItem('item',JSON.stringify(el))
            window.location.href = '../productPage/productPage.html'
        })

        
        let brand = document.createElement('h3')
        brand.innerText = el.brand
    
        let category = document.createElement('p')
        category.innerText = el.category;
    
        let priceDiv = document.createElement('div')
        let price = document.createElement('span')
        price.innerText = `$${el.price}`
        price.id = 'price'
    
        let random = Math.floor(Math.random() * 100)
        if(random>50){
            random = random-50;
        }
        
        let discount = document.createElement('span')
        discount.innerText = `${random}%`
        discount.id = 'discount'
    
        let finalPrice = document.createElement('span')
        finalPrice.innerText = `$${Math.floor(el.price - ((random*el.price)/100))}`
        finalPrice.id = 'finalPrice'
        
        priceDiv.append(price,discount,finalPrice)
        priceDiv.id = 'priceDiv'
        localStorage.setItem('prices',JSON.stringify({price:price.innerText,discount:discount.innerText,finalPrice:finalPrice.innerText}))
    
        card.append(heart,img,brand,category,priceDiv)
        container.append(card)
       
    });   
}

export {append}