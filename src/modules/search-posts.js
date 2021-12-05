import regeneratorRuntime from "regenerator-runtime";
import {getAllNews} from "./utils";

const openSearchPanel = () => {
    let searchInput = document.querySelector('#searchInput');
    searchInput.classList.toggle('open-search');
    searchInput.focus();
}

const closeSearchList = (event) => {
    const searchList = document.querySelector('#search-list');
    let searchInput = document.querySelector('#searchInput');
    if(!searchList.classList.contains('hide-search') && !event.target.closest('search-input')){
        searchList.classList.add('hide-search');
        searchInput.blur();
    }
}

const openSearchList = () => {
    let searchList = document.querySelector('#search-list');
    searchList.classList.remove('hide-search');
}

const renderSearchList = async (event) => {
    let data = await getAllNews();
    const searchContainer = document.querySelector('#search-list');
    data = reduceSearchData(event, data);


    if(data.length > 0){
        searchContainer.innerHTML = ``;
        searchContainer.innerHTML = `
        <li class="head-item">
            <div class="search-title">
                <div class="search-descr">
                    <p class="public">PUBLICATIONS</p>
                    <p class="more"><a href="#">More</a></p>
                </div>
            </div>
        </li>
        `;
        data.forEach((item) => {
            searchContainer.innerHTML += `
            <li class="search-item">
                <a href="news-page.html?post=${item.id}">
                <div class="item">
                    <span class="item-pict">P</span>
                    <p class="item-title">${item.title}</p>
                </div>
                </a>
            </li>
            `
        })
    }
}

const reduceSearchData = (event, postItems) => {
    const searchValue = event.target.value.toLowerCase();

    const filteredPosts = postItems.filter((item) => {
        return (
            item.title.toLowerCase().includes(searchValue) 
        || item.descr.toLowerCase().includes(searchValue)
        )
    })

    return filteredPosts;
}



export {openSearchPanel, openSearchList, renderSearchList, closeSearchList};