import React from 'react';
import './Footer.css';
import Logo from '../../assets/logo.svg';

const Footer = () => {
  return (
    <div className='gpt3-footer section__padding'>
      <div className='gpt3-footer-heading'>
        <h1 className='gradient__text'>آیا می خواهید قبل از دیگران به آینده قدم بگذارید؟</h1>
      </div>
      <div className='gpt3-footer-btn'>
        <p>درخواست دسترسی زودهنگام</p>
      </div>

      <div className='gpt3-footer-links'>
        <div className='gpt3-footer-links-logo'>
          <img src={Logo} alt="" />
          <p>تحت نظر انجمن بلاک چین ایران. تمامی حقوق محفوظ است</p>
        </div>
        <div className='gpt3-footer-links-item'>
          <h4>لینک ها</h4>
          <p>گیت هاب</p>
          <p>شبکه های اجتماعی</p>
          <p> شرکت کنندگان</p>
          <p>ارتباط</p>
        </div>
        <div className='gpt3-footer-links-item'>
          <h4>شرکت</h4>
          <p>قوانین و ضوابط</p>
          <p>حریم خصوصی</p>
          <p>ارتباط</p>
        </div>
        <div className='gpt3-footer-links-item'>
          <h4>راه های ارتباطی</h4>
          <p>میدان فاطمی نرسیده به کوچه</p>
          <p>۰۸۵-۱۳۲۵۶۷</p>
          <p>info@gmail.com</p>
        </div>
      </div>

      <div className='gpt3-footer-copyright'>
        <p>&copy; تمامی حقوق محفوظ است. پاییز  ۱۴۰۱</p>
      </div>
    </div>
  )
}

export default Footer
