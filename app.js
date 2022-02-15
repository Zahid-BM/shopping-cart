
function phoneQttyPrice(isIncrease) {
    const getInput = document.getElementById('input-phone-qtty');
    const getInputValue = getInput.value;
    let getInputValueNumber = parseInt(getInputValue);
    if (isIncrease == true) {
        getInputValueNumber = getInputValueNumber + 1;
        getInput.value = getInputValueNumber
    }
    else if (getInputValueNumber > 0) {
        getInputValueNumber = getInputValueNumber - 1;
        getInput.value = getInputValueNumber
    }
    const getPhonePrice = document.getElementById('phone-price');
    const phonePriceInnerText = getPhonePrice.innerText;
    getPhonePrice.innerText = 1219 * getInputValueNumber;
}
// event handler for btn-phone-add 
document.getElementById('btn-phone-add').addEventListener('click', function () {
    phoneQttyPrice(true);
})
// event handler for btn-phone-deduct
document.getElementById('btn-phone-deduct').addEventListener('click', function () {
    phoneQttyPrice(false);
})
