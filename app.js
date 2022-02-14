document.getElementById('btn-phone-add').addEventListener('click', function () {
    const getInput = document.getElementById('input-phone-qtty');
    const getInputValue = getInput.value;
    const getInputValueNumber = parseInt(getInputValue);
    const getInputQtty = getInputValueNumber + 1;
    getInput.value = getInputQtty
})