import {
    onLoadCartNumbers,
    getProductDatas,
    convertPrice,
    popup
} from './main';


let mainContentSection = document.getElementById('mainContent');

////////////////////////////////////////////////////////////////
// Looking through the url and put informations within constants
/////////////////////////////////////////////////////////////////
const params = new URLSearchParams(window.location.search);
const productId = params.get('id');
const productTheme = params.get('theme');
const productUrl = `${productTheme}/${productId}`;


////////////////////////////////////////////////////////////////
// Take the informations form the product obj and set the page with
/////////////////////////////////////////////////////////////////
function setLayout(product) {
    // Define wich option to set according to the theme of product
    let options
    switch (productTheme) {
        case 'teddies':
            options = product.colors;
            break;
        case 'cameras':
            options = product.lenses;
            break;
        case 'furniture':
            options = product.varnish;
            break;
        default:
            break;
    };
    // put the content in the DOM 
    mainContentSection.innerHTML += `
    <a href="${product.imageUrl}" class="col-12 col-md-5 my-auto" target="_blank"><img id="productImg" src="${product.imageUrl}" alt=""
                    class="card-img"></a>
            <article class="col-12 col-md-7 text-break">
                <div class="card-body">
                    <h1 id="productName" class="card-title">${product.name}</h1>
                    <p id="productRef" class="text-muted card-subtitle"><small>ref :
                    ${product._id}</small></p>
                    <p id="productDesc" class="card-text ">${product.description}</p>
                    <div class="form-row align-items-center mb-3">
                        <label id="productOptions" class="col-auto mr-sm-2" for="inlineFormCustomSelect">Options :
                        </label>
                        <select id="inlineFormCustomSelect" class="col-4 custom-select mr-sm-2"></select>
                    </div>
                    <div class="form-row align-items-center mb-3">
                        <label class="col-auto" for="quantity">Quantité : </label>
                        <select class="col-2 custom-select" name="" id="quantity">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                        </select>
                    </div>
                    <p id="productPrice" class="lead">Prix : ${convertPrice(product.price)}</p>
                    <button id="addToCartBtn" type="submit" class="btn btn-success w-75">Ajouter au
                        panier</button>
                </div>
            </article>
    `
    for (let j = 0; j < options.length; j++) {
        document.getElementById('inlineFormCustomSelect').appendChild(document.createElement('option')).textContent = options[j];
    }
}

function displayError() {
    let mainContentSection = document.getElementById('mainContent');
    mainContentSection.innerHTML = '';
    mainContentSection.innerHTML += `
    <div class="d-flex flex-column justify-content-center align-items-center">
        <h1 class="text-center mb-5">Ce produit n'existe pas</h1>
        <p  class="text-center mb-5">Il semblerait que vous essayez d'accéder à un produit qui n'est pas ou plus dans notre catalogue, pour consulter la liste de nos produits actuellement disponibles veuillez cliquer sur le bouton suivant : </p>
        <a role="button" class="btn btn-light btn-lg mx-auto" href="../index.html" aria-label="Visitez notre catalogue mis à jours">Notre catalogue</a>
    </div>
    `
}



function addToCart(product) {
    // put the datas in an object
    let item = new Object();
    item.id = product._id;
    item.theme = productTheme;
    item.imgUrl = product.imageUrl;
    item.name = product.name;
    item.price = product.price;

    // Listen to the "add to cart" button
    let addToCartBtn = document.getElementById('addToCartBtn');
    addToCartBtn.addEventListener('click', function () {
        // Add the value of the chosen quantity to the object of the product
        item.quantity = document.getElementById('quantity').value;
        // Retrieve the data table from localStorage
        let cartItems = localStorage.getItem('cartItems');
        // Convert this data to JSON
        cartItems = JSON.parse(cartItems);
        // If the cart is empty
        if (cartItems) {
            // Look through all the cart
            for (let i = 0; i < cartItems.length; i++) {
                // If the product already exists in the cart
                if (cartItems[i].id === item.id) {
                    // Add the quantity to the old value.
                    document.getElementById('productAddedTitle').textContent = 'La quantité a été changée !';
                    cartItems[i].quantity = parseInt(cartItems[i].quantity);
                    cartItems[i].quantity += parseInt(item.quantity);
                    // Send data back to storage as a STRING
                    localStorage.setItem('cartItems', JSON.stringify(cartItems));
                    break;
                } else if (i === (cartItems.length - 1) && cartItems[i] !== item.id) {
                    document.getElementById('productAddedTitle').innerHTML = `
                    <i class="fas fa-check-circle text-success mr-sm-3"></i>Article ajouté !
                    `
                    // Add the object in this table
                    cartItems.push(item);
                    // Send data back to storage as a STRING
                    localStorage.setItem('cartItems', JSON.stringify(cartItems));
                    break;
                }
            }
        } else {
            document.getElementById('productAddedTitle').innerHTML = `
                <i class="fas fa-check-circle text-success mr-sm-3"></i>Premier article dans votre panier !
            `
            // initialize an array
            cartItems = [];
            // Add the object in this table
            cartItems.push(item);
            // Send data back to storage as a STRING
            localStorage.setItem('cartItems', JSON.stringify(cartItems));
        }
        onLoadCartNumbers();
    })
}

/////////////////////////////////////////////////////////////////////
// Make a request with the _ID url and then throw the layout function
/////////////////////////////////////////////////////////////////////
getProductDatas(productUrl, 'GET', 'json')
    .then(function (product) {
        setLayout(product);
        addToCart(product);
        document.getElementById('addToCartBtn').addEventListener('click', function (e) {
            popup(e, 'productAdded');
        });
    })
    .catch(error => {
        displayError()
        console.log(error);
    })