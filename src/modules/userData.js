const renderUserAvatar = () => {
    const avatar = document.querySelector('.user-init');
    const userName = sessionStorage.getItem('userName');
    if(userName){
        avatar.innerHTML = userName[0];
    }
}

export {renderUserAvatar};