import products from '../src/data/f&s-data.js';
// import order from '../src/data/order.js';
import { findProduct, getLineTotal } from '../src/register.js';

const test = QUnit.test;

QUnit.module('Register');

test('Find Product with Code', assert => {
    //arrange
    const code = 'ground-chuck';
    const expected = {
        code: 'ground-chuck',
        name: 'Ground Chuck',
        image: './assets/ground-chuck.png',
        description: 'Lean, ground chuck. (Does not come in patties)',
        category: 'food',
        price: 2.00,
        cost: 1.00,
    };

    //act
    const foundProduct = findProduct(products, code);

    //assert
    assert.deepEqual(foundProduct, expected);
});

test('Get line total', assert => {
    //arrange
    const quantity = 4;
    const price = 2.00;
    const expected = 8.00;

    //act
    const total = getLineTotal(quantity, price);

    //assert
    assert.equal(total, expected);
});