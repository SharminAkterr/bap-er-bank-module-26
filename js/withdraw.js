document.getElementById('btn-withdraw').addEventListener('click', function () {
    const inputWithdraw = document.getElementById('input-withdraw');
    const inputWithdrawValue = inputWithdraw.value;
    const inputWithdrawString = parseFloat(inputWithdrawValue);
    inputWithdraw.value = '';

    if (isNaN(inputWithdrawString)) {
        alert('provide valid number');
        return;
    }
    const newWithdraw = document.getElementById('withdraw-total');
    const newWithdrawInner = newWithdraw.innerText;
    const newWithdrawString = parseFloat(newWithdrawInner);

    if (inputWithdrawString > newWithdrawString) {
        alert('You have given more than you have.');
        return;
    }
    // adding and where to place this sum 
    const totalWithdraw = inputWithdrawString + newWithdrawString;
    newWithdraw.innerText = totalWithdraw;

    const currentBalance = document.getElementById('balance-total');
    const currentBalanceInner = currentBalance.innerText;
    const currentBalanceString = parseFloat(currentBalanceInner);

    const totalBalance = currentBalanceString - inputWithdrawString;
    currentBalance.innerText = totalBalance
})