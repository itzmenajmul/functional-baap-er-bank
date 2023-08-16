document.getElementById('btn-withdraw').addEventListener('click', function () {
    // get withdraw amount by using function
    const newWithdrawAmount = getInputFieldValueById('withdraw-field');
    // get previous withdraw amount using function
    const previousWithdrawTotal = getTextElementValueById('withdraw-total');
    // validation
    if (isNaN(newWithdrawAmount)) {
        alert('please provide valid amount');
        return;
    }
    if (typeof newWithdrawAmount !== "number") {
        alert('please provide valid amount');
        return;
    }
    if (newWithdrawAmount <= 0) {
        alert('please provide valid amount');
        return;
    }
    if (newWithdrawAmount > previousWithdrawTotal) {
        alert('not enough money for withdraw');
        return;
    }
    // calculate new withdraw total and set the value
    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    // set new withdraw total by using function
    setTextElementValueById('withdraw-total', newWithdrawTotal);
    // get previous balance total by using function
    const previousBalanceTotal = getTextElementValueById('balance-total');
    // calculate new balance total
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    // set balance total by using function
    setTextElementValueById('balance-total', newBalanceTotal);


})