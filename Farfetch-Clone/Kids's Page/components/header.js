function header(){

return `
<div id="navbar" >
navabar
</div>
<div id="navMenu">
<div id="navOptions">
        <a href="../kidsOptions/sale.html" id="sale">Sale</a>
        <a href="../kidsOptions/newIn.html">New In</a>
        <a href="../kidsOptions/brands.html">Brands</a>
        <a href="../kidsOptions/baby.html">Baby (0-36mths)</a>
        <a href="../kidsOptions/kids.html">Kids (2-12 yrs)</a>
        <a href="../kidsOptions/teen.html">Teen(13-16 yrs)</a>
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