// Generate token for user auth
const generateToken = () => {
    var length = 8,
      charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
      retVal = "";
    for (let i = 0, n = charset.length; i < length; ++i) {
      retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
};

//// LOGIN LOCALSTORAGE(SESSIONSTORAGE)

const isAuthorisation = () => {
    if(!sessionStorage.getItem('user-token')){
        sessionStorage.setItem('user-token', '');
        window.location.href="login.html";
    }
}


const writeAccountData = (event) => {
    event.preventDefault();
    const userName = document.querySelector('#userName').value;
    const userPassword = document.querySelector('#userPw').value;

    sessionStorage.setItem('userName', userName);
    sessionStorage.setItem('userPw', userPassword);

    /* let accounts = [
        {
            userName: 'Max',
            userPassword: '1234' 
        }
    ]; */



    let accounts = JSON.parse(localStorage.getItem('accounts'));

    const currentUser = {
        userName: userName,
        userPassword: userPassword
    }

    isUser(accounts, currentUser);

}


const isUser = (allUsers, userData) => {
    const checkUser = allUsers.some((item) => {
        return (
            item.userName === userData.userName &&
            item.userPassword === userData.userPassword
        )
    });

    if(!checkUser){
        alert('Enter another name or password');
        return false;
    } else{
       sessionStorage.setItem('user-token', generateToken())
       window.location.href = 'index.html';
       return true;
    }
}





























//SERVER

const writeAccountDataServer = (event) => {
    //alert(1);
    event.preventDefault();
    
    const userName = document.querySelector('#userName').value;
    const userPassword = document.querySelector('#userPw').value;

    fetch('https://medium-auth.herokuapp.com/api/auth/signin',
    {
        method: 'POST',
        body: JSON.stringify(
            {
                "username": userName,
                "password": userPassword
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
            if(data.accessToken){
                sessionStorage.setItem('user-token', data.accessToken);

                sessionStorage.setItem("userName", userName);
                sessionStorage.setItem("userPassword", userPassword);
                
                window.location.href="index.html";
            } else{
                sessionStorage.setItem('user-token', '');
                alert('Enter another data');
            }
        }
    )

}



export {writeAccountDataServer, isAuthorisation, writeAccountData}