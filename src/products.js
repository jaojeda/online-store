import products from './data/f&s-data.js'
import renderProducts from './render-products.js';

const list = document.getElementById('products');

for(let i = 0; i < products.length; i++) {
    const product = products[i];
    const disp = renderProducts(product);
    list.appendChild(disp);
}