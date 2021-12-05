const showModalStory = () =>{
    const modalEl = document.querySelector('#modal-history');
    modalEl.classList.add('overlay--show');

    localStorage.setItem('titlePost', document.querySelector('#editor').textContent);

    localStorage.setItem('descrPost', document.querySelector('#editor1').textContent);

    document.querySelector('[name="title-story"]').value = localStorage.getItem('titlePost');

    document.querySelector('[name="descr-story"]').value = localStorage.getItem('descrPost').substr(0, 50);


}





/**/

const postStory = () =>{
    let titleStory = document.querySelector('#editor').innerHTML;
    let descrStory = document.querySelector('#editor1').innerHTML;
    let authorName = sessionStorage.getItem('userName');
    const date = new Date();
    let dateStory = `${date.getDay()}-${date.getMonth()+1}-${date.getFullYear()}`;
    const tagStory = document.querySelector('#news-tag').value;

    fetch('https://medium-proj.herokuapp.com/api/news',
        {
            method: 'POST',
            body: JSON.stringify(
                {
                    "title": titleStory,
                    "descr": descrStory,
                    "author": authorName,
                    "tag": tagStory
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
            window.location.href = 'lists_news.html';
        }
    )
}



export {showModalStory, postStory}