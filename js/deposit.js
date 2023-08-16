document.getElementById('btn-deposit').addEventListener('click', function () {
    const newDepositAmount = getInputFieldValueById('deposit-field');
    // get previous deposit total by id
    const previousDepositTotal = getTextElementValueById('deposit-total');
    // validation
    if (isNaN(newDepositAmount)) {
        alert('please provide valid amount')
        return;
    }
    if (typeof newDepositAmount !== 'number') {
        alert('please provide valid amount')
        return;
    }
    if (newDepositAmount <= 0) {
        alert('please provide valid amount')
        return;
    }
    // calculate new deposit total
    const newDepositTotal = previousDepositTotal + newDepositAmount;
    // set deposit total value
    setTextElementValueById('deposit-total', newDepositTotal);
    // get previous total balance by using the function
    const previousBalanceTotal = getTextElementValueById('balance-total');
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    // set total balance value
    setTextElementValueById('balance-total', newBalanceTotal);

})