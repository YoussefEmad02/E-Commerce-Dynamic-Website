// let text = document.getElementById('text');
// let leaf = document.getElementById('leaf');
// let hill1 = document.getElementById('hill1');

// window.addEventListener('scroll',()=>{
//   let value = window.scrollY;

//   text.style.marginTop = value * 2.5 + 'px';
//   leaf.style.top = value * -1.5 + 'px';
//   leaf.style.left = value * 1.5 + 'px';
// });



// --------- Home Page Carousel ---------

// Get the carousel element
var carousel = document.getElementById('carouselExampleAutoplaying');

// Add an event listener to the carousel for the slide.bs.carousel event
if (carousel)
{
   carousel.addEventListener('slide.bs.carousel', function (event) {
      // Get the index of the next slide
      var index = event.to;
   
      // Remove the 'active' class from all indicators
      var indicators = document.querySelectorAll('#carouselExampleCaptions .carousel-indicators button');
      indicators.forEach(function (indicator) {
         indicator.classList.remove('active');
      });
   
      // Add the 'active' class to the indicator corresponding to the next slide
      indicators[index].classList.add('active');
   });
}




// -------- My Account Page ------
const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');


if (registerLink) {
   registerLink.addEventListener('click', () => {
      wrapper.classList.add('active');
   });
}

if (loginLink) {
   loginLink.addEventListener('click', () => {
      wrapper.classList.remove('active');
   });
}



// btnPopup.addEventListener('click', ()=>{
//   wrapper.classList.add('active-popup');
// });

// iconClose.addEventListener('click', ()=>{
//   wrapper.classList.remove('active-popup');
// });


// -------- cart --------
let cartIcon = document.querySelector("#cart-bag");
let cart = document.querySelector(".cart");
let closeCart = document.querySelector("#close-cart");
if (cartIcon) {
   cartIcon.addEventListener("click", () => {
      cart.classList.add("active");
   });
};
if (closeCart) {
   closeCart.addEventListener("click", () => {
      cart.classList.remove("active");
   });
};

if (document.readyState == "loading") {
   document.addEventListener("DOMContentLoaded", ready);
}
else {
   ready();
}
function ready() {
   var removeCartButtons = document.getElementsByClassName("cart-remove");
   console.log(removeCartButtons);
   for (var i = 0; i < removeCartButtons.length; i++) {
      var button = removeCartButtons[i];
      button.addEventListener("click", removeCartItem);
   }

   var quantityInputs = document.getElementsByClassName("cart-quantity");
   for (var i = 0; i < quantityInputs.length; i++) {
      var input = quantityInputs[i];
      input.addEventListener("change", quantityChanged);
   }

   var addCart = document.getElementsByClassName("add-cart");
   for (var i = 0; i < addCart.length; i++) {
      var button = addCart[i];
      button.addEventListener("click", addCartClicked);
   }
   if (cartIcon) {
      document.getElementsByClassName("btn-buy")[0].addEventListener("click", buyButtonClicked);
   };


}
function buyButtonClicked() {
   alert("Your order is placed");
   var cartContent = document.getElementsByClassName("cart-content")[0];
   while (cartContent.hasChildNodes()) {
      cartContent.removeChild(cartContent.firstChild);
   }
   updatetotal();
}
function removeCartItem(event) {
   var buttonClicked = event.target;
   buttonClicked.parentElement.remove();
   updatetotal();
}
function quantityChanged(event) {
   var input = event.target;
   if (isNaN(input.value) || input.value <= 0) {
      input.value = 1;
   }
   updatetotal();
}
function addCartClicked(event) {
   var button = event.target;
   var shopProducts = button.parentElement;
   var title = shopProducts.getElementsByClassName("product-title")[0].innerText;
   var price = shopProducts.getElementsByClassName("price")[0].innerText;
   var productImg = shopProducts.getElementsByClassName("product-image")[0].src;
   addProductToCart(title, price, productImg);
   updatetotal();
}

function addProductToCart(title, price, productImg) {
   var cartShopBox = document.createElement("div");
   cartShopBox.classList.add("cart-box");
   var cartItems = document.getElementsByClassName("cart-content")[0];
   var cartItemsNames = cartItems.getElementsByClassName("cart-product-title");
   for (var i = 0; i < cartItemsNames.length; i++) {
      if (cartItemsNames[i].innerText == title) {
         alert("You have already add this item to cart");
         return;
      }
   }
   var cartBoxContent = `
<img src="${productImg}" alt="" class="cart-img">
<div class="detail-box">
    <div class="cart-product-title">${title}</div>
    <div class="cart-price">${price}</div>
    <input type="number" value="1" class="cart-quantity">
</div>
<i class="bx bxs-trash cart-remove"></i>
`;
   cartShopBox.innerHTML = cartBoxContent;
   cartItems.append(cartShopBox);
   cartShopBox.getElementsByClassName("cart-remove")[0].addEventListener("click", removeCartItem);
   cartShopBox.getElementsByClassName("cart-quantity")[0].addEventListener("change", quantityChanged);
}




function updatetotal() {
   var cartContent = document.getElementsByClassName("cart-content")[0];
   var cartBoxes = cartContent.getElementsByClassName("cart-box");
   var total = 0;
   var totalItems = 0;
   for (var i = 0; i < cartBoxes.length; i++) {
      var cartBox = cartBoxes[i];
      var priceElement = cartBox.getElementsByClassName("cart-price")[0];
      var quantityElement = cartBox.getElementsByClassName("cart-quantity")[0];
      var price = parseFloat(priceElement.innerText.replace("$", ""));
      var quantity = quantityElement.value;
      total = total + (price * quantity);
      totalItems = totalItems + parseInt(quantity);
   }
   total = Math.round(total * 100) / 100;
   document.getElementsByClassName("total-price")[0].innerText = "$" + total;
   document.getElementById("total-items-display").innerText = "" + totalItems;

};
/*****************************************************/

//JavaScript for disabling form submissions if there are invalid fields
(function () {
   'use strict'
 
   // Fetch all the forms we want to apply custom Bootstrap validation styles to
   var forms = document.querySelectorAll('.needs-validation')
 
   // Loop over them and prevent submission
   Array.prototype.slice.call(forms)
     .forEach(function (form) {
       form.addEventListener('submit', function (event) {
         if (!form.checkValidity()) {
           event.preventDefault()
           event.stopPropagation()
         }
 
         form.classList.add('was-validated')
       }, false)
     })
 })()
 