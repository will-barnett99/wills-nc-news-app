import {fetchAllArticles} from "../utils/apiUtils";
import { useState, useEffect } from "react";
import ListItem from "../components/article-list-item";


function AllArticles()  {
    
    const [listOfArticles, setListOfArticles] = useState([]);

    useEffect(() => {
        fetchAllArticles()
            .then((allArticles) => {
            setListOfArticles(allArticles);
    })
    }, [])


    return (
        <section>
            <ol>
                {listOfArticles.map((article) => {
                    return <ListItem articleData={article} key={article.article_id}/> 
                })}
            </ol>
        </section>    
    )
}




export default AllArticles;