import {
    teddiesOrderAPI,
    camerasOrderAPI,
    furnitureOrderAPI,
    request
} from './main';

let submitBtn = document.getElementById('submitRequest');
// Récupérer les données du panier
let cartItems = localStorage.getItem('cartItems');
cartItems = JSON.parse(cartItems);

// Initialiser l'objet contenant les tableau respectifs aux boutiques des produits commandés, 
let shops = new Object();


// fonction pour trier les produits du panier par boutique
function sortByShops() {
    // Pour chaque produit du panier, placer chaque produit dans le tableau correspondant à son theme 
    let teddies;
    let cameras;
    let furniture;
    for (let i = 0; i < cartItems.length; i++) {
        const element = cartItems[i];

        if (element.theme === 'teddies') {
            if (teddies) {
                teddies.push(element.id);
                continue;
            } else {
                teddies = [];
                teddies.push(element.id);
                continue;
            }
        } else if (element.theme === 'cameras') {
            if (cameras) {
                cameras.push(element.id);
                continue;
            } else {
                cameras = [];
                cameras.push(element.id);
                continue;
            }
        } else if (element.theme === 'furniture') {
            if (furniture) {
                furniture.push(element.id);
                continue;
            } else {
                furniture = [];
                furniture.push(element.id);
                continue;
            }
        }
    }
    // si la variable contient quelquechose, créer deux propriétés : une pour l'adresse de la requete, une autre contenant le tableau avec les IDs
    if (teddies) {
        shops.teddies = {
            products: teddies,
            orderAddress: teddiesOrderAPI
        }
    }
    if (cameras) {
        shops.cameras = {
            products: cameras,
            orderAddress: camerasOrderAPI
        }
    }
    if (furniture) {
        shops.furniture = {
            products: furniture,
            orderAddress: furnitureOrderAPI
        }
    }
    return shops;
}


// fonction pour créer le corps de la requete a envoyer
function bodyRequest(theme) {
    let contact = {};
    // Inclure les valeurs du formulaire dans l'object contact
    contact.firstName = document.querySelector('#firstName').value;
    contact.lastName = document.querySelector('#lastName').value;
    contact.address = document.querySelector('#address').value;
    contact.city = document.querySelector('#city').value;
    contact.email = document.querySelector('#email').value;
    // Prendre le tableau trié de la boutique et le mettre dans la variable 'products'
    let products = theme;
    let body = {
        contact,
        products
    };
    return body;
}

// fonction pour envoyer la reponse du serveur au localStorage afin d'utiliser les données ultérieurement
function orderStorage(order) {
    let orders = localStorage.getItem('orders');
    orders = JSON.parse(orders);
    // si il y'a déjà eu une commande précédement :
    if (orders) {
        // Insérer les nouvelles données dans le tableau
        orders.push(order);
        // Renvoyer le nouveau tableau dans le storage
        localStorage.setItem('orders', JSON.stringify(orders));
        console.log("encore une nouvelle commande");
    } else {
        // sinon, initialiser le tableau des commandes
        orders = [];
        orders.push(order);
        // Envoyer les données dans le storage
        localStorage.setItem('orders', JSON.stringify(orders));
        console.log('Commande envoyée !')
    }
}

// 
function order() {
    return new Promise(function (resolve, reject) {
        shops = sortByShops();
        if (shops) {
            for (const shop in shops) {
                let thisShop = shops[shop];
                let body = bodyRequest(thisShop.products);
                body = JSON.stringify(body);
                request(thisShop.orderAddress, 'POST', 'text', body, 'application/json')
                    .then((response) => {
                        orderStorage(response)
                        console.log('la commande pour ' + thisShop + ' est passée !')
                    })
            }
        } else {
            reject(console.log('une erreur est survenue'))
        }
    })
}

submitBtn.addEventListener('click', function (e) {
    e.preventDefault();
    this.setAttribute('disabled', '');
    order().then(function () {
        // Lancer la redirection
        console.log("window.location = 'confirmation.html'")
    })
});