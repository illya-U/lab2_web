class Button {
    constructor () {
        document.getElementById('sign_up_btn').addEventListener('click', this.onSignUpClick)
    }

    onSignUpClick(event) {
        let firstName = document.getElementById('first_name').value
        let SecondName = document.getElementById('second_name').value
        let Email = document.getElementById('email').value
        let Password = document.getElementById('password').value
        let birthday = document.getElementById('birth_date').value
        let Sex = document.getElementById('sex').value

        if (firstName.trim() !== '' && SecondName.trim() !== '' && Email.trim() !== '' && Password.trim() !== '' && birthday.trim() !== '') {
            sessionStorage.setItem('firstName', firstName)
            sessionStorage.setItem('SecondName', SecondName)
            sessionStorage.setItem('Email', Email)
            sessionStorage.setItem('Password', Password)
            sessionStorage.setItem('Sex', Sex)
            sessionStorage.setItem('birthday', birthday)
            console.log(sessionStorage)
            window.location.href = "../log_in/index.html"
        } else {
            alert("One/More field are empty!!!")
        }
    }
}

let button = new Button()