import {
    convertPrice
} from './main';

// ////////////////////////////
// Initialize the total amount 
// ////////////////////////////
let total = 0;
// ////////////////////////////
// Get the DOM elements
// ////////////////////////////
let title = document.getElementById('cartTitle');
let formSection = document.getElementById('formSection');
let orderReview = document.getElementById('orderReview');

// ////////////////////////////
// Get the cart's localStorage
// ////////////////////////////
let cartItems = localStorage.getItem('cartItems');
cartItems = JSON.parse(cartItems);


// ////////////////////////////
// Display the number of products in the H1 title
// ////////////////////////////
if (cartItems) {
    if (cartItems.length > 0) {
        if (cartItems.length === 1) {
            title.textContent = 'Mon panier (' + cartItems.length + ' article)'
        } else {
            title.textContent = 'Mon panier (' + cartItems.length + ' articles)'
        }
        displayTotalCost();
        displayCart();
        formSection.classList.remove('d-none');
    } else {
        title.textContent = 'Votre panier est vide'
    }
} else {
    title.textContent = 'Votre panier est vide'
}

// ////////////////////////////
// Displaying products ordered
// ////////////////////////////
function displayCart() {
    let productsReview = document.getElementById('productsReview');
    let listOfProductsTitle = document.createElement('h2');
    listOfProductsTitle.textContent = 'Liste de vos produits';
    productsReview.appendChild(listOfProductsTitle);
    for (let i = 0; i < cartItems.length; i++) {
        const product = cartItems[i];
        // Add the product in the first section
        productsReview.innerHTML += `
        <article class="card mb-3 border">
            <div class="row no-gutters w-100">
                <div class="col-12 col-md-5 my-auto">
                    <img src="${product.imgUrl}" alt="" class="card-img">
                </div>
                <div class="col-12 col-md-7">
                    <div class="card-body">
                        <h3 class="card-title">${product.name}</h5>
                            <p class="card-text mb-1">
                                <small class="text-muted text-break">
                                    ref : ${product.id }
                                </small>
                            </p>
                            <p class="card-text mb-1">Prix : ${convertPrice(product.price)}</p>
                            <div class="d-flex flex-wrap mb-1">
                                <button type="button" class="plusBtn btn p-0" aria-label="Augmenter la quantité de une unité"><i
                                        class="fas fa-plus"></i></button>
                                        <p class="card-text mb-0 mx-2 counter" aria-live="assertive"><span class="sr-only">La quantité est de </span>${product.quantity}</p>
                                <button type="button" class="minusBtn btn p-0" aria-label="Diminuer la quantité de une unité"><i
                                        class="fas fa-minus"></i></button>
                            </div>
                            <button type="button" class="removeBtn btn btn-sm btn-outline-danger">Retirer du panier</button>
                    </div>
                </div>
            </div>
        </article>
    `;

        // add the product in the list of references
        let productList = document.getElementById('productList');
        let productTotal = product.price * product.quantity;

        productList.innerHTML += `
        <tr>
            <th scope="row" class="text-break">${product.id} (x${product.quantity})</th>
            <td>${(convertPrice(productTotal))}</td>
        </tr>
    `;
        // Display the total amount
        total += productTotal;
        document.getElementById('totalAmmount').textContent = `${convertPrice(total)}`;
    }
}

// ////////////////////////////
// Display the total cost for the all order
// ////////////////////////////
function displayTotalCost() {
    // display the 'total' section
    let totalSection = document.createElement('section');
    orderReview.appendChild(totalSection);
    totalSection.classList.add('bg-white', 'p-4', 'mb-4', 'col-12', 'h-25', 'rounded-lg');
    totalSection.innerHTML += `
        <h2>Total</h2>
        <table class="table table-borderless table-striped ">
            <caption class="sr-only">Sous-total</caption>
            <tbody id="productList">
            </tbody>
            <tfoot>
                <tr class="font-weight-bold">
                    <th scope="row">Total</th>
                    <td id="totalAmmount"></td>
                </tr>
            </tfoot>
        </table>
    `
}


// ////////////////////////////
// Display the form for validation
// ////////////////////////////
(function setupFormValidation() {
    let validValues = localStorage.getItem('validFormValues');
    validValues = JSON.parse(validValues);

    let traductor = {
        firstName: 'prénom',
        lastName: 'nom',
        address: 'adresse',
        city: 'ville',
        email: 'e-mail',
    }

    document.querySelectorAll('#contact input').forEach(input => {
        if (validValues) {
            let inputInStorage = validValues[`${input.getAttribute('id')}`];

            if (inputInStorage) {
                input.setAttribute('value', inputInStorage);
            } else {
                let error = input.parentNode.querySelector(`input~span`);

                error.innerHTML = `Veuillez entrer votre ${traductor[`${input.getAttribute('id')}`]} au bon format.`;
                error.className = 'error active';
            }
        }
    });
})();

// ////////////////////////////
// Set the +1 and -1 button for quantity in each product
// ////////////////////////////
let plusBtn = document.querySelectorAll('.plusBtn');
let minusBtn = document.querySelectorAll('.minusBtn');
let counter = document.querySelectorAll('.counter')
plusBtn.forEach(function (element, index, array) {
    plusBtn[index].addEventListener('click', function (e) {
        e.preventDefault();
        cartItems[index].quantity = parseInt(cartItems[index].quantity, 10);
        cartItems[index].quantity += 1;
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        location.reload();
    })
})
minusBtn.forEach(function (element, index, array) {
    minusBtn[index].addEventListener('click', function () {
        cartItems[index].quantity = parseInt(cartItems[index].quantity, 10);
        if (cartItems[index].quantity > 1) {
            cartItems[index].quantity -= 1;
            localStorage.setItem('cartItems', JSON.stringify(cartItems));
            location.reload();
        } else {
            if (cartItems.length > 1) {
                cartItems.splice(index, 1);
                localStorage.setItem('cartItems', JSON.stringify(cartItems));
                location.reload();
            } else {
                localStorage.removeItem('cartItems');
                location.reload();
            }
        }
    })
})

///////////////////////////////////
// Set the remove btn for each product
////////////////////////////////////
let removeBtn = document.querySelectorAll('.removeBtn');
removeBtn.forEach(function (element, index, array) {
    removeBtn[index].addEventListener('click', function () {
        if (cartItems.length > 1) {
            cartItems.splice(index, 1);
            localStorage.setItem('cartItems', JSON.stringify(cartItems));
            location.reload();
        } else {
            localStorage.removeItem('cartItems');
            location.reload();
        }
    })
})