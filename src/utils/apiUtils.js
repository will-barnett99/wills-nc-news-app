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

const fetchCommentsByArticleId = (article_id) => {
    return fetch(`https://wills-nc-news.onrender.com/api/articles/${article_id}/comments`)
    .then((response) => response.json())
    .then(({comments}) => comments)
}



export {fetchAllArticles, fetchSingleArticle, fetchCommentsByArticleId};