function sortJS(products,append){
    let sort  = document.getElementById('sort')
    sort.addEventListener('change',function(){
        console.log(sort.value)
        if(sort.value == 'LTH'){
            products.sort((a,b)=>a.price-b.price)
            console.log(products)
            append(products,container)
        }
        else if(sort.value == 'HTL'){
            products.sort((a,b)=>b.price-a.price)
            append(products,container)
        }
        if(sort.value == 'OP'){
            products.sort((a,b)=>{if(a.brand>b.brand){ return 1} else{return -1}})
            console.log(products)
            append(products,container)
        }
        if(sort.value == 'NF'){
            products.sort((a,b)=>{if(a.brand<b.brand){ return 1} else{return -1}})
            append(products,container)
            console.log(products)
        }
    })
}
function sortHTML(){
    return `
    <option>Sort By </option>
<option value="OP">Our Pics</option>
<option value="NF">Newest first</option>
<option value="HTL">Price: high to low</option>
<option value="LTH">Price: low to high</option>
<option value="DHTL">Discount: high to low</option>`
}

function filterHTML(){
    return ` <option> Filter : By catagories</option>
    <option value="sale">Sale</option>
    <option value="newIn">New In</option>
    <option value="brands">Brands</option>
    <option value="baby">Baby</option>
    <option value="kids">Kids</option>
    <option value="teen">Teen</option>`
    }


export { sortJS , sortHTML , filterHTML}

