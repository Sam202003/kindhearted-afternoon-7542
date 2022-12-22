function header(){

return `
<div id="navbar" >
navabar
</div>
<div id="navMenu">
<div id="navOptions">
        <a href="../navOptions/sale.html" id="sale">Sale</a>
        <a href="../navOptions/newIn.html">New In</a>
        <a href="../navOptions/shopBy.html">Shop By</a>
        <a href="../navOptions/brands.html">Brands</a>
        <a href="../navOptions/clothing.html">Clothing</a>
        <a href="../navOptions/shoes.html">Shoes</a>
        <a href="../navOptions/jewelry.html">Jewelry</a>
        <a href="../navOptions/bags.html">Bags</a>
        <a href="../navOptions/accessories.html">Accessories</a>
        <a href="../navOptions/preOwned.html">Pre-Owned</a>
    </div>
</div>`

}

function fonts(){
    return `<link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;300&display=swap" rel="stylesheet">
    
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Archivo:wght@600&display=swap" rel="stylesheet">
    `
}

export { header , fonts }