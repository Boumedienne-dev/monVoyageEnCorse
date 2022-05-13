// Lorsque je clique sur l'icône, l'élément .nav apparait
// je selectionne et stocke les éléments nécessaires
const icon = document.querySelector(".fa-bars");
const list = document.querySelector(".nav-list-mobile");

// je les soumets à l'évenement
icon.addEventListener("Click", function(){
    //instructions
    list.classList.toggle("list-visible");
    icon.classList.toggle("icon-visible");
    console.log(icon);
})