import renderProducts from '../src/render-products.js';

const test = QUnit.test;

QUnit.module('Render Products');

test('renders a product', assert => {
    
    //Arrange
    const groundChuck = {
        code: 'gound-chuck',
        name: 'Ground Chuck',
        image: 'assets/ground-chuck.png',
        description: 'Lean, ground chuck. (Does not come in patties)',
        category: 'food',
        price: 2.00,
        cost: 1.00,
    };
    const expected = '<li class="ground-chuck" title="lean ground chuck, wrapped"><h3>Ground Chuck</h3><img src="./assetsground-chuck.png" alt="ground chuck formed into patties"><p class="price">$2.50 <button value="ground-chuck">Add</button></p></li>'

    //Act 
    const dom = renderProducts(groundChuck);
    const html =  dom.outerHTML;

    //Assert
    assert.equal(html, expected);
});
