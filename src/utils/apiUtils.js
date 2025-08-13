const fetchAllArticles = () => {
    return fetch('https://wills-nc-news.onrender.com/api/articles')
    .then((response) => response.json())
    .then(({articles}) => articles)
}

const fetchSingleArticle = (article_id) => {
    return fetch (`https://wills-nc-news.onrender.com/api/articles/${article_id}`)
    .then((response) => response.json())
    .then(({individualArticle}) => individualArticle)
}

export {fetchAllArticles, fetchSingleArticle};