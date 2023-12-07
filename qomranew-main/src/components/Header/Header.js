import './Header.css'
import React from 'react';
import logo from '../../imges/1.d681365e.png'
import {useState} from 'react'
import ModalNav from './ModalNav';
// import 
const Header = ()=>{
    const [showNav, setShowNav] = useState(false)


    return(
        <header  data-aos="fade-up"  data-aos-delay="500" data-aos-duration="2000">
        <nav >
         <div class="imge"> <a href="#home"><img src={logo} alt=""/></a></div> 
         <ul >
             <li><a href="#WhoQumra" class="Link">من نحن</a></li>
             <li><a href="#Statistics" class="Link">إحصائيتنا</a></li>
             <li><a href="#Services" class="Link">خدماتنا</a></li>
             <li><a href="#footer" class="Link">إتصل بنا</a></li>
             <li><a href="#why" class="Link">لماذا قمرة</a></li>
         </ul>
         <div class="controle">
         {!showNav && <i className="fa-solid fa-bars menu" onClick={() => setShowNav(true)}></i>}

        </div>
        </nav>
        {showNav && <ModalNav showNav={showNav} setShowNav={setShowNav}/>}
        <div className='whatsApp'>
           <a href="#"><img/></a>
        </div>
     </header>
     )


}
export default Header