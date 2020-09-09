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

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// Sort products by shop'theme
/////////////////////////////////////////////////
/////////////////////////////////////////////////
let sortedOrder = {};

(function sortByTheme() {
    cartItems.forEach(element => {
        switch (element.theme) {
            case 'teddies':
                if (!sortedOrder.teddies) {
                    sortedOrder.teddies = [];
                    sortedOrder.teddies.push(element);
                } else {
                    sortedOrder.teddies.push(element);
                }
                break;
            case 'cameras':
                if (!sortedOrder.cameras) {
                    sortedOrder.cameras = [];
                    sortedOrder.cameras.push(element);
                } else {
                    sortedOrder.cameras.push(element);
                }
                break;
            case 'furniture':
                if (!sortedOrder.furniture) {
                    sortedOrder.furniture = [];
                    sortedOrder.furniture.push(element);
                } else {
                    sortedOrder.furniture.push(element);
                }
                break;

            default:
                break;
        }
    });
})();


///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
// fonction pour créer le corps de la requete a envoyer
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
function makeContactObject() {
    let contact = {};

    // Inclure les valeurs du formulaire dans l'object contact
    contact.firstName = document.querySelector('#firstName').value;
    contact.lastName = document.querySelector('#lastName').value;
    contact.address = document.querySelector('#address').value;
    contact.city = document.querySelector('#city').value;
    contact.email = document.querySelector('#email').value;

    return contact;
}


//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
// fonction pour envoyer la reponse du serveur au localStorage afin d'utiliser les données ultérieurement
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
function orderStorage(orderArray) {
    console.log(orderArray);
    localStorage.setItem('ordersInformation', JSON.stringify(orderArray));
    // Transfert products in an other storage
    localStorage.setItem('productsOrdered', localStorage.getItem('cartItems'));
    // Reset le panier
    localStorage.removeItem('cartItems');
}


//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Create a client side validation of the submission datas
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
(function formValidationLive() {

    let validationBtn = document.getElementById('validationBtn');
    let inputs = document.querySelectorAll('#contact input');
    let validInputCounter = 0;

    function toUpperCase(input) {
        input.addEventListener('input', () => {
            input.value = input.value.replace(input.value.slice(0, 1), input.value.slice(0, 1).toUpperCase());
        })
    }

    function toLowerCase(input) {
        input.addEventListener('input', () => {
            input.value = input.value.toLowerCase();
        })
    }

    function validation(input, regEx) {
        if (!regEx.test(input.value)) {
            input.nextElementSibling.innerHTML = 'Veuillez entrez votre prénom au bon format.';
            input.nextElementSibling.className = 'error active';
            (validInputCounter > 0) ? validInputCounter-- : validInputCounter = 0;
        } else {
            input.nextElementSibling.innerHTML = '<i class="fas fa-check text-success mt-2"></i>';
            input.nextElementSibling.className = 'error';
            (validInputCounter >= 0 && validInputCounter < 5) ? validInputCounter++ : validInputCounter = 5;
        }
    }

    toUpperCase(firstName);
    toUpperCase(lastName);
    toUpperCase(city);
    toLowerCase(email);

    inputs.forEach(input => {
        input.addEventListener('blur', () => {
            let regEx = new RegExp(input.getAttribute('pattern'));
            validation(input, regEx);
            console.log(validInputCounter);
            if (validInputCounter == 5) {
                validationBtn.setAttribute('class', 'd-none');
                submitRequest.classList.remove('d-none');
            }
        })
    })
})();


function formValidationPostClick() {




};


//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Listen to the submission's button 
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
submitRequest.addEventListener('click', function (e) {
    e.preventDefault();
    formValidationPostClick();

    let contact = makeContactObject();
    let responsesArray = []
    Object.keys(sortedOrder).forEach(shop => {
        let products = []
        sortedOrder[shop].forEach(product => {
            products.push(product.id);
        })
        let body = {
            contact,
            products
        }
        body = JSON.stringify(body);
        request(`${shop}/order`, 'POST', 'text', body, 'application/json')
            .then(res => {
                res = JSON.parse(res);
                res['theme'] = shop;
                responsesArray.push(res);
                if (responsesArray.length == Object.keys(sortedOrder).length) {
                    orderStorage(responsesArray);
                    popup(e, 'confirmation');
                    // Lancer la redirection après 4s
                    setTimeout(function () {
                        window.location = 'confirmation.html'
                    }, 4000);
                }
            })
    })
});