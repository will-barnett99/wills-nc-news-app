import { Link } from "react-router-dom";


function ListItem ({articleData}) {


    const {article_id, title, author, topic, votes, comment_count, article_img_url, created_at} = articleData;

    const date = new Date(created_at);
    const formattedDate = date.toLocaleDateString();

    return (
        <>
            <li>
                <h3>{title}</h3>
                <Link to={`/articles/${article_id}`}>
                <img src={article_img_url}></img>
                </Link>
                <h4>Published By: {author} - Topic: {topic}</h4>
                <p>Number of votes: {votes}</p>
                <p>Number of Comments: {comment_count}</p>
                <p>Published on: {formattedDate}</p>

            </li>
        </>
    )
}

export default ListItem;