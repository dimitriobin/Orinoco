import {
    getProductDatas,
    convertPrice
} from './main';

let shopsBtn = document.querySelectorAll('#shopsBtn button')

//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
// Fetch the datas for all product in the shop and display it in the DOM
//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
function displayProductByShop(shop) {
    let listOfProducts = document.querySelector('#listOfProdutcs');
    // clean the layout for displaying just this shop
    listOfProducts.innerHTML = '';
    getProductDatas(shop, 'GET', 'json')
        .then(function (datas) {
            // looping through each product datas
            datas.forEach(product => {
                let article = document.createElement('article');
                article.classList.add('mb-3', 'border', 'w-100');
                article.innerHTML += `    
                    <div class="row">
                            <img src=${product.imageUrl} alt="Une photographie de ${product.name}" class="card-img h-100 col-12 col-md-5 my-auto">
                        <div class="col-12 col-md-7">
                            <div class="card-body">
                                <h3 class="card-title">${product.name}</h3>
                                <p class="card-text mb-1">${product.description}</p>
                                <p class="card-text text-muted mb-1">Prix : ${convertPrice(product.price)}</p>
                                <a href="pages-html/produits.html?id=${product._id}&theme=${shop}" class="btn btn-light text-dark mt-3 stretched-link">Voir la fiche de ce produit</a>
                            </div>
                        </div>
                    </div>
            
                    `
                listOfProducts.appendChild(article);
            })
        })
        .catch(error => {
            console.log(error);
            listOfProducts.innerHTML += `
                <article class='mt-5 w-100'>
                    <div class="row justify-content-center align-items-center">
                        <div class="col-12 col-md-7 text-center">
                            <h2>Une erreur est survenue</h2>
                            <p>Veuillez actualiser la page et réessayer ultérieurement, si le problème persiste contactez-nous via la rubrique 'contact' en bas de cette page.</p>
                        </div>
                    </div>
                </article>
            `

        })
};

//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
// add an eventListener to each button, lauch the product's displaying if clicked
//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
shopsBtn.forEach(btn => {
    btn.addEventListener('click', function (e) {
        e.preventDefault();
        displayProductByShop(btn.getAttribute('id'));
    });
})