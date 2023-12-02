import React from 'react'
import './News.css'
import { news } from '../../data/newsData.js'
import { NewsHero } from './NewsHero.jsx'

export const News = () => {

    const sortedNews = [...news].sort((a, b) => new Date(b.datePublished) - new Date(a.datePublished));

    return (
        <>
            <div className='news-container'>
                <NewsHero />
                {sortedNews.map(({ id, title, datePublished, author, abstract, link, article }) => (
                    <div key={id} className='news-article'>
                        <h2 className='article-title'>{title}</h2>
                        <p className='article-date'>Published: {datePublished}</p>
                        <aside className='article-byline'>by: {author}</aside>
                        <h3 className='article-abstract'>{abstract}</h3>
                        <p className='article'>{article}</p>
                    </div>
                ))}
            </div>
        </>
    )
}