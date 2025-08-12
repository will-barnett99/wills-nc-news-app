import './App.css'
import Header from './components/header'
import SearchBar from './components/searchbar'
import {Routes, Route} from 'react-router-dom'
import AllArticles from './pages/allArticles'
import SingleArticle from './pages/singleArticle'


function App() {
  
  return (
  <>
    <Header />
    <SearchBar />
    <Routes>
      <Route path="/" element={<AllArticles />}/> /*this is homepage*/
      <Route path="/articles/:article_id" element={<SingleArticle />}/>
    </Routes>

  </>
 )

}

export default App
