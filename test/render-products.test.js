import renderProducts from '../src/render-products.js';

const test = QUnit.test;

QUnit.module('Render Products');
test('renders a product', assert => {
    
    //Arrange

    const groundChuck = {
        code: 'ground-chuck',
        name: 'Ground Chuck',
        image: './assets/ground-chuck.png',
        description: 'Lean, ground chuck. (Does not come in patties)',
        category: 'food',
        price: 2.00,
        cost: 1.00,
    };
    const expected = '<li class="food" title="Lean, ground chuck. (Does not come in patties)"><h3>Ground Chuck</h3><img src="./assets/ground-chuck.png" alt="Ground Chuck image"><p class="price">$2.00<button value="ground-chuck">Add</button></p></li>'

    //Act 
    const dom = renderProducts(groundChuck);
    const html = dom.outerHTML;

    //Assert
    assert.equal(html, expected);
});
