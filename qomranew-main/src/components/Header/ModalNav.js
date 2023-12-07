import './Header.css'
import React from 'react';
const ModalNav = (props)=>{

    return(
        <div className='modaloverlay'>
   {props.showNav && <i className="fa-solid fa-xmark close" onClick={() => props.setShowNav(false)}></i>}
       <ul className='minNav'>
             <li><a href="#WhoQumra" class="Link">من نحن</a></li>
             <li><a href="#Statistics" class="Link">إحصائيتنا</a></li>
             <li><a href="#Services" class="Link">خدماتنا</a></li>
             <li><a href="#footer" class="Link">إتصل بنا</a></li>
             <li><a href="#why" class="Link">لماذا قمرة</a></li>
         </ul>
        </div>
     )


}
export default ModalNav