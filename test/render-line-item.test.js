import products from '../src/data/f&s-data.js';
import { findProduct } from '../src/register.js';
import { renderLineItem } from '../src/render-line-item.js';

const test = QUnit.test;

QUnit.module('Render Line Item');

test('Get line items to render', assert => {
    //arrange
    const lineItem = {
        code: 'ground-chuck',
        quantity: 2,
    };
    const groundChuck = findProduct(products, lineItem.code);
    const expected = '<tr><td class="align-right">2 x</td><td>Ground Chuck</td><td>$2.00</td><td class="align-right">$4.00</td></tr>';

    //act
    const dom = renderLineItem(lineItem, groundChuck);
    const html = dom.outerHTML;

    //assert
    assert.equal(html, expected);
});