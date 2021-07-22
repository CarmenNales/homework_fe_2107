const {numberOfProductsToSell} = require('../main');

test('The numberOfProductsToSell() loops trough the array with objects and tells the products to sell', () => {

    // ARRANGE
    const inventory = [
        {
            originalStock: 10,
            sold: 5,
        },
        {
            originalStock: 5,
            sold: 5,
        },
        {
            originalStock: 10,
            sold: 8,
        },
    ]

    // ACT
    let sumOfProducts = 0;

    inventory.map((product) => {
        return sumOfProducts += (product.originalStock - product.sold)
    });

    // ASSERT
    expect(sumOfProducts).toBe(7);
});
