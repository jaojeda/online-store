
export function getLineTotal(quantity, price) {
    return Number((quantity * price).toFixed(2));
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

export function getOrderTotal(order, products) {
    // declare order total variable
    let orderTotal = 0;

    // loop the array of cart (line items)
    for(let i = 0; i < order.length; i++){
        const shoppingCartItemCode = order[i].code;
        // lookup the product
        const shoppingCartItem = findProduct(products, shoppingCartItemCode);
        // calc line total
        const lineTotal = getLineTotal(order[i].quantity, shoppingCartItem.price);
        // add to order total
        orderTotal += lineTotal;
    }
    // return order total
    return orderTotal; 
}