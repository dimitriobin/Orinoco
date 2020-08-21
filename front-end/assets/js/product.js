import {
    teddiesAPI,
    camerasAPI,
    furnitureAPI,
    request
} from './main';


// Looking through the url and put informations within constants
const params = new URLSearchParams(window.location.search);
const productId = params.get('id');
const productTheme = params.get('theme');
const productUrl = 'http://localhost:3000/api/' + productTheme + '/' + productId;



function setLayout(product) {
    console.log(product);
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
    }
    document.getElementById('productImg').setAttribute('src', product.imageUrl);
    document.getElementById('productImg').parentNode.setAttribute('href', product.imageUrl);
    document.getElementById('productName').textContent = product.name;
    document.getElementById('productRef').textContent = 'REF : ' + product._id;
    document.getElementById('productDesc').textContent = product.description;

    for (let j = 0; j < options.length; j++) {
        document.getElementById('inlineFormCustomSelect').appendChild(document.createElement('option')).textContent = options[j];
    }
    document.getElementById('productPrice').textContent = product.price + '€';
}

request(productUrl, 'GET')
    .then(function (product) {
        setLayout(product);
    })