import {
  guideSection,
  appContainer,
  aboutContainer,
} from "../components/BottomSection.js";
let guideContainer = (document.getElementById("container-guide").innerHTML =
  guideSection());
let app = (document.getElementById("app").innerHTML = appContainer());
let aboutSection = (document.getElementById("about-section").innerHTML =
  aboutContainer());
let width = screen.width;
let appSection = document.querySelector(".app-section");
let topSection = document.querySelector("#top-sections");
let subSection = document.querySelector(".sub-section");

if (width < 768) {
  appSection.innerHTML = `<a href="https://www.farfetch.com/in/shopping/men/items.aspx?af_siteid=discoverapp_page_googleplay"><img src="../icons/google play store.png"></a>
    <a href="https://www.farfetch.com/in/shopping/men/items.aspx?af_siteid=discoverapp_page_applestore"><img src="../icons/appStore.png"></a>`;
}

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
