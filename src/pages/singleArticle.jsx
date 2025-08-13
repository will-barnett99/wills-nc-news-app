import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchSingleArticle } from "../utils/apiUtils";
import SingleArticleListItem from "../components/single-article-list-item";
import CommentContainer from "../components/comment-container";



function SingleArticle () {

    const {article_id} = useParams()

    const [individualArticle, setIndividualArticle] = useState([]);

    useEffect(() => {

        fetchSingleArticle(article_id)
        .then((singleArticle) => {
            setIndividualArticle(singleArticle);
        })
    }, [])

    
    return (
        <section>
            <SingleArticleListItem articleData={individualArticle} key={individualArticle.article_id} />
            <CommentContainer articleId={individualArticle.article_id} />
        </section>
    )


}

export default SingleArticle;