import {
    teddiesOrderAPI,
    camerasOrderAPI,
    furnitureOrderAPI,
    request,
    popup
} from './main';

let submitBtn = document.getElementById('submitRequest');
// Récupérer les données du panier
let cartItems = localStorage.getItem('cartItems');
cartItems = JSON.parse(cartItems);


// fonction pour créer le corps de la requete a envoyer
function bodyRequest() {
    let contact = {};
    // Inclure les valeurs du formulaire dans l'object contact
    contact.firstName = document.querySelector('#firstName').value;
    contact.lastName = document.querySelector('#lastName').value;
    contact.address = document.querySelector('#address').value;
    contact.city = document.querySelector('#city').value;
    contact.email = document.querySelector('#email').value;
    // Prendre le tableau trié de la boutique et le mettre dans la variable 'products'
    let products = [];
    for (const product of cartItems) {
        products.push(product.id);
    }
    console.log(products)
    let body = {
        contact,
        products
    };
    return body;
}

// fonction pour envoyer la reponse du serveur au localStorage afin d'utiliser les données ultérieurement
function orderStorage(order) {
    localStorage.setItem('orders', order);
}

// 
function order() {
    let body = bodyRequest();
    body = JSON.stringify(body);
    return body;
}

submitBtn.addEventListener('click', function (e) {
    e.preventDefault();
    let requestBody = order();
    request(camerasOrderAPI, 'POST', 'text', requestBody, 'application/json')
        .then((response) => {
            orderStorage(response)
        })
        .then(function () {
            let confirmPopup = document.querySelector('#confirmation div');
            confirmPopup.innerHTML += `
                <h3>Votre commande est validée</h3>
                <p>Vous allez être redirigé vers une page de confirmation de commande !</p>
            `
            // Lancer la redirection après 4s
            setTimeout(function () {
                window.location = 'confirmation.html'
            }, 4000);
        })
        .catch(function (error) {
            let confirmPopup = document.querySelector('#confirmation div');
            confirmPopup.innerHTML += `
                <h3>Votre commande n'a pas pu être validée</h3>
                <p>Veuillez réessayer dans quelques minutes, si le problème persiste, vous pouvez nous contacter (voir rubrique "contact")</p>
            `;
            // Recharger la page après 4s
            setTimeout(function () {
                window.location.reload();
            }, 4000);
        });
});

popup('#submitRequest', '#confirmation');