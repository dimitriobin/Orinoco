import {
    teddiesAPI,
    camerasAPI,
    furnitureAPI,
    request,
    onLoadCartNumbers,
    convertPrice,
    popup
} from './main';


// Looking through the url and put informations within constants
const params = new URLSearchParams(window.location.search);
const productId = params.get('id');
const productTheme = params.get('theme');
const productUrl = `${productTheme}/${productId}`;
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
                    document.getElementById('productAddedTitle').textContent = 'La quantité a été changée !';
                    cartItems[i].quantity = parseInt(cartItems[i].quantity);
                    cartItems[i].quantity += parseInt(item.quantity);
                    // Renvoyer les données dans le storage sous forme de STRING
                    localStorage.setItem('cartItems', JSON.stringify(cartItems));
                    break;
                } else if (i === (cartItems.length - 1) && cartItems[i] !== item.id) {
                    document.getElementById('productAddedTitle').innerHTML += `
                    <i class="fas fa-check-circle text-success mr-sm-3"></i>Article ajouté !
                    `
                    // Ajouter l'objet dans ce tableau
                    cartItems.push(item);
                    // Renvoyer les données dans le storage sous forme de STRING
                    localStorage.setItem('cartItems', JSON.stringify(cartItems));
                    break;
                }
            }
        } else {
            document.getElementById('productAddedTitle').innerHTML += `
                <i class="fas fa-check-circle text-success mr-sm-3"></i>Premier article dans votre panier !
            `
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
request(productUrl, 'GET', 'json')
    .then(function (product) {
        setLayout(product);
        addToCart(product);
        document.getElementById('addToCartBtn').addEventListener('click', function (e) {
            popup(e, 'productAdded');
        });
    });