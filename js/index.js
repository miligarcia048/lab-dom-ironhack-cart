// ITERATION 1

function updateSubtotal(product) {
    // console.log('Calculating subtotal, yey!');

    const price = product.querySelector('.price span').innerHTML;
    const quantity = product.querySelector('.quantity input').value;

    const totalPrice = price * quantity;

    const subtotal = (product.querySelector('.subtotal span').innerHTML =
        totalPrice);

    subtotal.innerHTML = totalPrice;
    return totalPrice;
}

function calculateAll() {
    // code in the following two lines is added just for testing purposes.
    // it runs when only iteration 1 is completed. at later point, it can be removed.
    // const singleProduct = document.querySelector('.product');
    // updateSubtotal(singleProduct);
    // end of test

    // ITERATION 2

    const products = document.getElementsByClassName('product');

    let total = 0;

    Array.prototype.forEach.call(products, function(node) {
        for (i = 0; products.length > i; i++) {
            return (total += updateSubtotal(node));
        }

        return updateSubtotal(node);
    });
    //
    // ITERATION 3
    //... your code goes here

    let totalValueElement = document.querySelector('#total-value span');
    totalValueElement.innerText = total;
    return total;
}

// ITERATION 4

function removeProduct(event) {
    const target = event.currentTarget;
    console.log('The target in remove is:', target);

    target.parentNode.parentNode.remove();
}

// ITERATION 5

function createProduct() {
    const name = document.querySelector('.newProductName input').value;
    const quantity = document.querySelector('.newProductPrice input').value;

    const newProduct = document.createElement('tr');
    newProduct.classList.add('product');
    newProduct.innerHTML =
        ' <td class = "name" ><span>' +
        name +
        '</span> </td> <td class = "price"> $ <span> 25.00 </span></td ><td class = "quantity" ><input type = "number" value = "' +
        quantity +
        '" min = "0" placeholder = "Quantity"/ ></td> <td class = "subtotal" > $ <span> 0 </span></td> <td class = "action"> <button class = "btn btn-remove"> Remove </button> </td> ';

    document.querySelector('tbody').append(newProduct);
}

window.addEventListener('load', () => {
    const calculatePricesBtn = document.getElementById('calculate');
    calculatePricesBtn.addEventListener('click', calculateAll);

    //... your code goes here
    const removeButtons = document.querySelectorAll('.btn-remove');
    [...removeButtons].forEach((element) => {
        element.addEventListener('click', removeProduct);
    });

    const button = document.getElementById('create');
    button.addEventListener('click', createProduct);
});