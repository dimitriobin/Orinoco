import {
    teddiesAPI,
    camerasAPI,
    furnitureAPI,
    request,
    convertPrice
} from './main';

// Initialize the total amount 
let total = 0;

// Add the number of product in the h1
let title = document.getElementById('cartTitle');
let formSection = document.getElementById('formSection');
let orderReview = document.getElementById('orderReview');
let cartItems = localStorage.getItem('cartItems');
cartItems = JSON.parse(cartItems);



if (cartItems) {
    if (cartItems.length > 0) {
        if (cartItems.length === 1) {
            title.textContent = 'Mon panier (' + cartItems.length + ' article )'
        } else {
            title.textContent = 'Mon panier (' + cartItems.length + ' articles )'
        }
        displayTotal();
        displayCart();
        formSection.classList.remove('d-none');
    } else {
        title.textContent = 'Votre panier est vide'
    }
} else {
    title.textContent = 'Votre panier est vide'
}

function displayCart(product) {
    for (let i = 0; i < cartItems.length; i++) {
        const product = cartItems[i];
        // Add the product in the first section
        let productsReview = document.getElementById('productsReview');
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
                                <button type="button" class="plusBtn btn p-0"><i
                                        class="fas fa-plus"></i></button>
                                        <p class="card-text mb-0 mx-2">${product.quantity}</p>
                                <button type="button" class="minusBtn btn p-0"><i
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

function displayTotal() {
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


// Set the +1 and -1 button
let plusBtn = document.querySelectorAll('.plusBtn');
let minusBtn = document.querySelectorAll('.minusBtn');
plusBtn.forEach(function (element, index, array) {
    plusBtn[index].addEventListener('click', function () {
        cartItems[index].quantity = parseInt(cartItems[index].quantity, 10);
        cartItems[index].quantity += 1;
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        location.reload();
    })
})
minusBtn.forEach(function (element, index, array) {
    minusBtn[index].addEventListener('click', function () {
        cartItems[index].quantity = parseInt(cartItems[index].quantity, 10);
        cartItems[index].quantity -= 1;
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        location.reload();
    })
})

// Set the remove btn
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