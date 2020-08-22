import {
    teddiesAPI,
    camerasAPI,
    furnitureAPI,
    request,
    onLoadCartNumbers,
    convertPrice
} from './main';


// Looking through the url and put informations within constants
const params = new URLSearchParams(window.location.search);
const productId = params.get('id');
const productTheme = params.get('theme');
const productUrl = 'http://localhost:3000/api/' + productTheme + '/' + productId;
let addToCartBtn = document.getElementById('addToCartBtn');


// Take the informations form the product obj and set the page with
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
    document.getElementById('productImg').setAttribute('src', product.imageUrl);
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



function cart(product) {
    // put the datas in an object
    let item = new Object();
    item.id = product._id;
    item.theme = productTheme;
    item.imgUrl = product.imageUrl;
    item.name = product.name;
    item.price = product.price;
    // Ecouter le boutton "Ajouter au panier"
    addToCartBtn.addEventListener('click', function () {
        // Ajouter la valeur de la quantité choisie à l'objet du produit
        item.quantity = document.getElementById('quantity').value;
        // Récupérer le tableau de données du localStorage
        let cartItems = localStorage.getItem('cartItems');
        // Convertir ces données en JSON
        cartItems = JSON.parse(cartItems);
        // Si le panier est vide
        if (cartItems) {
            // Regarder dans tous le panier
            for (let i = 0; i < cartItems.length; i++) {
                // Si le produit existe déjà dans le panier
                if (cartItems[i].id === item.id) {
                    // Ajouter la quantité à l'ancienne valeur.
                    console.log("Quantité changée !");
                    cartItems[i].quantity = parseInt(cartItems[i].quantity);
                    cartItems[i].quantity += parseInt(item.quantity);
                    // Renvoyer les données dans le storage sous forme de STRING
                    localStorage.setItem('cartItems', JSON.stringify(cartItems));
                    break;
                } else if (i === (cartItems.length - 1) && cartItems[i] !== item.id) {
                    console.log("Produit ajouté !")
                    // Ajouter l'objet dans ce tableau
                    cartItems.push(item);
                    // Renvoyer les données dans le storage sous forme de STRING
                    localStorage.setItem('cartItems', JSON.stringify(cartItems));
                    break;
                }
            }
        } else {
            console.log("Premier produit dans le panier !")
            // Créer un tableau
            cartItems = [];
            // Ajouter l'objet dans ce tableau
            cartItems.push(item);
            // Renvoyer les données dans le storage sous forme de STRING
            localStorage.setItem('cartItems', JSON.stringify(cartItems));
        }
        onLoadCartNumbers();
    })
}

// Make a request with the _ID url and then throw the layout function
request(productUrl, 'GET')
    .then(function (product) {
        setLayout(product);
        cart(product);
    });