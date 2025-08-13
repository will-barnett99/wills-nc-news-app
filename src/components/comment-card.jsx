

function CommentCard({commentData}) { 

    const {author, body, created_at, votes} = commentData;

    const date = new Date(created_at);
    const formattedDate = date.toLocaleDateString('en-GB', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    })

    return (
        <section>
            <h4>{author}</h4>
            <p>Number of Votes: {votes} // Published at: {formattedDate}</p>
            <div>
                <p>{body}</p>
            </div>

        </section>
    )
}

export default CommentCard;