function guideSection(){
return `<div class="box mx-3 p-3 rounded-0">
    <img src="./icons/hanger.png" alt="">
    <p class="text-uppercase my-2">How to shop</p>
    <p>Your guide to shopping and placing orders</p>
</div>
<div class="box mx-3 p-3 rounded-0">
    <img src="./icons/question-mark-icon.png" alt="">
    <p class="text-uppercase my-2">faqs</p>
    <p>Your questions answered</p>
</div>
<div class="box mx-3 p-3 rounded-0">
    <i class='far'>&#xf27a;</i>
    <p class="text-uppercase my-2">need help?</p>
    <p>Contact our global Customer Service Team</p>
</div>`;
}

function appContainer(){
    return ` <div class="">
    <h2 class="text-uppercase">Download the farefetch app</h2>
    <p>Enjoy exclusive content on our app, including personalized product edits as well as our Visual Search tool for iOS. <a href="">More about the app</a></p>
</div>
<div class="app-section d-flex">
    <div class="email-input">
    <p class="text-uppercase">Email Me</p>
    <p>Enter your email and we'll send you a link to download the free app</p>
    <form action="">
        <input class="form-control" type="email" placeholder="Email address" required>
        <input class="mx-2" type="submit" value="Send" id="btn">
    </form> 
</div>
    <div class="divider"></div>
     <div class="QR">
        <p class="text-uppercase">scan qr code</p>
        <img src="./icons/QR code.jpeg" alt="">
 </div>
</div>`
}

function aboutContainer(){
    return `<div id="top-sections">
    <div class="sub-section">
        <p class="text-uppercase">farfetch app</p>
        <p>Farfetch App for iOS and Andriod</p>
    </div>
    <div class="sub-section">
        <p class="text-uppercase">Destination/Region, currency and language</p>
        <p><img class="mr-1" src="./icons/icons8-india-38.png" alt="">India, USD $</p>
        <p class="text-uppercase">follow us</p>
        <div class="icons">
            <img src="./icons/icons8-instagram-24.png" alt="">
            <img src="./icons/icons8-facebook-24.png" alt="">
            <img src="./icons/icons8-twitter-24.png" alt="">
            <img src="./icons/icons8-snapchat-24.png" alt="">
            <img src="./icons/icons8-pinterest-p-24.png">
            <img src="./icons/icons8-youtube-24.png" alt="">
        </div>
    </div>
    <div class="sub-section">
        <p class="text-uppercase">customer service</p>
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
    <div class="sub-section">
        <p class="text-uppercase">about farfetch</p>
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
</div>
<div id="bottom-section">
    <p>'FARFETCH' and the 'FARFETCH' logo are trade marks of FARFETCH UK Limited and are registered in numerous jurisdictions around the world.</p>
    <p>© Copyright 2022 FARFETCH UK Limited. All rights reserved.</p>
</div>`;
}
export {guideSection,appContainer,aboutContainer};
