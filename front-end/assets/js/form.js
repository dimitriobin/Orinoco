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
    localStorage.setItem('ordersInformation', JSON.stringify(orderArray));
    // Reset le panier
    localStorage.removeItem('cartItems');
}


//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Create a client side validation of the submission datas
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
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


//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Listen to the submission's button 
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
submitRequest.addEventListener('click', function (e) {
    e.preventDefault();
    formValidation();

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
                responsesArray.push(JSON.parse(res));
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