import {
    getProductDatas,
    popup
} from './main';

let submitRequest = document.getElementById('submitRequest');
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
// Get the localStorage with cart's items
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
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
// Take each input's value and put it in the contact object
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
function makeContactObject() {
    let contact = {};

    contact.firstName = document.querySelector('#firstName').value;
    contact.lastName = document.querySelector('#lastName').value;
    contact.address = document.querySelector('#address').value;
    contact.city = document.querySelector('#city').value;
    contact.email = document.querySelector('#email').value;

    return contact;
}


//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Get an array with all the infos and save it in the localStorage, 
// also switch the products ordered in the localStorage, this is for reset the cart and let the client do an other one if needed
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
function orderStorage(orderArray) {

    localStorage.setItem('ordersInformation', JSON.stringify(orderArray));
    // Transfert products in an other storage
    localStorage.setItem('productsOrdered', localStorage.getItem('cartItems'));
    // Reset the cart
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
    // initialyze a counter
    let validInputs = [];

    // in each change in the input, replace the first caracter by the same but in uppercase.
    function toUpperCaseFirstLetter(input) {
        input.addEventListener('input', () => {
            input.value = input.value.replace(input.value.slice(0, 1), input.value.slice(0, 1).toUpperCase());
        })
    }

    // in each change in the input, replace the all string by the same but in lowercase.
    function toLowerCase(input) {
        input.addEventListener('input', () => {
            input.value = input.value.toLowerCase();
        })
    }

    // test if the input value is fitting with its regular expression
    function validation(input, regEx) {
        // if not, display a small message to let the client know what's going wrong
        if (!regEx.test(input.value)) {
            input.nextElementSibling.innerHTML = 'Veuillez entrez votre prénom au bon format.';
            input.nextElementSibling.className = 'error active';
            // also, remove the input to the validInputs array
            if (validInputs.includes(input)) {
                validInputs.splice(validInputs.indexOf(input), 1);
            }

            // if yes, display a small icon to let the client know that the input value is correct 
        } else {
            input.nextElementSibling.innerHTML = '<i class="fas fa-check text-success mt-2"></i>';
            input.nextElementSibling.className = 'error';
            // also, add the input to the validInputs array
            if (!validInputs.includes(input)) {
                validInputs.push(input);
            }
        }
    }

    toUpperCaseFirstLetter(firstName);
    toUpperCaseFirstLetter(lastName);
    toUpperCaseFirstLetter(city);
    toLowerCase(email);


    // for each input, take its regex from the pattern attribute, then check the validation with its regex
    inputs.forEach(input => {
        input.addEventListener('blur', () => {
            console.log(validInputs)
            let regEx = new RegExp(input.getAttribute('pattern'));
            validation(input, regEx);
            if (validInputs.length == 5) {
                validationBtn.classList.add('d-none')
                submitRequest.classList.remove('d-none');
            } else {
                submitRequest.classList.add('d-none');
                validationBtn.classList.remove('d-none');
            }
        })
    })
})();


//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Listen to the submission's button 
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
submitRequest.addEventListener('click', function (e) {
    // stop the default setting to avoid the form submission
    e.preventDefault();
    // prepare the contact object
    let contact = makeContactObject();
    // initialyze an array for push each request response in it
    let responsesArray = []
    // looping through the sorted by shop's object
    Object.keys(sortedOrder).forEach(shop => {
        let products = []
        // prepare the products array for this shop's order
        sortedOrder[shop].forEach(product => {
            products.push(product.id);
        })
        // prepare the body request's object
        let body = {
            contact,
            products
        }
        body = JSON.stringify(body);
        // lauch the POST request for each shop
        getProductDatas(`${shop}/order`, 'POST', 'text', body, 'application/json')
            .then(res => {
                res = JSON.parse(res);
                // add the shop's name to the response object
                res['theme'] = shop;
                // push the response object to the array 
                responsesArray.push(res);
                // when the length of the response array is equal to the number of shops that have to be oredering : 
                if (responsesArray.length == Object.keys(sortedOrder).length) {
                    // store the datas in localStorage
                    orderStorage(responsesArray);
                    // Explain to the client what's going on
                    popup(e, 'confirmation');
                    // Redirect the client to the confirmation page
                    setTimeout(function () {
                        window.location = 'confirmation.html'
                    }, 4000);
                }
            })
    })
});