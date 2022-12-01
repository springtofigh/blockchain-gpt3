import React from 'react';
import './article.css';

const article = ( {imgSrc , date , title} ) => {
  return (
      <div className='gpt3-blog-container-article'>
        <div className='gpt3-blog-container-article-image'>
          <img src={imgSrc} alt="" />
        </div>
        <div className='gpt3-blog-container-article-content'>
          <div>
            <p>{date}</p>
            <h3>{title}</h3>
          </div>
          <p>مطالعه کامل مقاله</p>
        </div>
      </div>
  )
}

export default article