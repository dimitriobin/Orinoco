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

let teddiesBtn = document.getElementById('oriTeddies');
let camerasBtn = document.getElementById('oriCameras');
let furnituresBtn = document.getElementById('oriFurnitures');


// How to throw the list in the DOM
function showProducts(datas) {
    let listOfProducts = document.querySelector('#listOfProdutcs');
    listOfProducts.innerHTML = '';
    for (let i = 0; i < datas.length; i++) {
        console.log(datas[i]);
        let article = document.createElement('article');
        let productImg = datas[i].imageUrl;
        let productName = datas[i].name;
        let productDescription = datas[i].description;
        let productPrice = datas[i].price;

        article.setAttribute('class', 'mb-3 border w-100');
        article.innerHTML = '<div class="row"><div class="col-12 col-md-5 my-auto"><img src=' + productImg + ' alt="Une photographie de ' + productName + '" class="card-img h-100"></div><div class="col-12 col-md-7"><div class="card-body"><h3 class="card-title">' + productName + '</h5><p class="card-text mb-1">' + productDescription + '</p><p class="card-text text-muted mb-1">Prix : ' + productPrice + '</p></div></div></div>';
        listOfProducts.appendChild(article);
    }
};

// Fetch datas for teddies
function getTeddies() {
    fetch('http://localhost:3000/api/teddies')
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