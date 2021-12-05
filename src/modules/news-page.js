import regeneratorRuntime from "regenerator-runtime";




const NEWS_DATA = 'https://medium-proj.herokuapp.com/api/news';

const getResource = async (url) =>{
    const res = await fetch(url);

    if(!res.ok){
        throw new Error(`Error code/////// ${res.status}`);
    }

    return res.json();
}

const getNews = async (id) =>{
    const res = await getResource(`${NEWS_DATA}/${id}`);
    //console.log(res);
    return res;
}

////

const renderNews = async () => {
    const id = window.location.search.split('?post=')[1];
    
    const newsData = await getNews(id);
    const newsContainer = document.querySelector('#container-news');
    newsContainer.innerHTML = '';
    console.log(newsData);
    newsContainer.innerHTML = `
    <h1>${newsData.title}</h1>
    <div class="author-story">
                    <div class="action-left">
                        <div class="logo-author">A</div>
                        <div class="author-info">
                           <div>
                              <span class="username">${newsData.author}</span>
                              <a class="follow" href="#">Follow</a>
                           </div>
                           <div>
                              <span class="date">${newsData.createdAt}</span>
                              <span class="date">${Math.ceil(newsData.descr.length / 1000)} min read</span>
                           </div>
                        
                        </div>
                       
                        
                    </div>
                    <div class="action-right">
                        <span class="btn-circle">
                        <i class="large material-icons">bookmark_border</i>
                        </span>
                        <span class="btn-circle"><svg class="svgIcon-use" width="25" height="25">
                            <path
                                d="M5 12.5c0 .552.195 1.023.586 1.414.39.39.862.586 1.414.586.552 0 1.023-.195 1.414-.586.39-.39.586-.862.586-1.414 0-.552-.195-1.023-.586-1.414A1.927 1.927 0 007 10.5c-.552 0-1.023.195-1.414.586-.39.39-.586.862-.586 1.414zm5.617 0c0 .552.196 1.023.586 1.414.391.39.863.586 1.414.586.552 0 1.023-.195 1.414-.586.39-.39.586-.862.586-1.414 0-.552-.195-1.023-.586-1.414a1.927 1.927 0 00-1.414-.586c-.551 0-1.023.195-1.414.586-.39.39-.586.862-.586 1.414zm5.6 0c0 .552.195 1.023.586 1.414.39.39.868.586 1.432.586.551 0 1.023-.195 1.413-.586.391-.39.587-.862.587-1.414 0-.552-.196-1.023-.587-1.414a1.927 1.927 0 00-1.413-.586c-.565 0-1.042.195-1.432.586-.39.39-.586.862-.587 1.414z"
                                fill-rule="evenodd"></path>
                        </svg></span>
                    </div>
    </div>
    <p class="content">${newsData.descr}</p>
    `;
    
}



export {NEWS_DATA, getResource, getNews, renderNews}