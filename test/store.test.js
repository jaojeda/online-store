import store from '../src/data/store.js';
import products from '../src/data/f&s-data.js';

const test = QUnit.test;

QUnit.module('Store Object');

store.storage = window.sessionStorage;

QUnit.testStart(() => {
    store.storage.clear();
});

test('do i get the same object', assert => {
    //arrange
    const car = { make: 'dodge ' };
    const key = 'car';  
    
    //act
    store.save(key, car);
    const expected = store.get(key);

    //assert
    assert.deepEqual(expected, car);
});

test('am i storing the inventory into storage', assert => {
    //act
    const productInventory = store.getProducts();
    //assert
    assert.deepEqual(productInventory, products);
});
