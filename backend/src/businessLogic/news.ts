import {News} from '../helpers/news'

const news = new News();

export function getNews(){
    return news.getNews();
}