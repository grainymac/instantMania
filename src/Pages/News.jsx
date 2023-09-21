import React from 'react'
import './pageStyles.css'
import { news } from '../data/newsData.js'
import { NewsHero } from '../Components/NewsHero'

export const News = () => {
    return (
        <div className='news-container'>
            <NewsHero />
            {news.map(({ id, title, datePublished, author, abstract, link, article }) => (
            <div key={id} className='news-article'>
                <h2 className='article-title'>{title}</h2>
                <p className='article-date'>Published: {datePublished}</p>
                <aside className='article-byline'>by: {author}</aside>
                <h3 className='article-abstract'>{abstract}</h3>
                <p className='article'>{article}</p>
            </div>
            ))}
        </div>
    )
}