document.getElementById('btn-deposit').addEventListener('click',function (){   
    // get input value 
    const newDepositAmount = getInputValueById('deposit-field');
    // get previous deposit value 
    const previousDepositAmount = getElementValueById('deposit-total');
    // calculate new deposit total 
    const currentDepositAmount = previousDepositAmount + newDepositAmount;
    // set current total deposit amount
    setElementValueById('deposit-total',currentDepositAmount);

    // get previous total balance 
    const previousBalanceTotal = getElementValueById('balance-total');
    // calculate current total balance
    const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
    // set current total balance
    setElementValueById('balance-total',currentBalanceTotal);
})