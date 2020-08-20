let teddiesBtn = document.getElementById('oriTeddies');
let camerasBtn = document.getElementById('oriCameras');
let furnituresBtn = document.getElementById('oriFurnitures');

const teddiesAPI = 'http://localhost:3000/api/teddies';
const camerasAPI = 'http://localhost:3000/api/cameras';
const furnitureAPI = 'http://localhost:3000/api/furniture';


// How to throw the list in the DOM 
function showProducts(datas) {
    let listOfProducts = document.querySelector('#listOfProdutcs');
    listOfProducts.innerHTML = '';
    for (let i = 0; i < datas.length; i++) {
        let article = document.createElement('article');
        let productImg = datas[i].imageUrl;
        let productName = datas[i].name;
        let productDescription = datas[i].description;
        let productPrice = datas[i].price;
        let productId = datas[i]._id

        article.setAttribute('class', 'mb-3 border w-100');
        article.innerHTML = '<div class="row"><div class="col-12 col-md-5 my-auto"><img src=' + productImg + ' alt="Une photographie de ' + productName + '" class="card-img h-100"></div><div class="col-12 col-md-7"><div class="card-body"><h3 class="card-title">' + productName + '</h5><p class="card-text mb-1">' + productDescription + '</p><p class="card-text text-muted mb-1">Prix : ' + productPrice + '</p><a href="pages-html/produits.html?id=' + productId + '" class="stretched-link" aria-label="Voir la fiche de ce produit"></div></div></div>';
        listOfProducts.appendChild(article);
    }
};

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