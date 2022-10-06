// Je sélectionne et stocke les éléments nécessaires
const message = "Merci d'avoir répondu à la question. Nous allons vous répondre bientôt."
const formContact = document.querySelector(".contactez-nous");
console.log(formContact);
containerNotifications = document.querySelector(".container-notifications")

formContact.addEventListener("submit", function (event) {
    event.preventDefault();
    //createElement("div")
    const notification = document.createElement("div");


    //classList.add("nomdelaclasse")
    notification.classList.add("notification-message");

    //innerHTML(message)
    notification.innerText = "Merci d'avoir répondu à la question. Nous allons vous répondre bientôt.";
    containerNotifications.appendChild(notification);
    //setTimeout pour la faire disparaitre
    setTimeout(function(){
        notification.remove();
        }, 2000);
});

