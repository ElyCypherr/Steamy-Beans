let navbar = document.querySelector ('.navbar')

document.querySelector('#menu-btn').onclick = () => 
{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

let searchForm = document.querySelector ('.search-form')

document.querySelector('#search-btn').onclick = () => 
{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
}

let cartItem = document.querySelector ('.cart-items-container')

document.querySelector('#cart-btn').onclick = () => 
{
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
} 

window.onscroll = () => 
{
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}


function Check ()
{
    alert(" Check-out is in process...Thank you for purchasing at Steamy Beans");
}

function Menu1 ()
{
    var Menu1 = "Espresso";
    alert(Menu1 + " has been added to your cart");
}

function Menu2 ()
{
    var Menu2 = "Iced Espresso";
    alert(Menu2 + " has been added to your cart");
}

function Menu3 ()
{
    var Menu3 = "Iced Matcha Latte";
    alert(Menu3 + " has been added to your cart");
}

function Menu4 ()
{
    var Menu4 = "White Russian";
    alert(Menu4 + " has been added to your cart");
}

function Menu5 ()
{
    var Menu5 = "Affogato";
    alert(Menu5 + " has been added to your cart");
}

function Menu6 ()
{
    var Menu6 = "Iced Chai Latte";
    alert(Menu6 + " has been added to your cart");
}

function Cart ()
{
    alert("Item has been added to your cart");
}

function Favourite ()
{
    alert("Item has been added to your wishlist");
}

function Submit ()
{
    var Submit = "Steamy Beans";
    alert("Thank you! Your message is appreciated: " + Submit);
}

function Telegram ()
{
    alert("You can contact us at 123-456-7890");
}

function Google ()
{
    alert("You can mail us at SteamyBeans@gmail.com!");
}

const openButton = document.getElementById('openPopup');
const closeButton = document.getElementById('closePopup');
const overlay = document.getElementById('popupOverlay');

openButton.addEventListener('click', function() {
  overlay.style.display = 'block';
});

closeButton.addEventListener('click', function() {
  overlay.style.display = 'none';
});
