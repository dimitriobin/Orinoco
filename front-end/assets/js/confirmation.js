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

let orderInformations = localStorage.getItem('orders');
orderInformations = JSON.parse(orderInformations);
let productsOrdered = localStorage.getItem('productsOrdered');
productsOrdered = JSON.parse(productsOrdered);

(function displayOrderReferences() {
    let refList = document.getElementById('refList');
    let date = new Date();
    date = date.toLocaleString(date);

    refList.innerHTML +=
        `
        <tr>
            <td class="text-break">${date}</td>
            <td class="text-break">${orderInformations.orderId}</td>
        </tr>
    `
})();

(function displayClientReferences() {
    let clientReferences = document.getElementById('clientReferences');
    clientReferences.innerHTML += `
        <p>Merci <span class="font-weight-bold">${orderInformations.contact.firstName}</span> <span class="font-weight-bold">${orderInformations.contact.lastName}</span> d'avoir commandé chez Orinoco !</p>
        <p>Un mail de confirmation vous sera envoyé à <span class="font-weight-bold">${orderInformations.contact.email}</span> contenant le récapitulatif de
        votre commande et les informations de livraison à votre adresse <span class="font-weight-bold">${orderInformations.contact.address}</span> à <span class="font-weight-bold">${orderInformations.contact.city}</span>.</p>
    `
})();

(function displayProducts() {
    let articlesOrdered = document.querySelector('#articlesOrdered');
    let total = 0;
    let products = productsOrdered;
    for (let j = 0; j < products.length; j++) {
        const element = products[j];
        articlesOrdered.innerHTML += `
        <article class="card mb-3 border">
            <div class="row no-gutters w-100">
                <div class="col-md-4 my-auto">
                    <img src="${element.imgUrl}" alt="" class="card-img">
                </div>
                <div class="col-md-8">
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
    totalOutput.setAttribute('class', 'lead font-weight-bold');
    articlesOrdered.parentNode.appendChild(totalOutput);
})()