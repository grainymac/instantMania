import React from 'react'

import { news } from '../data/newsData.js'

export const News = () => {
    return (
        <div className='news-container'>
            <div className='news-article'>
                <h1 className='article-title'></h1>
                <small className='article-date'>Published:</small>
                <small className='article-byline'></small>
                <p className='article-abstract'></p>
            </div>
        </div>
    )
}
