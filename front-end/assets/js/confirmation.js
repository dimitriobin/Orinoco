import {
    teddiesAPI,
    camerasAPI,
    furnitureAPI,
    teddiesOrderAPI,
    camerasOrderAPI,
    furnitureOrderAPI,
    request,
    onLoadCartNumbers,
    convertPrice
} from './main.js';

let ordersInformation = localStorage.getItem('ordersInformation');
ordersInformation = JSON.parse(ordersInformation);
let productsOrdered = localStorage.getItem('productsOrdered');
productsOrdered = JSON.parse(productsOrdered);

(function displayOrderReferences() {
    let refList = document.getElementById('refList');
    let date = new Date();
    date = date.toLocaleString(date);
    ordersInformation.forEach(shop => {
        refList.innerHTML +=
            `
        <tr>
            <td class="text-break">${shop.theme}</td>
            <td class="text-break">${date}</td>
            <td class="text-break">${shop.orderId}</td>
        </tr>
        `
    })
})();

(function displayClientReferences() {
    let clientReferences = document.getElementById('clientReferences');
    clientReferences.innerHTML += `
        <p>Merci <span class="font-weight-bold">${ordersInformation[0].contact.firstName}</span> <span class="font-weight-bold">${ordersInformation[0].contact.lastName}</span> d'avoir commandé chez Orinoco !</p>
        <p>Un mail de confirmation vous sera envoyé à <span class="font-weight-bold">${ordersInformation[0].contact.email}</span> contenant le récapitulatif de
        votre commande et les informations de livraison à votre adresse <span class="font-weight-bold">${ordersInformation[0].contact.address}</span> à <span class="font-weight-bold">${ordersInformation[0].contact.city}</span>.</p>
    `
})();

(function displayProducts() {
    let articlesOrdered = document.querySelector('#articlesOrdered');
    let total = 0;
    let products = productsOrdered;
    for (let j = 0; j < products.length; j++) {
        const element = products[j];
        articlesOrdered.innerHTML += `
        <article class="card mb-4 border">
            <div class="row no-gutters w-100">
                <img src="${element.imgUrl}" alt="" class="h-100 card-img col-12 col-md-5 my-auto">
                <div class="col-12 col-md-7">
                    <div class="card-body">
                        <h3 class="card-title">${element.name}</h5>
                            <p class="card-text mb-0"><small class="text-muted">ref :
                            ${element.id}</small>
                            </p>
                            <p class="card-text mb-0">Quantité : ${element.quantity}</p>
                            <p class="card-text mb-0">Prix unitaire : ${convertPrice(element.price)}</p>
                            <p class="card-text mb-1 font-weight-bold">Prix du lot : ${convertPrice(element.price * element.quantity)}</p>
                    </div>
                </div>
            </div>
        </article>
    `;
        total += (element.price * element.quantity);
    }
    let totalOutput = document.createElement('p')
    totalOutput.innerHTML = `Prix total de votre commande : ${convertPrice(total)}`;
    totalOutput.setAttribute('class', 'lead font-weight-bold mt-4');
    articlesOrdered.parentNode.appendChild(totalOutput);
})()