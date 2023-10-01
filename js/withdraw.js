document.getElementById('btn-withdraw').addEventListener('click', function () {
    // input part 
    const inputWithdraw = document.getElementById('input-withdraw');
    const inputWithdrawValue = inputWithdraw.value;
    const inputWithdrawString = parseFloat(inputWithdrawValue);
    inputWithdraw.value = '';

    // validation part 
    if (isNaN(inputWithdrawString)) {
        alert('provide valid number');
        return;
    }
    // how much withdraw show amount will set as number part 
    const newWithdraw = document.getElementById('withdraw-total');
    const newWithdrawInner = newWithdraw.innerText;
    const newWithdrawString = parseFloat(newWithdrawInner);

    // how much withdraw show amount will set as number part
    const currentBalance = document.getElementById('balance-total');
    const currentBalanceInner = currentBalance.innerText;
    const currentBalanceString = parseFloat(currentBalanceInner);

    // validation if withdraw amount is greater than total you have 
    if (inputWithdrawString > currentBalanceString) {
        alert('You have given more than you have.');
        return;
    }

    // adding and where to set this
    const totalWithdraw = inputWithdrawString + newWithdrawString;
    newWithdraw.innerText = totalWithdraw;

    // destructing and where to set this 
    const totalBalance = currentBalanceString - inputWithdrawString;
    currentBalance.innerText = totalBalance
})