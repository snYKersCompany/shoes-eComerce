export const totalPrice = (products) => {
    let price = 0

    for (let i = 0; i < products.length; i++) {
        price = price + products[i].price
    }
    return price
};



