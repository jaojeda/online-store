import products from '../data/f&s-data.js';

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

};

export default store;