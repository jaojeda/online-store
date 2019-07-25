import store from '../src/data/store.js';

const test = QUnit.test;

QUnit.module('Store Object');

store.storage = window.sessionStorage;

QUnit.testStart(() => {
    store.storage.clear();
});

test('to i get the same object', assert => {
    //arrange
    const car = { make: 'dodge ' };
    const key = 'car';  
    
    //act
    store.save(key, car);
    const expected = store.get(key);

    //assert
    assert.deepEqual(expected, car);

});