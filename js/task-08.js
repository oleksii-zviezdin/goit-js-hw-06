const formEl = document.querySelector(`.login-form`);
const emailInputEl = formEl.elements.email;
const passwordInputEl = formEl.elements.password;
const btnSubmitEl = formEl.lastElementChild;

formEl.addEventListener("submit", handleSumbitLoginForm)

function handleSumbitLoginForm (event) {
    event.preventDefault();

    if (emailInputEl.value.length === 0) {
        alert(`⚠️ALL FIELDS MUST BE FILLED⚠️`);
        emailInputEl.focus();
        emailInputEl.style.boxShadow = `0 0 15px red`
        return;
    }
    else if (passwordInputEl.value.length === 0){
        emailInputEl.style.boxShadow = `none`
        alert(`⚠️ALL FIELDS MUST BE FILLED⚠️`);
        passwordInputEl.focus();
        passwordInputEl.style.boxShadow = `0 0 15px red`
        return;
    }
    
    passwordInputEl.style.boxShadow = `none`
    console.log(`Login: ${emailInputEl.value}, Password: ${passwordInputEl.value}`);
    event.currentTarget.reset();
}