import order from './data/order.js';
import products from './data/f&s-data.js';
import { renderLineItem } from './render-line-item.js';
import { findProduct, getOrderTotal } from './register.js';
import { toUSD } from './currency.js';

const tbody = document.querySelector('tbody');
const totalDisplay = document.getElementById('order-total');

for(let i = 0; i < order.length; i++) {
    const itemLine = order[i];
    const product = findProduct(products, itemLine.code);
    const dom = renderLineItem(itemLine, product);

    tbody.appendChild(dom);
}

// calc order total
const orderTotal = getOrderTotal(order, products);

// assign to total cell
totalDisplay.textContent = toUSD(orderTotal);