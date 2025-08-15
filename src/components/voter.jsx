
import { patchArticleVotes } from "../utils/apiUtils";
import { useState } from "react";

function Voter({votes, article_id}) {


    const [voteTracker, setVoteTracker] = useState(0)

    function handleUpvote() {
        console.log("clicked to upvote")
          setVoteTracker(voteTracker + 1)

        patchArticleVotes(article_id, 1).catch(() => {
            setVoteTracker(voteTracker)
        })
    }

    function handleDownvote() {
        console.log("clicked to downvote")
        setVoteTracker(voteTracker - 1)

        patchArticleVotes(article_id, -1).catch(() => {
            setVoteTracker(voteTracker)
        })
  
    } 
    
    return (
        <section>
            <button onClick={handleUpvote}>Upvote +</button>
            <p>Number of Votes: {votes + voteTracker}</p>
            <button onClick={handleDownvote}>Downvote -</button>
        </section>
    )

}

export default Voter;