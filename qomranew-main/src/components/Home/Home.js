import './Home.css'
import home from '../../imges/home.png'
import home2 from '../../imges/home22.png'
import { useState, useEffect } from 'react'

const Home = () => {
  const images = [home, home2];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const previousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      (prevIndex - 1 + images.length) % images.length
    );
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };
    return(
        <div id="home" class=""  data-aos="fade-up"  data-aos-delay="500" data-aos-duration="1000">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Image ${index + 1}`}
            className={index === currentImageIndex ? 'active' : ''}
          />
        ))}
          <div className='midText'  data-aos="fade-right"  data-aos-delay="500" data-aos-duration="1000">
         <h1>شركة قُمرة الإمارة</h1>
        <p>8 سنوات من الإبداع والعطاء</p>
        <ul className='soial'>
          <li><a href="https://wa.me/qr/3XUWKFHNXMU3O1"><i class="fa-brands fa-whatsapp"></i></a></li>
        <li><a href='https://www.instagram.com/qomrah.alemara/'><i class="fab fa-instagram sc-icon"></i></a> </li>
        <li> <a href='https://www.linkedin.com/in/sadek-badawi-06549020a'><i class="fab fa-linkedin sc-icon"></i></a></li>
      </ul>
        <a href="" class="btn">احصل على خدماتنا الان</a>
       </div>
            <div class="iconRight" onClick={nextImage}><i class="fa-solid fa-arrow-right"></i></div>
            <div class="iconeLeft"  onClick={previousImage}><i class="fa-solid fa-arrow-left"></i></div>
        </div>
    )

}
export default Home