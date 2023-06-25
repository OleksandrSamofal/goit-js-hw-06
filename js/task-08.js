const formRef = document.querySelector('.login-form');

formRef.addEventListener('submit', onLoginButtonClick);

function onLoginButtonClick(event) {
    event.preventDefault();
    const {
        elements: { email, password },
    } = event.currentTarget;

    if (email.value === "" || password.value === "") {
        return alert("Усі поля повинні бути заповнені!");
    } 
    
    const userDetails = { email: email.value, Password: password.value };

  console.log(userDetails);
  formRef.reset();
};
