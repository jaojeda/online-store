import { getLineTotal } from './register.js';
import { toUSD } from './currency.js';

function renderLineItem(lineItem, product) {
    const tr = document.createElement('tr');

    const quantityCell = document.createElement('td');
    quantityCell.className = 'align-right';
    quantityCell.textContent = lineItem.quantity + ' x';
    tr.appendChild(quantityCell);

    const nameCell = document.createElement('td');
    console.log('product', product);
    nameCell.textContent = product.name;
    tr.appendChild(nameCell);

    const priceCell = document.createElement('td');
    priceCell.textContent = toUSD(product.price);
    tr.appendChild(priceCell);
    
    const totalCell = document.createElement('td');
    totalCell.className = 'align-right';
    const total = getLineTotal(lineItem.quantity, product.price);
    totalCell.textContent = toUSD(total);
    tr.appendChild(totalCell);

    return tr;
}


export { renderLineItem };