import {createAccountData, createAccountDataServer} from "./modules/signup";

import "./scss/main.scss";

const formSignUp = document.querySelector('#signup');
//formSignUp.addEventListener('submit', createAccountData);
formSignUp.addEventListener('submit', createAccountDataServer);