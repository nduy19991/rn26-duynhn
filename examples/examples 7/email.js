function handleSubmit() {
    const EMAIL = 'admin'
    const PASSWORD = '123'
    let valueEmail = document.getElementById("input__email")
console.log('email vua nhap la', valueEmail.value)

    let valuePassword = document.getElementById("input__password")
console.log('password vua nhap la', valuePassword.value)

    if (valueEmail.value.toUpperCase()===EMAIL.toUpperCase() && 
        valuePassword.value.toUpperCase()===PASSWORD.toUpperCase()) {
        alert("Dang nhap thanh cong")
} else {
    alert("Dang nhap that bai")
}

}
function handleReset() {
document.getElementById("input__password").value = ""
}

