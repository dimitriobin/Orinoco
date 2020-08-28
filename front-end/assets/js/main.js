// APIs
const teddiesAPI = 'http://localhost:3000/api/teddies';
const camerasAPI = 'http://localhost:3000/api/cameras';
const furnitureAPI = 'http://localhost:3000/api/furniture';
const teddiesOrderAPI = 'http://localhost:3000/api/teddies/order';
const camerasOrderAPI = 'http://localhost:3000/api/cameras/order';
const furnitureOrderAPI = 'http://localhost:3000/api/furniture/order';

// XHR method
function request(url, method, responseType, sendData, contentType) {
    return new Promise(function (resolve, reject) {
        const xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.responseType = responseType;
        xhr.setRequestHeader('Content-Type', contentType);
        xhr.onload = function () {
            if (this.status >= 200 && this.status < 300 && this.readyState === 4) {
                resolve(xhr.response)
            } else {
                reject({
                    status: this.status,
                    statusText: xhr.statusText
                });
            }
        }
        xhr.send(sendData);
    })
}

// Display the number of product in the header (aside the cart icon)
function onLoadCartNumbers() {
    let productNumber = localStorage.getItem('cartItems');
    productNumber = JSON.parse(productNumber);
    if (productNumber) {
        document.querySelector('.cart span').textContent = productNumber.length;
    }
}
// initialize it
onLoadCartNumbers();

// Permet de convertir la chaine de charactere pour une meilleure lisibilté du prix
function convertPrice(input) {
    let price = JSON.stringify(input);
    let output
    if (price.length <= 5) {
        output = price.slice(0, -2) + ',' + price.slice(-2) + '€';
        return output;
    } else if (price.length >= 6 && price.length <= 8) {
        output = price.slice(0, -5) + ' ' + price.slice(-5, -2) + ',' + price.slice(-2) + '€';
        return output;
    } else if (price.length >= 9) {
        output = price.slice(0, -9) + ' ' + price.slice(-8, -5) + ' ' + price.slice(-5, -2) + ',' + price.slice(-2) + '€';
        return output
    }
}

// popup function
function popup(btn, modal) {
    let body = document.querySelector('body');
    let modalBtn = document.querySelector(btn);
    let modalBg = document.querySelector(modal)

    modalBtn.addEventListener('click', function (e) {
        e.stopPropagation()
        modalBg.classList.add('modal-bg-active');

        body.addEventListener('click', function () {
            modalBg.classList.remove('modal-bg-active');
        })
    });


}

// Informations pour le contact dans le footer
popup('#aboutPopup', '#aboutUs');

// Informations pour le 'a propos'' dans le footer
popup('#contactPopup', '#contactUs');

export {
    teddiesAPI,
    camerasAPI,
    furnitureAPI,
    teddiesOrderAPI,
    camerasOrderAPI,
    furnitureOrderAPI,
    request,
    onLoadCartNumbers,
    convertPrice,
    popup
};