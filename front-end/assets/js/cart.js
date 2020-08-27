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
let cartItems = localStorage.getItem('cartItems');
cartItems = JSON.parse(cartItems);

if (cartItems) {
    if (cartItems.length > 1) {
        title.textContent = 'Mon panier (' + cartItems.length + ' articles )'
    } else {
        title.textContent = 'Mon panier (' + cartItems.length + ' article )'
    }
}

function displayCart(product, img) {
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

for (let i = 0; i < cartItems.length; i++) {
    const product = cartItems[i];
    displayCart(product);
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
        cartItems.splice(index, 1);
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        location.reload();
    })
})