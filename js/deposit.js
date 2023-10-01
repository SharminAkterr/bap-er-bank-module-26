document.getElementById('btn-deposit').addEventListener('click', function () {
    // input set part 
    const depositInput = document.getElementById('input-deposit');
    const inputValue = depositInput.value;

    depositInput.value = ''

    const inputValueString = parseFloat(inputValue);

    // number validation part 
    if (isNaN(inputValueString)) {
        alert('please provide a valid number');
        return;
    }
    // deposit part
    const newDeposit = document.getElementById('deposit-total');
    const newDepositInnerText = newDeposit.innerText;
    const newDepositString = parseFloat(newDepositInnerText);

    // calculation 
    const currentDeposit = inputValueString + newDepositString;
    newDeposit.innerText = currentDeposit;

    // total balance part
    const currentBalance = document.getElementById('balance-total');
    const currentBalanceInner = currentBalance.innerText;
    const currentBalanceString = parseFloat(currentBalanceInner);

    const totalBalance = currentBalanceString + inputValueString;
    currentBalance.innerText = totalBalance;

})