import React from 'react'

import { news } from '../data/newsData.js'

export const News = () => {
    return (
        <div className='news-container'>
            {news.map(({ id, title, datePublished, author, abstract, link, article }) => (
            <div key={id} className='news-article'>
                <h2 className='article-title'>{title}</h2>
                <p className='article-date'>Published:{datePublished}</p>
                <aside className='article-byline'>by: {author}</aside>
                <p className='article-abstract'>{abstract}</p>
            </div>
            ))}
        </div>
    )
}
