// Function for product qtty and price 
function productQttyPrice(product, price, isIncrease) {
    const getProductInput = document.getElementById(product + '-qtty');
    const getProductinputValue = getProductInput.value;
    let getProductinputValueNumber = parseInt(getProductinputValue);
    if (isIncrease == true) {
        getProductinputValueNumber = getProductinputValueNumber + 1;
        getProductInput.value = getProductinputValueNumber;
    }
    else if (getProductinputValueNumber > 0) {
        getProductinputValueNumber = getProductinputValueNumber - 1;
        getProductInput.value = getProductinputValueNumber;
    }
    const getProductPrice = document.getElementById(product + '-price');
    const productPriceInnerText = getProductPrice.innerText;
    getProductPrice.innerText = price * getProductinputValueNumber;
}
// event handler for btn-phone-add 
document.getElementById('phone-add').addEventListener('click', function () {
    productQttyPrice('phone', 1219, true);
})
// event handler for btn-phone-deduct
document.getElementById('phone-deduct').addEventListener('click', function () {
    productQttyPrice('phone', 1219, false);
})
// event handler for btn-case-add 
document.getElementById('case-add').addEventListener('click', function () {
    productQttyPrice('case', 59, true);
})
// event handler for btn-case-deduct
document.getElementById('case-deduct').addEventListener('click', function () {
    productQttyPrice('case', 59, false);
})
