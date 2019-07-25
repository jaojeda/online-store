
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
    }
};

export default store;