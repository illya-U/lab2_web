class Button {
    constructor () {
        document.getElementById('log_in_btn').addEventListener('click', this.onLogInClick)
    }

    onLogInClick(event) {
        let Email = document.getElementById('email').value
        let Password = document.getElementById('password').value

        if (!(Email.trim() !== '' && Password.trim() !== '')) {
            alert("One/More field are empty!!!")
        } else {
            if (Email === sessionStorage.getItem('Email') && Password === sessionStorage.getItem('Password'))
            { 
                window.location.href = "../main/index.html"
            } else {
                if(sessionStorage.getItem('Email') === null && sessionStorage.getItem('Password') === null) {
                    alert("Not register Yet!!!")
                    window.location.href = "../registration/index.html"
                }
                else {
                    alert("Not rigth Passord or email!!!")
                }
            }
        } 
    }
}

let button = new Button()