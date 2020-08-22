import {
    teddiesAPI,
    camerasAPI,
    furnitureAPI,
    request
} from './main';

// Initialize the total amount 
let total = 0;

// Add the number of product in the h1
let title = document.getElementById('cartTitle')
if (localStorage.length > 0) {
    if (localStorage.length > 1) {
        // Length-1 because of the loglevel webpack line in the storage
        title.textContent = 'Mon panier (' + (localStorage.length - 1) + ' articles )'
    } else {
        title.textContent = 'Mon panier (' + (localStorage.length - 1) + ' article )'
    }
}



// Looping through the storage
for (let i = 0; i < localStorage.length; i++) {
    // Get the ref
    const product = localStorage.key(i);
    // Get the quantity
    let quantity = localStorage.getItem(product);
    // Put the loglevel line aside
    if (!(product === 'loglevel:webpack-dev-server')) {
        // Get the datas of each product in the storage
        request(product, 'GET').then(function (data) {
            // Display it in the DOM
            displayCart(data, quantity);
        })
    }
}

function displayCart(data, quantity) {
    // Add the product in the first section
    let productsReview = document.getElementById('productsReview');
    productsReview.innerHTML += `
        <article class="card mb-3 border">
            <div class="row no-gutters w-100">
                <div class="col-12 col-md-5 my-auto">
                    <img src="${data.imageUrl}" alt="" class="card-img">
                </div>
                <div class="col-12 col-md-7">
                    <div class="card-body">
                        <h3 class="card-title">${data.name}</h5>
                            <p class="card-text mb-1">
                                <small class="text-muted text-break">
                                    ref : ${data._id }
                                </small>
                            </p>
                            <p class="card-text mb-1">Prix : ${data.price}€</p>
                            <div class="d-flex flex-wrap mb-1">
                                <button type="button" class="plusBtn btn p-0"><i
                                        class="fas fa-plus"></i></button>
                                        <p class="card-text mb-0 mx-2">${quantity}</p>
                                <button type="button" class="minusBtn btn p-0"><i
                                        class="fas fa-minus"></i></button>
                            </div>
                            <button type="button" class="removeBtn btn btn-sm btn-outline-danger">Retirer du panier</button>
                    </div>
                </div>
            </div>
        </article>
    `;
    // Set the plus and minus button
    let minusBtn = document.querySelectorAll('.minusBtn');
    let plusBtn = document.querySelectorAll('.plusBtn');
    plusBtn.forEach(function (element, index, array) {
        plusBtn[index].addEventListener('click', function () {
            console.log(localStorage.key(index))
            console.log(parseInt(element.nextSibling));
        })
    })

    // add the product in the list of references
    let productList = document.getElementById('productList');
    let productTotal = data.price * quantity;
    productList.innerHTML += `
        <tr>
            <th scope="row" class="text-break">${data._id} (x${quantity})</th>
            <td>${(productTotal)}€</td>
        </tr>
    `;
    // Display the total amount
    total += productTotal;
    document.getElementById('totalAmmount').textContent = `${total}€`;
}