import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import CommentCard from "./comment-card";
import { fetchCommentsByArticleId } from "../utils/apiUtils";

function CommentContainer() {

    const {article_id} = useParams();
    
    const [listOfComments, setListOfComments] = useState([]);

    useEffect(() => {

        fetchCommentsByArticleId(article_id)
        .then((comments) => {
            setListOfComments(comments)
        })
    }, [])

    return (
        <section>
            <ul>
                {listOfComments.map((comments) => {
                    return <CommentCard commentData={comments} key={comments.comment_id}/>
                })}
            </ul>
        </section>
    )
    

}


export default CommentContainer;