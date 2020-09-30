import React, { useEffect } from 'react';
import './App.css';
import News from './components/News/News';
import { useState } from 'react';
import axios from 'axios';

function App() {
  const [articles, setArticles] = useState([]);
  useEffect( () =>{
    const url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=b093438169e44148aa7051053a7a930e';
    axios(url)
    .then(data => setArticles(data.data.articles))
  }, [])
  return (
    <div className="top-news">
      <h1>Breaking News</h1>
      {
        articles.map(article => <News article = {article}></News>)
      }
    </div>
  );
}

export default App;
