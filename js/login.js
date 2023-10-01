document.getElementById('btn-submit').addEventListener('click', function () {
    const inputEmail = document.getElementById('input-email');
    const mail = inputEmail.value;
    inputEmail.value = '';

    const inputPass = document.getElementById('input-pass');
    const pass = inputPass.value;
    inputPass.value = '';

    if (mail === 'programming@gmail.com' && pass === '12345') {
        window.location.href = 'bank.html';
    }
    else {
        alert('please wright correct email address or pass')
    }
})