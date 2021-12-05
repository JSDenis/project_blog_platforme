const togglePreloader = (isActive) => {
    const preloader = document.getElementById('news-preloader');
    const listNews = document.querySelector('.content-lists');
    if(isActive){
        preloader.classList.add('show-preloader');
        listNews.classList.add('hide-lists');
    } else{
        preloader.classList.remove('show-preloader');
        listNews.classList.remove('hide-lists');
    }
}

export {togglePreloader};