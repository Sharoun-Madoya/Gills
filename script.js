const h1= document.createElement("h2");
h1.textContent = "This content added by JavaScript";
document.querySelector("body").appendChild(h2);

const menu = document.querySelector('mobile-menu')
const menulinks =document.querySelector('.navbar__menu')

menu.addEventListener('click', function() {
    menu.classList.toogle('is active');
    menulinks.classList.toggle('active');
})