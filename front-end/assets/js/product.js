import {
    onLoadCartNumbers,
    getProductDatas,
    convertPrice,
    popup
} from './main';

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
    // put the content in the DOM (in order of appearance)
    document.querySelector('title').textContent = product.name;
    document.getElementById('productImg').setAttribute('src', product.imageUrl);
    document.getElementById('productImg').setAttribute('alt', 'Image du produit ' + product.name + ', cliquez dessus pour l\'ouvrir dans un nouvel onglet');
    document.getElementById('productImg').setAttribute('title', 'Image du produit ' + product.name + ', cliquez dessus pour l\'ouvrir dans un nouvel onglet');
    document.getElementById('productImg').parentNode.setAttribute('href', product.imageUrl);
    document.getElementById('productName').textContent = product.name;
    document.getElementById('productRef').textContent = 'REF : ' + product._id;
    document.getElementById('productDesc').textContent = product.description;
    // create options in the select form
    for (let j = 0; j < options.length; j++) {
        document.getElementById('inlineFormCustomSelect').appendChild(document.createElement('option')).textContent = options[j];
    }
    document.getElementById('productPrice').textContent = convertPrice(product.price);
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
                    document.getElementById('productAddedTitle').innerHTML += `
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
            document.getElementById('productAddedTitle').innerHTML += `
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
    });