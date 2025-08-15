const fetchAllArticles = () => {
    return fetch('https://wills-nc-news.onrender.com/api/articles')
    .then((response) => response.json())
    .then(({articles}) => articles)
}

const fetchSingleArticle = (article_id) => {
    return fetch (`https://wills-nc-news.onrender.com/api/articles/${article_id}`)
    .then((response) => response.json())
    .then(({individualArticle}) =>  individualArticle)
}

const fetchCommentsByArticleId = (article_id) => {
    return fetch(`https://wills-nc-news.onrender.com/api/articles/${article_id}/comments`)
    .then((response) => response.json())
    .then(({comments}) => comments)
}

const patchArticleVotes = (article_id, num) => {
    console.log(article_id, "console.log in fetch req")
    return fetch(`https://wills-nc-news.onrender.com/api/articles/${article_id}`, {
        method: "PATCH",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            inc_votes: num,
        })
    })
    .then((response) => response.json())
    .then((response) => console.log(response))
}


export {fetchAllArticles, fetchSingleArticle, fetchCommentsByArticleId, patchArticleVotes};