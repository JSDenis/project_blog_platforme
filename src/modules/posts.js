const generateAllPosts = (allPosts) => {
    //const allPosts = JSON.parse(localStorage.getItem('allStories')).reverse();
    console.log(allPosts)
    let view = '';
    const containerPosts = document.querySelector('.content-lists');
    allPosts.reverse();
    allPosts.forEach((item) => {
        view += `
            <div class="news-item">
              <a href="news-page.html?post=${item.id}">
                <h2>${item.title}</h2>
              </a>
                <div class="author-info">
                    <span class="user-init">A</span>
                    <span class="user-name">${item.author}</span>
                    <span class="user-time">${item.createdAt}</span>
                </div>
                <div class="author-text">
                    <p>${item.descr.length > 100 ? item.descr.substr(0, 100) : item.descr}...</p>
                </div>
                
                <div class="action-story">
                    <div class="action-left">
                        <span class="like"><i class="large material-icons">favorite</i></span>
                        <span class="comment"><i class="large material-icons">feedback</i></span>
                        
                    </div>
                    <div class="action-right">
                        <span class="btn-circle"><svg class="svgIcon-use" width="25" height="25">
                            <path
                                d="M5 12.5c0 .552.195 1.023.586 1.414.39.39.862.586 1.414.586.552 0 1.023-.195 1.414-.586.39-.39.586-.862.586-1.414 0-.552-.195-1.023-.586-1.414A1.927 1.927 0 007 10.5c-.552 0-1.023.195-1.414.586-.39.39-.586.862-.586 1.414zm5.617 0c0 .552.196 1.023.586 1.414.391.39.863.586 1.414.586.552 0 1.023-.195 1.414-.586.39-.39.586-.862.586-1.414 0-.552-.195-1.023-.586-1.414a1.927 1.927 0 00-1.414-.586c-.551 0-1.023.195-1.414.586-.39.39-.586.862-.586 1.414zm5.6 0c0 .552.195 1.023.586 1.414.39.39.868.586 1.432.586.551 0 1.023-.195 1.413-.586.391-.39.587-.862.587-1.414 0-.552-.196-1.023-.587-1.414a1.927 1.927 0 00-1.413-.586c-.565 0-1.042.195-1.432.586-.39.39-.586.862-.587 1.414z"
                                fill-rule="evenodd"></path>
                        </svg></span>
                    </div>
                </div>
                
            </div>
        `
    });

    containerPosts.innerHTML = view;

}

//generateAllPosts();


/*Get data*/ 

const getPosts = () => {
    fetch('https://medium-proj.herokuapp.com/api/news')
    .then(
        (response) => {
            return response.json();
        }
    )
    .then(
        (data)=>{
            generateAllPosts(data);
        }
    )
}




export {getPosts, generateAllPosts}