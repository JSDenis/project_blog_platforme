import {togglePreloader} from "./preloader";
import {getFilterNews} from "./utils";
import { generateAllPosts } from "./posts";

const filterNews = async (e) => {
    if(e.target.classList.contains('tag-item')){
        const currentTag = e.target.dataset.tag;
        togglePreloader(true);
        const filterData = await getFilterNews(currentTag);
        generateAllPosts(filterData);
        //setTimeout(() => {togglePreloader(false)}, 1000);
        togglePreloader(false);
    }
};

export default filterNews;