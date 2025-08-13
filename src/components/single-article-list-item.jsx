

function SingleArticleListItem({articleData}) {


    const {title, body, topic, author, created_at, votes, comment_count, article_img_url} = articleData;

  

    const date = new Date(created_at);
    const formattedDate = date.toLocaleDateString();

    return (
        <section>
             <h3>{title}</h3>
             <img src={article_img_url}/>
             <p>Published by:{author} // Topic:{topic} // Published on:{formattedDate}</p>
             <p>Number of Votes:{votes} // Number of Comments:{comment_count}</p>
             <div>
                <p>{body}</p>
             </div>
        </section>
    )

    
}

export default SingleArticleListItem;