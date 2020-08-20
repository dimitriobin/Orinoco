<<<<<<< HEAD
=======
/*
// let xhr = new XMLHttpRequest();
// xhr.open('GET', 'http://localhost:3000/api/teddies');
// xhr.responseType = 'json';
// xhr.onload = function () {
//     if (xhr.status === 200) {
//         console.log(xhr.response);
//     } else {
//         console.error('ERROR');
//     }
// };
// xhr.send();
*/

>>>>>>> 395bf08b7fe3d8190153512b0126cacb22823352
let teddiesBtn = document.getElementById('oriTeddies');
let camerasBtn = document.getElementById('oriCameras');
let furnituresBtn = document.getElementById('oriFurnitures');

<<<<<<< HEAD
const teddiesAPI = 'http://localhost:3000/api/teddies';
const camerasAPI = 'http://localhost:3000/api/cameras';
const furnitureAPI = 'http://localhost:3000/api/furniture';


// How to throw the list in the DOM 
=======

// How to throw the list in the DOM
>>>>>>> 395bf08b7fe3d8190153512b0126cacb22823352
function showProducts(datas) {
    let listOfProducts = document.querySelector('#listOfProdutcs');
    listOfProducts.innerHTML = '';
    for (let i = 0; i < datas.length; i++) {
<<<<<<< HEAD
=======
        console.log(datas[i]);
>>>>>>> 395bf08b7fe3d8190153512b0126cacb22823352
        let article = document.createElement('article');
        let productImg = datas[i].imageUrl;
        let productName = datas[i].name;
        let productDescription = datas[i].description;
        let productPrice = datas[i].price;
<<<<<<< HEAD
        let productId = datas[i]._id

        article.setAttribute('class', 'mb-3 border w-100');
        article.innerHTML = '<div class="row"><div class="col-12 col-md-5 my-auto"><img src=' + productImg + ' alt="Une photographie de ' + productName + '" class="card-img h-100"></div><div class="col-12 col-md-7"><div class="card-body"><h3 class="card-title">' + productName + '</h5><p class="card-text mb-1">' + productDescription + '</p><p class="card-text text-muted mb-1">Prix : ' + productPrice + '</p><a href="pages-html/produits.html?id=' + productId + '" class="stretched-link" aria-label="Voir la fiche de ce produit"></div></div></div>';
=======

        article.setAttribute('class', 'mb-3 border w-100');
        article.innerHTML = '<div class="row"><div class="col-12 col-md-5 my-auto"><img src=' + productImg + ' alt="Une photographie de ' + productName + '" class="card-img h-100"></div><div class="col-12 col-md-7"><div class="card-body"><h3 class="card-title">' + productName + '</h5><p class="card-text mb-1">' + productDescription + '</p><p class="card-text text-muted mb-1">Prix : ' + productPrice + '</p></div></div></div>';
>>>>>>> 395bf08b7fe3d8190153512b0126cacb22823352
        listOfProducts.appendChild(article);
    }
};

<<<<<<< HEAD
// XHR method
// function getDatas(url) {
//     const xhr = new XMLHttpRequest();
//     xhr.open('GET', url);
//     xhr.responseType = 'json';
//     xhr.onload = function () {
//         if (xhr.status === 200) {
//             showProducts(xhr.response);
//         } else {
//             console.error('ERROR');
//         }
//     };
//     xhr.send();
// }

// Fetch method
function getDatas(url) {
    fetch(url)
=======
// Fetch datas for teddies
function getTeddies() {
    fetch('http://localhost:3000/api/teddies')
>>>>>>> 395bf08b7fe3d8190153512b0126cacb22823352
        .then(function (response) {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error(response.status);
            }
        }).then(function (data) {
            showProducts(data);
        })
};
<<<<<<< HEAD


// Event on theme's buttons 
teddiesBtn.addEventListener('click', function () {
    getDatas(teddiesAPI)
});
camerasBtn.addEventListener('click', function () {
    getDatas(camerasAPI)
});
furnituresBtn.addEventListener('click', function () {
    getDatas(furnitureAPI)
});
=======

// Fetch datas for cameras
function getCameras() {
    fetch('http://localhost:3000/api/cameras')
        .then(function (response) {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error(response.status);
            }
        }).then(function (data) {
            showProducts(data);
        })
};

// Fetch datas for furniture
function getFurnitures() {
    fetch('http://localhost:3000/api/furniture')
        .then(function (response) {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error(response.status);
            }
        }).then(function (data) {
            showProducts(data);
        })
};

teddiesBtn.addEventListener('click', getTeddies);
camerasBtn.addEventListener('click', getCameras);
furnituresBtn.addEventListener('click', getFurnitures);
>>>>>>> 395bf08b7fe3d8190153512b0126cacb22823352
