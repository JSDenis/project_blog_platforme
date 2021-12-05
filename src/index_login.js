import {writeAccountData, writeAccountDataServer} from "./modules/login";

import "./scss/main.scss"

let formLogin = document.querySelector('#login');

//formLogin.addEventListener('submit', writeAccountData);
formLogin.addEventListener('submit', writeAccountDataServer);