

// ================= LOCAL STORAGE =================

function saveWishlist() {
    localStorage.setItem("wishlist", wishlistItems.innerHTML);
}

function loadWishlist() {
    const data = localStorage.getItem("wishlist");

    if (data) {
        wishlistItems.innerHTML = data;
    }
}


// ================= WISHLIST =================


const wishlistCount = document.getElementById("wishlist-count");
const wishlistSidebar = document.querySelector(".wishlist-sidebar");
const wishlistItems = document.querySelector(".wishlist-items");
const wishlistNav = document.querySelector(".wishlist-icon");
const closeWishlist = document.getElementById("close-wishlist");

let wishCount = 0;

// ================= WISHLIST =================

const wishlist = document.querySelectorAll(".wishlist");

wishlist.forEach(item => {

    item.addEventListener("click", () => {

        const icon = item.querySelector("i");
        const product = item.closest(".product-card");

        const name = product.dataset.name;
        const price = product.dataset.price;
        const image = product.dataset.image;

        if(icon.classList.contains("fa-regular")){

            icon.classList.remove("fa-regular");
            icon.classList.add("fa-solid");

            wishCount++;
            wishlistCount.innerText = wishCount;

            const box = document.createElement("div");

            box.classList.add("wishlist-item");

            box.innerHTML = `
                <img src="${image}">

                <div class="wishlist-info">

                    <h4>${name}</h4>

                    <p>₹${price}</p>

                    <button class="remove-wish">Remove</button>

                </div>
            `;

            wishlistItems.appendChild(box);
            saveWishlist();
            box.querySelector(".remove-wish").addEventListener("click",()=>{

                box.remove();
                saveWishlist();
                wishCount--;

                if(wishCount<0){
                    wishCount=0;
                }

                wishlistCount.innerText=wishCount;

                icon.classList.remove("fa-solid");
                icon.classList.add("fa-regular");

            });

        }else{

            icon.classList.remove("fa-solid");
            icon.classList.add("fa-regular");

            wishCount--;

            if(wishCount<0){
                wishCount=0;
            }

            wishlistCount.innerText=wishCount;

        }

    });

});


// ================= OPEN / CLOSE WISHLIST =================

wishlistNav.addEventListener("click",()=>{

    wishlistSidebar.classList.add("active");

});

closeWishlist.addEventListener("click",()=>{

    wishlistSidebar.classList.remove("active");

});







// ================= CART =================


const toast = document.getElementById("toast");
const cartButtons = document.querySelectorAll(".add-cart");
const cartCount = document.getElementById("cart-count");

const cartIcon = document.querySelector(".cart-icon");
const cartSidebar = document.querySelector(".cart-sidebar");
const closeCart = document.getElementById("close-cart");

const cartItems = document.querySelector(".cart-items");
const totalPrice = document.getElementById("total-price");

let count = 0;
let total = 0;



// ================= OPEN CART =================

cartIcon.addEventListener("click", () => {
    cartSidebar.classList.add("active");
});


// ================= TOAST NOTIFICATION =================

// const toast = document.getElementById("toast");

function showToast(message = "✅ Product Added Successfully!") {

    toast.innerHTML = `
        <i class="fa-solid fa-circle-check"></i>
        <span>${message}</span>
    `;

    toast.classList.add("show");

    setTimeout(() => {
        toast.classList.remove("show");
    }, 2000);

}


// ================= CLOSE CART =================

closeCart.addEventListener("click", () => {
    cartSidebar.classList.remove("active");
});



// ================= ADD TO CART =================

cartButtons.forEach(button => {

    button.addEventListener("click", () => {

        const product = button.closest(".product-card");

        const name = product.dataset.name;
        const price = Number(product.dataset.price);
        const image = product.dataset.image;

        count++;
        cartCount.innerText = count;

        total += price;
        totalPrice.innerText = total;

        const cartBox = document.createElement("div");

        cartBox.classList.add("cart-item");

        cartBox.innerHTML = `
            <img src="${image}" alt="${name}">

            <div class="cart-info">

                <h4>${name}</h4>

                <p class="price">₹${price}</p>

                <div class="quantity">
                    <button class="minus">-</button>
                    <span class="qty">1</span>
                    <button class="plus">+</button>
                </div>

                <button class="remove">Remove</button>

            </div>
        `;

        cartItems.appendChild(cartBox);
        showToast() ;

        let quantity = 1;

        const plus = cartBox.querySelector(".plus");
        const minus = cartBox.querySelector(".minus");
        const qty = cartBox.querySelector(".qty");
        const remove = cartBox.querySelector(".remove");

        plus.addEventListener("click", () => {

            quantity++;
            qty.innerText = quantity;

            total += price;
            totalPrice.innerText = total;

        });

        minus.addEventListener("click", () => {

            if (quantity > 1) {

                quantity--;
                qty.innerText = quantity;

                total -= price;
                totalPrice.innerText = total;

            }

        });

        remove.addEventListener("click", () => {

            total -= price * quantity;
            totalPrice.innerText = total;

            count--;
            if (count < 0) count = 0;

            cartCount.innerText = count;

            cartBox.remove();

        });

    });

});

// ================= SEARCH =================

const searchInput = document.getElementById("search-input");
const products = document.querySelectorAll(".product-card");

searchInput.addEventListener("keyup", () => {

    const value = searchInput.value.toLowerCase();

    products.forEach(product => {

        const name = product.dataset.name.toLowerCase();

        if (name.includes(value)) {
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }

    });

});



// ================= DARK MODE =================

const darkBtn = document.querySelector(".fa-moon");

darkBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){
        darkBtn.classList.remove("fa-moon");
        darkBtn.classList.add("fa-sun");
    }else{
        darkBtn.classList.remove("fa-sun");
        darkBtn.classList.add("fa-moon");
    }

});




// ================= MOBILE MENU =================

// const menuBtn = document.querySelector(".fa-bars");
// const navMenu = document.querySelector("nav ul");

// menuBtn.addEventListener("click", () => {

//     navMenu.classList.toggle("active");

//  if (navMenu.classList.contains("show")) {

//         menuBtn.classList.remove("fa-bars");
//         menuBtn.classList.add("fa-xmark");

//     } else {

//         menuBtn.classList.remove("fa-xmark");
//         menuBtn.classList.add("fa-bars");

//     }
// });



const menuBtn = document.querySelector(".fa-bars");
const navMenu = document.querySelector("nav ul");

menuBtn.addEventListener("click", () => {

    navMenu.classList.toggle("active");

 if (navMenu.classList.contains("show")) {

        menuBtn.classList.remove("fa-bars");
        menuBtn.classList.add("fa-xmark");

    } else {

        menuBtn.classList.remove("fa-xmark");
        menuBtn.classList.add("fa-bars");

    }



});



// ================= QUICK VIEW =================

const quickBtns = document.querySelectorAll(".quick-preview");

const modal = document.getElementById("quickModal");

const modalImg = document.getElementById("modal-img");
const modalName = document.getElementById("modal-name");
const modalPrice = document.getElementById("modal-price");

const closeModal = document.querySelector(".close-modal");

quickBtns.forEach(btn=>{

    btn.addEventListener("click",()=>{

        const product = btn.closest(".product-card");

        modalImg.src = product.dataset.image;
        modalName.innerText = product.dataset.name;
        modalPrice.innerText = "₹" + product.dataset.price;

        modal.classList.add("active");

    });

});

closeModal.addEventListener("click",()=>{

    modal.classList.remove("active");

});

modal.addEventListener("click",(e)=>{

    if(e.target===modal){

        modal.classList.remove("active");

    }

});


// ================= LOADER =================

window.addEventListener("load",()=>{

    const loader=document.querySelector(".loader");

    setTimeout(()=>{

        loader.classList.add("hide");

    },1500);

});


// ================= PRODUCT FILTER =================

const filterBtns = document.querySelectorAll(".filter-btn");
const productCards = document.querySelectorAll(".product-card");

filterBtns.forEach(btn => {

    btn.addEventListener("click", () => {

        filterBtns.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        const category = btn.dataset.filter;

        productCards.forEach(card => {

            if(category === "all" || card.dataset.category === category){
                card.style.display = "block";
            }else{
                card.style.display = "none";
            }

        });

    });

});


// ================= SORT PRODUCTS =================

const sort = document.getElementById("sort");
const productContainer = document.querySelector(".product-container");

sort.addEventListener("change", () => {

    const cards = [...document.querySelectorAll(".product-card")];

    if(sort.value === "low"){

        cards.sort((a,b)=>a.dataset.price-b.dataset.price);

    }

    else if(sort.value === "high"){

        cards.sort((a,b)=>b.dataset.price-a.dataset.price);

    }

    cards.forEach(card=>{

        productContainer.appendChild(card);

    });

});


// ================= NEWSLETTER =================

// const email = document.getElementById("email");
// const subscribeBtn = document.getElementById("subscribe-btn");
// const message = document.getElementById("message");

// subscribeBtn.addEventListener("click", () => {

//     if(email.value === "") {

//         message.innerText="❌ Please enter your email.";
//         message.style.color="yellow";
//         return;

//     }

//    message.innerText = "✅ Thanks for subscribing!";
//     message.style.color = "limegreen";

//     email.value = "" ;

   
//  });

// ================= SCROLL PROGRESS =================

const progressBar = document.getElementById("progress-bar");

window.addEventListener("scroll", () => {

    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progress = (scrollTop / scrollHeight) * 100;

    progressBar.style.width = progress + "%";

});



loadWishlist();


// ================= CHECKOUT =================

const checkoutBtn = document.querySelector(".cart-footer button");
const orderPopup = document.getElementById("order-popup");
const continueShopping = document.getElementById("continue-shopping");

checkoutBtn.addEventListener("click",()=>{

    if(cartItems.children.length===0){

        alert("Your cart is empty!");

        return;
    }

    orderPopup.classList.add("active");

    cartItems.innerHTML="";

    total=0;
    count=0;

    totalPrice.innerText=0;
    cartCount.innerText=0;

});

continueShopping.addEventListener("click",()=>{

    orderPopup.classList.remove("active");

    cartSidebar.classList.remove("active");

});



// ================= RIPPLE EFFECT =================

const buttons = document.querySelectorAll("button");

buttons.forEach(button => {

    button.addEventListener("click", function(e){

        const circle = document.createElement("span");

        const diameter = Math.max(this.clientWidth, this.clientHeight);

        circle.style.width = circle.style.height = diameter + "px";

        circle.style.left = e.offsetX - diameter / 2 + "px";

        circle.style.top = e.offsetY - diameter / 2 + "px";

        circle.classList.add("ripple");

        const ripple = this.querySelector(".ripple");

        if(ripple){
            ripple.remove();
        }

        this.appendChild(circle);

    });

});


// ================= BACK TO TOP =================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if(window.scrollY > 300){
        topBtn.style.display = "block";
    }else{
        topBtn.style.display = "none";
    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


// ================= SCROLL REVEAL =================

const reveals = document.querySelectorAll(".reveal");

function revealSections(){

    reveals.forEach(section=>{

        const windowHeight = window.innerHeight;

        const revealTop = section.getBoundingClientRect().top;

        const revealPoint = 120;

        if(revealTop < windowHeight - revealPoint){

            section.classList.add("active");

        }

    });

}

window.addEventListener("scroll", revealSections);

revealSections();

// ================= COUNTDOWN =================

const endDate = new Date("December 31, 2026 23:59:59").getTime();

setInterval(() => {

    const now = new Date().getTime();

    const distance = endDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;

},1000);

// ================= PAGINATION =================

const pages = document.querySelectorAll(".page-btn");

pages.forEach(page => {

    page.addEventListener("click", () => {

        pages.forEach(btn => btn.classList.remove("active"));

        page.classList.add("active");

    });

});



// ================= RECENTLY VIEWED =================

const quickButtons = document.querySelectorAll(".quick-preview");
const recentContainer = document.querySelector(".recent-container");

quickButtons.forEach(button=>{

    button.addEventListener("click",()=>{

        const product = button.closest(".product-card");

        const name = product.dataset.name;
        const image = product.dataset.image;

        const card = document.createElement("div");

        card.classList.add("recent-card");

        card.innerHTML = `
            <img src="${image}">
            <h3>${name}</h3>
        `;

        recentContainer.prepend(card);

    });

});
