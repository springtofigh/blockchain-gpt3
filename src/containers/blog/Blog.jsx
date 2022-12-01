import React from 'react';
import './Blog.css';
import { Article } from './../../components';

// ARTICLE IMAGES
import blog1 from '../../assets/blog01.png';
import blog2 from '../../assets/blog02.png';
import blog3 from '../../assets/blog03.png';
import blog4 from '../../assets/blog04.png';
import blog5 from '../../assets/blog05.png';




const Blog = () => {
  return (
    <div className='gpt3-blog section__padding' id='blog'>
    <div className='gpt3-blog-heading'>
      <h1 className='gradient__text'>رویدادهای بسیاری در حال رخ دادن است. <br />  ما در مورد آن مقاله می نویسیم</h1>
    </div>
    <div className='gpt3-blog-container'>
      <div className='gpt3-blog-heading-groupA'>
        <Article imgSrc={blog1} date="۲۳ مهر ۱۴۰۱" title="چرا پروژه های GPT-3 و Open AI آینده است؟ اجازه دهید بررسی کنیم."/>
      </div>
      <div className='gpt3-blog-heading-groupB'>
        <Article imgSrc={blog2} date="۶ آذر ۱۴۰۱" title="بیمه ارزدیجیتال و راه های استفاده از آن چیست؟"/>
        <Article imgSrc={blog3} date="۹ آذر ۱۴۰۱" title="چه دلایلی عامل تفاوت پروژه های متمرکز و غیرمتمرکز می شود؟" />
        <Article imgSrc={blog4} date="۹ آبان ۱۴۰۱" title=" چرا رمز ارزها برای دولت ها مهم شدند؟آیا خبری در راه است؟"/>
        <Article imgSrc={blog5} date="۲۳ مهر ۱۴۰۱" title="چه خطراتی پروژه های نوظهور در حوزه بلاک چین را تهدید می کند؟"/>
      </div>
    </div>
    </div>
  )
}

export default Blog