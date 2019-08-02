import { toUSD } from './currency.js';
import store from './data/store.js';

function renderProducts(product) {
    const li = document.createElement('li');
    li.className = product.category;
    li.title = product.description;

    const h3 = document.createElement('h3');
    h3.textContent = product.name;
    li.appendChild(h3);

    const img = document.createElement('img');
    img.src = product.image;
    img.alt = product.name + ' image';
    li.appendChild(img);

    const p = document.createElement('p');
    p.className = 'price';

    const usd = toUSD(product.price);
    const priceTextNode = document.createTextNode(usd);
    p.appendChild(priceTextNode);

    const button = document.createElement('button');
    button.textContent = 'Add';
    button.value = product.code;
    button.addEventListener('click', () => {
        store.orderProduct(product.code);
    });
    p.appendChild(button);

    li.appendChild(p);

    return li;
}

export default renderProducts;