import React from 'react'
import './Marque.css'
import Marquee from 'react-fast-marquee'
import pic1 from '../../images/pic1.jpg'
import pic2 from '../../images/pic2.jpg'
import pic3 from '../../images/pic3.jpg'
import pic4 from '../../images/pic4.jpg'
import pic5 from '../../images/pic5.jpg'
import pic6 from '../../images/pic6.jpg'
import pic7 from '../../images/pic7.jpg'

const Marque = () => {
  return (
    <div>
      <h1>React Marque</h1>
      <div>
        <Marquee speed={50} pauseOnHover={true}>
          <div className='img-wrapper'>
            <img src={pic1} alt="" />
          </div>
          <div className='img-wrapper'>
            <img src={pic2} alt="" />
          </div>
          <div className='img-wrapper'>
            <img src={pic3} alt="" />
          </div>
          <div className='img-wrapper'>
            <img src={pic4} alt="" />
          </div>
          <div className='img-wrapper'>
            <img src={pic5} alt="" />
          </div>
          <div className='img-wrapper'>
            <img src={pic6} alt="" />
          </div>
          <div className='img-wrapper'>
            <img src={pic7} alt="" />
          </div>
        </Marquee>
      </div>
    </div>
  )
}

export default Marque
