// selectionner les elements du DOM

const toggler = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-link-container');

// fonction stocker dans une variable qui agit sur l'evenement click du bouton

const toggleNav = () => {
    toggler.classList.toggle("open"); // ajout de la classe open à hamburger

    const ariaToggle = toggler.getAttribute("aria-expanded") === "true" ? "false" : "true"; // indique  si le groupe el. controler par le btn est developper ou non. fonction ternaire if
    toggler.setAttribute("aria-expanded", ariaToggle); // on redefinie  l'attribut aria expanded

    navLinks.classList.toggle("open"); // ajout de la classe open à nav-link-container
}

toggler.addEventListener("click", toggleNav);