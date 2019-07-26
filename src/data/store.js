import products from '../data/f&s-data.js';
import { findProduct } from '../register.js';

const store = {
    storage: window.localStorage,
    save(key, product) {
        const json = JSON.stringify(product);
        store.storage.setItem(key, json);
    },
    get(key) {
        const json = store.storage.getItem(key);
        const product = JSON.parse(json);
        return product;
    },
    getProducts() {
        let inventory = store.get('inventoryKey');
        if(!inventory) {
            store.save('inventoryKey', products);
            inventory = products;
        }
        return inventory;
    },
    getShoppingCart() {
        let shoppingCart = store.get('shoppingList');
        if(!shoppingCart) {
            shoppingCart = [];
        }
        return shoppingCart;
    },
    orderProduct(code) {
        const shoppingCart = store.getShoppingCart();
        const addedItem = findProduct(shoppingCart, code);
        if(addedItem) {
            addedItem.quantity++;
        }
        else {
            const addedItem = {
                code: code,
                quantity: 1,
            };
            shoppingCart.push(addedItem);
        }
        store.save('shoppingList', shoppingCart);
    },
    getProduct(code) {
        const products = store.getProducts();
        const product = findProduct(products, code);
        return product;
    },

    addProduct(product) {
        const products = store.getProducts();
        products.push(product);
        store.save('inventoryKey', products);
    },
    
};

export default store;