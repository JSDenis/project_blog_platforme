import regeneratorRuntime from "regenerator-runtime";
import {getResource, NEWS_DATA} from "./news-page";

const getAllNews = async () => {
    const res = await getResource(NEWS_DATA);

    return res;
}



const getFilterNews = async (filterOption) => {
    const res = await getResource(NEWS_DATA);


    const filterNews = res.filter(item => item.tag === filterOption);
    console.log(filterNews);
    return filterNews;
}

export {getAllNews, getFilterNews};