import React from 'react';
import Feature from '../../components/feature/Feature';
import './Features.css';

const featuresData = [
  {
    title: 'رفع بی‌اعتمادی به طرح های سرمایه گذاری',
    text:'در نظر گرفته همدردی ده کمک غیر معمول گاه به گاه کافی نیست. نامه در تبدیل شدن او تمایل فعال فعال کردن بهتر.'
  },
  {
    title: 'تبدیل به یک سرمایه گذار فعال',
    text:'در نظر گرفته همدردی ده کمک غیر معمول گاه به گاه کافی نیست. نامه در تبدیل شدن او تمایل فعال فعال کردن بهتر.'
  },
  {
    title: 'سرعت انتقال سریع',
    text:'در نظر گرفته همدردی ده کمک غیر معمول گاه به گاه کافی نیست. نامه در تبدیل شدن او تمایل فعال فعال کردن بهتر.'
  },
  {
    title: 'فرصت رشد مناسب در سایر شهرها',
    text:'در نظر گرفته همدردی ده کمک غیر معمول گاه به گاه کافی نیست. نامه در تبدیل شدن او تمایل فعال فعال کردن بهتر.'
  },
]

const Features = () => {
  return (
    <div className='gpt3-features section__padding' id='features'>
      <div className='gpt3-features-heading'>
        <h1 className='gradient__text'>آینده همین حالاست و شما امروز باید این نکته را دریابید. امروز به آینده قدم بگذار و آن را رقم بزن</h1>
        <p>درخواست دسترسی زودهنگام برای شروع</p>
      </div>
      <div className='gpt3-features-container'>
        {
          featuresData.map((item, index) => (
            <Feature title={item.title} text={item.text} key={item.title + index}/>
            ))
        }
      </div>
    </div>
  )
}

export default Features