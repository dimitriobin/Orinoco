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

// Fetch datas for teddies
function fetchDatas(url) {
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
}

function showProducts(datas) {
    let
    for (let i = 0; i < datas.length; i++) {

    }
}

fetchDatas('http://localhost:3000/api/teddies');