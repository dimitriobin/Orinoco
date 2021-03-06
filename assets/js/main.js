// APIs
const teddiesAPI = 'https://p05-orinoco-api.herokuapp.com/api/teddies';
const camerasAPI = 'https://p05-orinoco-api.herokuapp.com/api/cameras';
const furnitureAPI = 'https://p05-orinoco-api.herokuapp.com/api/furniture';
const teddiesOrderAPI = 'https://p05-orinoco-api.herokuapp.com/api/teddies/order';
const camerasOrderAPI = 'https://p05-orinoco-api.herokuapp.com/api/cameras/order';
const furnitureOrderAPI = 'https://p05-orinoco-api.herokuapp.com/api/furniture/order';

//////////////////////////////////////
// XHR method for GET and POST methods
//////////////////////////////////////
function getProductDatas(theme, method, responseType, sendData, contentType) {
    return new Promise(function (resolve, reject) {
        const xhr = new XMLHttpRequest();
        xhr.open(method, `https://p05-orinoco-api.herokuapp.com/api/${theme}`);
        xhr.responseType = responseType;
        xhr.setRequestHeader('Content-Type', contentType);
        xhr.onreadystatechange = function () {
            if (this.readyState === 4) {
                if ((this.status >= 200) && (this.status < 300)) {
                    resolve(xhr.response)
                    console.log(xhr.status)
                } else if ((this.status >= 500) && (this.status < 600)) {
                    let main = document.querySelector('main');
                    main.innerHTML = '';
                    main.innerHTML += `
                            <h1>Notre serveur rencontre un problème technique</h1>
                            <p>Veuillez attendre quelques minutes puis actualiser la page.
                            <br>Nous essayons de résoudre le problème dans les plus brefs délais</p>
                        `
                } else {
                    let error = {
                        status: xhr.status,
                        statusText: xhr.statusText
                    }
                    reject(error);
                }
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
    });

    window.addEventListener('keydown', (e) => {
        if (e.key === "Escape") {
            modalBg.classList.remove('modal-bg-active');
            Array.from(document.body.children).forEach(child => {
                if (child !== modalBg) {
                    child.inert = false;
                }
            });
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