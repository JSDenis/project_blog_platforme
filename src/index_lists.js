import {getPosts, generateAllPosts} from "./modules/posts";
import {openSearchPanel, openSearchList, renderSearchList, closeSearchList} from "./modules/search-posts";
import {renderUserAvatar} from "./modules/userData";
import filterNews from "./modules/filterNews";





import "./scss/main.scss";
import "./scss/skeleton.scss";


renderUserAvatar();

/*POSTS.JS*/

getPosts();




/*SEARCH-POSTS.JS*/

document.querySelector('.search-btn').addEventListener('click', openSearchPanel);

document.querySelector('#searchInput').addEventListener('input', openSearchList);

document.querySelector('#searchInput').addEventListener('input', renderSearchList);


document.addEventListener('click', closeSearchList);

/** */
document.querySelector('.tags').addEventListener('click', async (e)=>{
    filterNews(e);
})