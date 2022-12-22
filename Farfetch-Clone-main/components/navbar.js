function navbar(){
    return `    <div id="navbar" class="d-flex">
    <div id="category">
         <a href="../../../Women's Page/womenHome/womensPage.html"><button class="btn">Women</button></a>
         <a href="../../../Men's Page/mensHome/mensPage.html"><button class="btn">Men</button></a>
         <a href="../../../Kids's Page/kidsHome/kidsPage.html"><button class="btn">Kids</button></a>
         
    </div>
    <div id="title">
     <a href="../../index.html"><img src="./icons/logo.jpg" alt=""></a>
    </div>
    <div id="navigation">
         <div class="icons"><img src="./icons/icons8-india-24-white-bg.png" alt=""></div>
         <div class="icons"><a href="../Login SignUp/in.html/signin.html"><img src="./icons/icons8-user-24.png" alt=""></a></div>
         <div class="icons"><a href="../../wishlist.html"><img src="./icons/icons8-favorite-24.png" alt=""></a>
         <span id="countFav"></span></div>
         <div class="icons"><a href="../../Cart Page/cart/cart.html"><img src="./icons/icons8-shopping-bag-24.png" alt=""></a>
         <span id="countCart"></span></div>
    </div>
 </div>
 <div id="search-bar">
     <input type="text" id="search" placeholder="Search" class="form-control"><span><img src="./icons/icons8-search-24.png" alt=""></span>
 </div>`;
}

function navbarjs(){

    let FavList=JSON.parse(localStorage.getItem("wishlist"));
    let CartList=JSON.parse(localStorage.getItem("cartData"));
    let favCount=document.getElementById("countFav");
    let cartCount=document.getElementById("countCart");
    if(FavList!==null && FavList!==undefined && FavList.length!==0){
        favCount.innerText=FavList.length;
    }
    if(CartList!==null && CartList!==undefined && CartList.length!==0){
        cartCount.innerText=CartList.length;
    }
    let width = screen.width;
    let topSection=document.querySelector("#top-sections");
    if (width < 1000) {
        topSection.style.display = "block";
        topSection.innerHTML = `<div class="sub-section">
              <p class="text-uppercase" data-bs-toggle="collapse" href="#iosAndriod" aria-expanded="false">farfetch app</p>
              <p id="iosAndriod" class="collapse" id="iosAndriod">Farfetch App for iOS and Andriod</p>
          </div>
          <div class="sub-section">
              <p class="text-uppercase" data-bs-toggle="collapse" href="#social-icons" aria-expanded="false">follow us</p>
              <div class="collapse" id="social-icons">
                  <img src="./icons/icons8-instagram-24.png" alt="Instagram">
                  <img src="./icons/icons8-facebook-24.png" alt="facebook">
                  <img src="./icons/icons8-twitter-24.png" alt="twitter">
                  <img src="./icons/icons8-snapchat-24.png" alt="snapchat">
                  <img src="./icons/icons8-pinterest-p-24.png">
                  <img src="./icons/icons8-youtube-24.png" alt="pinterest">
              </div>
          </div>
          <div class="sub-section">
              <p class="text-uppercase" data-bs-toggle="collapse" href="#contact-us" aria-expanded="false">customer service</p>
              <div id="contact-us" class="collapse">
              <p>Contact us</p>
              <p>Order & delivery</p>
              <p>Payment & pricing</p>
              <p>Returns & refunds</p>
              <p>FAQs</p>
              <p>Terms & conditions</p>
              <p>Promotion terms & conditions</p>
              <p>Privacy policy</p>
              <p>Accessibility</p>
              </div>
          </div>
          <div class="sub-section">
              <p class="text-uppercase" data-bs-toggle="collapse" href="#about-us" aria-expanded="false">about farfetch</p>
              <div id="about-us" class="collapse">
              <p>About us</p>
              <p>Investors</p>
              <p>Boutique Partners</p>
              <p>Affiliate Programme</p>
              <p>Student discount UNiDAYS</p>
              <p>Youth discount</p>
              <p>Careers</p>
              <p>Customer Promise</p>
              <p>FARFETCH App</p>
              <p>Sitemap</p>
              <p>Positively FARFETCH</p>
              </div>
              <p class="text-uppercase">tell us what do you think</p>
              <p><img class="mr-1" src="./icons/icons8-india-38.png" alt="">India, USD $</p>
          </div>`;
      }     
}

function navbarResp(){
    let width=screen.width;
    if(width<768){
        nav.innerHTML=`<nav class="navbar bg-white fixed-top">
        <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
         <span class="navbar-toggler-icon"></span>
         </button>
         <div id="title" class="mx-50"><a class="navbar-brand" href="./homepage.html"><img style="width: 60%;margin-left: 25%;" src="./icons/logo.jpg" alt=""></a></div>
          <div id="title"><a class="navbar-brand" href="../wishlist.html"><img src="./icons/icons8-favorite-24.png" alt=""></a></div>
          <div id="icons"><a class="navbar-brand" href="../Cart Page/cart/cart.html"><img src="./icons/icons8-shopping-bag-24.png" alt=""></a></div>
          <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div class="offcanvas-header">
              <a class="offcanvas-title" id="offcanvasNavbarLabel" href="../homepage.html"><img src="./icons/favicon dark.ico" alt=""></a>
              <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
                <div id="departments" class="d-block">
                    <div id="women" class="my-2" style="height:60px; overflow:hidden;"><a href="../Women's Page/womensPage.html">
                        <img style="width: 100%;" src="https://cdn-static.farfetch-contents.com/cms-cm10/caas/v1/media/1358584/data/3e1fa8601c3b054126db727190907134/16x9_three-columns/480/data" alt="">
                        <h2 style="font-size: 15px;" class="start-0">SHOP WOMEN</h2>
                    </a></div>
                    <div id="men" class="my-2" style="height:60px; overflow:hidden"><a href="../Men's Page/mensPage.html">
                        <img style="width: 100%;" src="https://cdn-static.farfetch-contents.com/cms-cm10/caas/v1/media/1358582/data/79d650ec078a16ebb376d1b3e0c982d3/16x9_three-columns/480/data" alt="">
                        <h2 style="font-size: 15px;" class="start-0">SHOP MEN</h2>
                    </a></div>
                    <div id="kids" class="my-2" style="height:60px; overflow:hidden"><a href="../Kids's Page/kidsPage.html">
                        <img style="width: 100%;" src="https://cdn-static.farfetch-contents.com/cms-cm10/caas/v1/media/3485568/data/f7dda851843a12916bada7c705c0e823/16x9_three-columns/480/data" alt="">
                        <h2 style="font-size: 15px;" class="start-0">SHOP KIDS</h2>
                    </a></div>
                </div>
            </div>
          </div>
        </div>
      </nav>` 
     };
}
export {navbar,navbarjs,navbarResp};