
import { patchArticleVotes } from "../utils/apiUtils";
import { useState } from "react";

function Voter({votes, article_id}) {


    const [voteTracker, setVoteTracker] = useState(0)

    function handleClick() {
        console.log("clicked to upvote")

        patchArticleVotes(article_id).catch(() => {
            setVoteTracker(voteTracker - 1)
        })
        
        
        setVoteTracker(voteTracker + 1)
    }
    
    return (
        <section>
            <button onClick={handleClick}>Upvote +</button>
            <p>Number of Votes: {votes + voteTracker}</p>
            <button>Downvote -</button>
        </section>
    )

}

export default Voter;