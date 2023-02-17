document.getElementById('btn-withdraw').addEventListener('click',function (){   
    // get input value 
    const newWithdrawAmount = getInputValueById('withdraw-field');
    // get previous withdraw value 
    const previousWithdrawAmount = getElementValueById('withdraw-total');
    // calculate new withdraw total 
    const currentWithdrawAmount = previousWithdrawAmount + newWithdrawAmount;
    // set current total withdraw amount
    setElementValueById('withdraw-total',currentWithdrawAmount);

    // get previous total balance 
    const previousBalanceTotal = getElementValueById('balance-total');
    // calculate current total balance
    const currentBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    // set current total balance
    setElementValueById('balance-total',currentBalanceTotal);
})