import renderProducts from './render-products.js';
import store from './data/store.js';

const list = document.getElementById('products');
const products = store.getProducts();

for(let i = 0; i < products.length; i++) {
    const product = products[i];
    const disp = renderProducts(product);
    list.appendChild(disp);
}