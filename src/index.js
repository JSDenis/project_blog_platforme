import {hidePlaceholder, showPlaceholder, isEmptyField, editText} from "./modules/script";
import {showModalStory, postStory} from "./modules/modal";
import {isAuthorisation} from "./modules/login";
import {renderUserAvatar} from "./modules/userData";

import "./scss/main.scss";


isAuthorisation();
renderUserAvatar();

/*SCRIPT.JS*/
document.querySelector('#make-bold').addEventListener('click', function () {
    editText('strong-style');
});

document.querySelector('#make-italic').addEventListener('click', function () {
    editText('italic-style');
});


document.querySelector('#editor').addEventListener('focus', hidePlaceholder);
document.querySelector('#editor').addEventListener('blur', showPlaceholder);
document.querySelector('#editor').addEventListener('keydown', (e) =>{
    isEmptyField(e, 'Title')
} ); // NEW EVENT

document.querySelector('#editor1').addEventListener('focus', hidePlaceholder);
document.querySelector('#editor1').addEventListener('blur', showPlaceholder);
document.querySelector('#editor1').addEventListener('keydown', (e) =>{
    isEmptyField(e, 'Tell your story…')
} ); // NEW EVENT



/*MODAL.JS*/ 

document.querySelector('.btn-publish').addEventListener('click', showModalStory);
document.querySelector('.publish-now').addEventListener('click', (event) =>{
    event.preventDefault();
    postStory();
});



