// APIs
const teddiesAPI = 'http://localhost:3000/api/teddies';
const camerasAPI = 'http://localhost:3000/api/cameras';
const furnitureAPI = 'http://localhost:3000/api/furniture';
const teddiesOrderAPI = 'http://localhost:3000/api/teddies/order';
const camerasOrderAPI = 'http://localhost:3000/api/cameras/order';
const furnitureOrderAPI = 'http://localhost:3000/api/furniture/order';

//////////////////////////////////////
// XHR method for GET and POST methods
//////////////////////////////////////
function getProductDatas(theme, method, responseType, sendData, contentType) {
    return new Promise(function (resolve, reject) {
        const xhr = new XMLHttpRequest();
        xhr.open(method, `http://localhost:3000/api/${theme}`);
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
/////////////////////////////////////////////////////////////////////
// Display the number of product in the header (aside the cart icon)
/////////////////////////////////////////////////////////////////////
function onLoadCartNumbers() {
    let productNumber = localStorage.getItem('cartItems');
    productNumber = JSON.parse(productNumber);
    if (productNumber) {
        document.querySelector('.cart span').textContent = productNumber.length;
        document.getElementById('cartDescription').textContent = 'Vous avez actuellement ' + productNumber.length + 'articles dans votre panier';
    }
};
onLoadCartNumbers();

////////////////////////////////////////////////////////////////////////////////////
// take a price in centimes in input and put this price in the format "xx.xx€" in output
//////////////////////////////////////////////////////////////////////////////////////
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

///////////////////////////////////////////////////////
// create a modal or popup message
///////////////////////////////////////////////////////
function popup(e, modal) {
    let body = document.querySelector('body');
    let modalBg = document.getElementById(modal);
    let previousActiveElement;

    e.stopPropagation();

    modalBg.querySelector('.modal').focus();
    previousActiveElement = document.activeElement;

    Array.from(document.body.children).forEach(child => {
        if (child !== modalBg) {
            child.inert = true;
        }
    });
    modalBg.classList.add('modal-bg-active');

    body.addEventListener('click', function () {
        modalBg.classList.remove('modal-bg-active');
        Array.from(document.body.children).forEach(child => {
            if (child !== modalBg) {
                child.inert = false;
            }
        });
        previousActiveElement.focus();
    });

    window.addEventListener('keydown', (e) => {
        if (e.key === "Escape") {
            modalBg.classList.remove('modal-bg-active');
            Array.from(document.body.children).forEach(child => {
                if (child !== modalBg) {
                    child.inert = false;
                }
            });
            previousActiveElement.focus();
        }
    });

}

//////////////////////////////////////////////
// "about us informations" in each footer of each page
///////////////////////////////////////////////
document.getElementById('aboutPopup').addEventListener('click', function (e) {
    popup(e, 'aboutUs');
});


//////////////////////////////////////////////
// "contact informations" in each footer of each page
///////////////////////////////////////////////
document.getElementById('contactPopup').addEventListener('click', function (e) {
    popup(e, 'contactUs');
});

export {
    teddiesAPI,
    camerasAPI,
    furnitureAPI,
    teddiesOrderAPI,
    camerasOrderAPI,
    furnitureOrderAPI,
    onLoadCartNumbers,
    getProductDatas,
    convertPrice,
    popup
};