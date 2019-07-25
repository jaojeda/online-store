
import { renderLineItem } from './render-line-item.js';
import { getOrderTotal } from './register.js';
import { toUSD } from './currency.js';
import store from './data/store.js';

const tbody = document.querySelector('tbody');
const totalDisplay = document.getElementById('order-total');
const order = store.getShoppingCart();
const products = store.getProducts();


for(let i = 0; i < order.length; i++) {
    const itemLine = order[i];
    const product = store.getProduct(itemLine.code);
    const dom = renderLineItem(itemLine, product);

    tbody.appendChild(dom);
}

// calc order total
const orderTotal = getOrderTotal(order, products);

// assign to total cell
totalDisplay.textContent = toUSD(orderTotal);