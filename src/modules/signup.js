//SIGNUP LOCALSTORAGE(SESSIONSTORAGE)

const createAccountData = (event) => {
    event.preventDefault();
    const userName = document.querySelector('#userName').value;
    const userPassword = document.querySelector('#userPw').value;
    const userEmail = document.querySelector('#userEmail').value;

    if(!localStorage.getItem('accounts')){
        localStorage.setItem('accounts', JSON.stringify([]))
    }

    const currentUser = {
        userName: userName,
        userEmail: userEmail,
        userPassword: userPassword
    };

    let currentAccounts = JSON.parse(localStorage.getItem('accounts'));

    const checkResult = checkAccounts(currentAccounts, currentUser);

    if(checkResult){
        currentAccounts.push(currentUser);
    }

    localStorage.setItem('accounts', JSON.stringify(currentAccounts));

}


const checkAccounts = (allUsers, userData) => {
    const checkUser = allUsers.some((item) => {
        return (
            item.userName === userData.userName ||
            item.userEmail === userData.userEmail
        )
    });

    if(checkUser){
        alert('Enter another name or email');
        return false;
    }else{
        alert('OK. New user');
        window.location.href = 'login.html';
        return true;
    }
}

























/////SERVER

const createAccountDataServer = (event) => {
    //alert(1);
    event.preventDefault();
    
    const userName = document.querySelector('#userName').value;
    const userEmail = document.querySelector('#userEmail').value;
    const userPassword = document.querySelector('#userPw').value;

    fetch('https://medium-auth.herokuapp.com/api/auth/signup',
    {
        method: 'POST',
        body: JSON.stringify(
            {
                "username": userName,
                "password": userPassword,
                "email": userEmail
            }
        ),
        headers: {
            "Content-type": "application/json; charset=utf-8"
        }
    }
    )
    .then(
        (response) =>{
            return response.json();
        }
    )
    .then(
        (data) => {
            console.log(data);
        }
    )

}

export { createAccountDataServer, createAccountData };