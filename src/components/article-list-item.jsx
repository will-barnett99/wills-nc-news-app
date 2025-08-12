


function ListItem ({articleData}) {

    const title = articleData.title;
    const author = articleData.author;
    const topic = articleData.topic;
    const votes = articleData.votes;
    const commentCount = articleData.comment_count;
    const articleImg = articleData.article_img_url;

    const date = new Date(articleData.created_at);
    const formattedDate = date.toLocaleDateString();

    return (
        <>
            <li>
                <h3>{title}</h3>
                <img src={articleImg}></img>
                <h4>Published By: {author} - Topic: {topic}</h4>
                <p>Number of votes: {votes}</p>
                <p>Number of Comments: {commentCount}</p>
                <p>Published on: {formattedDate}</p>

            </li>
        </>
    )
}

export default ListItem;