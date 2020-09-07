import {
    teddiesOrderAPI,
    camerasOrderAPI,
    furnitureOrderAPI,
    request,
    popup
} from './main';

let form = document.getElementById('contact');
let submitRequest = document.getElementById('submitRequest');
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
    let body = {
        contact,
        products
    };
    return body;
}

// fonction pour envoyer la reponse du serveur au localStorage afin d'utiliser les données ultérieurement
function orderStorage(order) {
    localStorage.setItem('orders', order);
    localStorage.setItem('productsOrdered', JSON.stringify(cartItems));
}

// 
function order() {
    let body = bodyRequest();
    body = JSON.stringify(body);
    return body;
}

function formValidation() {
    let firstName = document.getElementById('firstName');
    const firstNameValidation = /^[A-Za-zÀ-ÿ .-]+$/;

    let lastName = document.querySelector('#lastName');
    const lastNameValidation = /^[A-Za-zÀ-ÿ .-]+$/;

    let address = document.querySelector('#address');
    const addressValidation = /^([0-9]{1,4})\s([ A-Za-zÀ-ÿ0-9-'])+$/;
    // /^[0-9]{1,4}[ ,-][ A-Za-zÀ-ÿ0-9-']*$/;

    let city = document.querySelector('#city');
    const cityValidation = /^[A-Za-zÀ-ÿ .-]+$/;

    let email = document.querySelector('#email');
    const emailValidation = /^([.-]?\w)*[@]([.-]?\w)*(\.\w{2,3})+$/;
    if (!firstNameValidation.test(firstName.value)) {
        firstName.nextElementSibling.innerHTML = 'Veuillez entrez votre prénom au bon format.';
        firstName.nextElementSibling.className = 'error active';

        firstName.addEventListener('input', () => {
            if (firstNameValidation.test(firstName.value)) {
                firstName.nextElementSibling.innerHTML = '<i class="fas fa-check text-success mt-2"></i>';
                firstName.nextElementSibling.className = 'error';
            }
        });
    }

    if (!lastNameValidation.test(lastName.value)) {
        lastName.nextElementSibling.innerHTML = 'Veuillez entrez votre nom au bon format.';
        lastName.nextElementSibling.className = 'error active';

        lastName.addEventListener('input', () => {
            if (lastNameValidation.test(lastName.value)) {
                lastName.nextElementSibling.innerHTML = '<i class="fas fa-check text-success mt-2"></i>';
                lastName.nextElementSibling.className = 'error';
            }
        });
    }

    if (!addressValidation.test(address.value)) {
        address.nextElementSibling.innerHTML = 'Veuillez entrez votre adresse au bon format.';
        address.nextElementSibling.className = 'error active';

        address.addEventListener('input', () => {
            if (addressValidation.test(address.value)) {
                address.nextElementSibling.innerHTML = '<i class="fas fa-check text-success mt-2"></i>';
                address.nextElementSibling.className = 'error';
            }
        });
    }

    if (!cityValidation.test(city.value)) {
        city.nextElementSibling.innerHTML = 'Veuillez entrez votre ville au bon format.';
        city.nextElementSibling.className = 'error active';

        city.addEventListener('input', () => {
            if (cityValidation.test(city.value)) {
                city.nextElementSibling.innerHTML = '<i class="fas fa-check text-success mt-2"></i>';
                city.nextElementSibling.className = 'error';
            }
        });
    }

    if (!emailValidation.test(email.value)) {
        email.nextElementSibling.innerHTML = 'Veuillez entrez votre e-mail au bon format.';
        email.nextElementSibling.className = 'error active';

        email.addEventListener('input', () => {
            if (emailValidation.test(email.value)) {
                email.nextElementSibling.innerHTML = '<i class="fas fa-check text-success mt-2"></i>';
                email.nextElementSibling.className = 'error';
            }
        });
    }
};



submitRequest.addEventListener('click', function (e) {
    e.preventDefault();
    formValidation();

    let requestBody = order();
    request('http://localhost:3000/api/teddies/order', 'POST', 'text', requestBody, 'application/json')
        .then((response) => {
            orderStorage(response)
        })
        .then(function () {
            popup(e, 'confirmation');
            // Reset le panier
            localStorage.removeItem('cartItems');
            // Lancer la redirection après 4s
            setTimeout(function () {
                window.location = 'confirmation.html'
            }, 4000);
        })
        .catch(function (error) {});
});