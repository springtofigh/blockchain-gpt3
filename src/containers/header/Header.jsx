import React from 'react';
import './Header.css';
import ai from '../../assets/ai.png';
import people from '../../assets/people.png'

const Header = () => {
  return (
    <div className='gpt3-header section__padding' id='home'>
      <div className='gpt3-header-content'>
        <h1 className='gradient__text'>راه اندازی نسل سوم پروژه های بلاکچین در خاورمیانه</h1>
        <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است</p>
        <div  className="gpt3-header-content-input">
          <input type='email' placeholder='ایمیل خود را وارد کنید' />
          <button type="button">شروع کن</button>
        </div>

        <div className="gpt3-header-content-people">
          <img src={people} alt="people" />
          <p>بیش از ۱۶۰۰ نفر در یک روز ثبت نام کردند</p>
        </div>
      </div>

      <div className="gpt3-header-image">
      <img src={ai} alt='پروژه بلاکچین' />
    </div>
    </div>
  )
}

export default Header