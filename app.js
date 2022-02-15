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
    const total = totalPrice(); /* call total price */
}
function totalPrice() {
    const phoneInputQtty = parseInt(document.getElementById('phone-qtty').value);
    const phoneTotalPrice = phoneInputQtty * 1219;
    const caseInputQtty = parseInt(document.getElementById('case-qtty').value);
    const caseTotalPrice = caseInputQtty * 59;
    const getSubTotal = document.getElementById('subtotal');
    const subTotalAmount = phoneTotalPrice + caseTotalPrice;
    getSubTotal.innerText = subTotalAmount;
    const getTax = document.getElementById('tax');
    const taxAmount = subTotalAmount / 10; /* tax 10% */
    getTax.innerText = taxAmount
    const getTotal = document.getElementById('total');
    const totalAmount = subTotalAmount + taxAmount;
    getTotal.innerText = totalAmount;


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
