import React from 'react'

import { news } from '../data/newsData.js'

export const News = () => {
    return (
        <div className='news-container'>
            {news.map(({ id, title, datePublished, author, abstract, link, article }) => (
            <div key={id} className='news-article'>
                <h1 className='article-title'>{title}</h1>
                <small className='article-date'>Published:{datePublished}</small>
                <small className='article-byline'>{author}</small>
                <p className='article-abstract'>{abstract}</p>
            </div>
            ))}
        </div>
    )
}
