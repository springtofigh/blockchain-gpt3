import React from 'react';

import possibilityImage from '../../assets/possibility.png'
import './Possibility.css';

const Possibility = () => {
  return (
    <div className='gpt3-possibility section__padding' id='possibility'>
      <div className='gpt3-possibility-content'>
        <h4>درخواست دسترسی زودهنگام برای شروع</h4>
        <h1 className='gradient__text'>احتمالات فراتر از تصور شماست</h1>
        <p>با این حال هر تخت برای کمک در سفر زیاده روی ناخوشایند است. نه همه افکار برکت دارند. اغراق راه همه چیز تغییر شادی دلبستگی را تشدید می کند. حزب ما سال به منظور اجازه می خواست.</p>
        <h4>درخواست دسترسی زودهنگام برای شروع</h4>
      </div>
      <div className='gpt3-possibility-image'>
        <img src={possibilityImage} alt="پروژه AI" />
      </div>
    </div>
  )
}

export default Possibility