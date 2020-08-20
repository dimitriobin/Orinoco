// APIs
const teddiesAPI = 'http://localhost:3000/api/teddies';
const camerasAPI = 'http://localhost:3000/api/cameras';
const furnitureAPI = 'http://localhost:3000/api/furniture';

// XHR method
function getDatas(url) {
    return new Promise(function (resolve, reject) {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.responseType = 'json';
        xhr.onload = function () {
            if (xhr.status === 200) {
                resolve(xhr.response)
            } else {
                reject(console.log('error' + xhr.status))
            }
        }
        xhr.send();
    })
}

export {
    teddiesAPI,
    camerasAPI,
    furnitureAPI,
    getDatas
};