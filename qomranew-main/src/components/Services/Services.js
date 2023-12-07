import './Services.css'
import sev1 from '../../imges/Screenshot 2023-08-17 at 15-50-34 قُمرة الإمارة التسويقية on Instagram نهتم بتقديم خدمة كتابة خطط المحتوى لان المحتوى السليم هو اساس نجاح اي مشروع🔝👌[...]-PhotoRo(2).png'
import sev2 from '../../imges/ss.png'
import sev3 from '../../imges/ؤ-removebg-preview.png'
import sev4 from '../../imges/Screenshot 2023-08-17 at 15-19-53 قُمرة الإمارة التسويقية on Instagram نهتم بتقديم خدمة كتابة خطط المحتوى لان المحتوى السليم هو اساس نجاح اي مشروع🔝👌[...]-PhotoRo(1).png'
import sev5 from '../../imges/Screenshot 2023-08-17 at 15-26-18 قُمرة الإمارة التسويقية on Instagram نهتم بتقديم خدمة كتابة خطط المحتوى لان المحتوى السليم هو اساس نجاح اي مشروع🔝👌[...]-PhotoRo(2).png'
import sev6 from '../../imges/Screenshot 2023-08-12 at 15-47-56 قُمرة الإمارة التسويقية (@qomrah.alemara) • Instagram photos and videos-PhotoRoom.png-PhotoRoom(1).png'
import sev7 from '../../imges/Screenshot 2023-08-17 at 17-05-30 قُمرة الإمارة التسويقية (@qomrah.alemara) • Instagram photos and videos-PhotoRoom.png-PhotoRoom(1).png'
const Services = ()=>{

    return(
        <section id="Services" data-aos="zoom-in" data-aos-delay="500" data-aos-duration="1000">
            <h1 class="title">خدماتنا</h1>
            <div className='ServicGroub' >
             <div className='servCard'  >
             <h2> تصميم مواقع الويب</h2>
             <img src={sev7}/>
            
             <i class="fa-solid fa-arrow-right"></i>
             </div>
             <div className='servCard'>
             <h2> تصميم تطبيقات الموبايل </h2>
          
            <img src={sev2}/>
           
             <i class="fa-solid fa-arrow-right"></i>
             </div>
             <div className='servCard'>
             <h2> تصميم الغرافيك</h2>
            
             <img src={sev3}/>
             
            
             <i class="fa-solid fa-arrow-right"></i>
             </div>
               
              <div className='servCard '>
             <h2> بناء الهوية البصرية</h2>
           
             <img src={sev4}/>
             <i class="fa-solid fa-arrow-right"></i>
             </div>
             
             <div className='servCard '>
             <h2>  إدارة منصات التواصل الاجتماعي</h2>
             <img src={sev5}/>
             <i class="fa-solid fa-arrow-right"></i>
             </div>
             <div className='servCard '>
             <h2>  إدارة الحملات الإعلانية المدفوعة</h2>
             <div className='otherWidth'>
             <img src={sev6}/>
             </div>
             <i class="fa-solid fa-arrow-right"></i>
             </div>
            </div> 
                 <div className='servCard alone'>
             <h2> إدارة استراتيجيات خطط المحتوى </h2>
             <img src={sev1}/>
             <i class="fa-solid fa-arrow-right"></i>
             </div> 
        </section>
    )

}
export default Services