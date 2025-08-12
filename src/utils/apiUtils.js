const fetchAllArticles = () => {
    return fetch('https://wills-nc-news.onrender.com/api/articles')
    .then((response) => response.json())
    .then(({articles}) => articles)
}

export default fetchAllArticles;