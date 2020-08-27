import {
    teddiesOrderAPI,
    camerasOrderAPI,
    furnitureOrderAPI,
    request
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
    this.setAttribute('disabled', '');
    let requestBody = order();
    request(camerasOrderAPI, 'POST', 'text', requestBody, 'application/json')
        .then((response) => {
            orderStorage(response)
        })
        .then(function () {
            // Lancer la redirection
            window.location = 'confirmation.html'
        })
});