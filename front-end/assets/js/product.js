import {
    teddiesAPI,
    camerasAPI,
    furnitureAPI,
    getDatas
} from './main';

function findProduct(url) {
    getDatas(url).then
}

let params = new URLSearchParams(window.location.search);
let id = params.get('id');
let productTheme = params.get('theme');
console.log(id, productTheme);