
function getLineTotal() {
}

export function findProduct(products, code) {
    for(let i = 0; i < products.length; i++){
        const product = products[i];
        if(product.code === code) {
            return product;
        }
    }
    return null;
}

function getOrderTotal() {

}
