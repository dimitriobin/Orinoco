import {
    teddiesAPI,
    camerasAPI,
    furnitureAPI,
    request,
    convertPrice
} from './main';

let teddiesBtn = document.getElementById('oriTeddies');
let camerasBtn = document.getElementById('oriCameras');
let furnituresBtn = document.getElementById('oriFurnitures');

// How to throw the list in the DOM 
function showProducts(url, productTheme) {
    request(url, 'GET')
        .then(function (datas) {
            console.log(datas);
            let listOfProducts = document.querySelector('#listOfProdutcs');
            listOfProducts.innerHTML = '';
            for (let i = 0; i < datas.length; i++) {
                let article = document.createElement('article');
                let productImg = datas[i].imageUrl;
                let productName = datas[i].name;
                let productDescription = datas[i].description;
                let productPrice = convertPrice(datas[i].price);
                let productId = datas[i]._id

                article.setAttribute('class', 'mb-3 border w-100');
                article.innerHTML = '<div class="row"><div class="col-12 col-md-5 my-auto"><img src=' + productImg + ' alt="Une photographie de ' + productName + '" class="card-img h-100"></div><div class="col-12 col-md-7"><div class="card-body"><h3 class="card-title">' + productName + '</h5><p class="card-text mb-1">' + productDescription + '</p><p class="card-text text-muted mb-1">Prix : ' + productPrice + '</p><a href="pages-html/produits.html?id=' + productId + '&theme=' + productTheme + '" class="stretched-link" aria-label="Voir la fiche de ce produit"></div></div></div>';
                listOfProducts.appendChild(article);
            }
        });
};

// Event on theme's buttons
teddiesBtn.addEventListener('click', function () {
    showProducts(teddiesAPI, 'teddies');
});
camerasBtn.addEventListener('click', function () {
    showProducts(camerasAPI, 'cameras');
});
furnituresBtn.addEventListener('click', function () {
    showProducts(furnitureAPI, 'furniture');
});