// APIs
const teddiesAPI = 'http://localhost:3000/api/teddies';
const camerasAPI = 'http://localhost:3000/api/cameras';
const furnitureAPI = 'http://localhost:3000/api/furniture';

// XHR method
function request(url, method) {
    return new Promise(function (resolve, reject) {
        const xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.responseType = 'json';
        xhr.onload = function () {
            if (this.status === 200) {
                resolve(xhr.response)
            } else {
                reject({
                    status: this.status,
                    statusText: xhr.statusText
                });
            }
        }
        xhr.send();
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

export {
    teddiesAPI,
    camerasAPI,
    furnitureAPI,
    request,
    onLoadCartNumbers
};