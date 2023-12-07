
import './Footer.css'

const Footer = ()=>{
    return(
        <section id="footer" data-aos="fade-left" data-aos-delay="500" data-aos-duration="1000">
            <h1 className="title"> اتصل بنا</h1>
           <div className='contact'  >
           <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3606.472533375244!2d55.384525075385746!3d25.32191997763085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjXCsDE5JzE4LjkiTiA1NcKwMjMnMTMuNiJF!5e0!3m2!1sen!2sus!4v1692473609636!5m2!1sen!2sus" width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
           <form>
	                                    <div class="form-group">
	                                        <input type="text" class="form-control" id="Name" name="name" placeholder="الاسم"/>
	                                    </div>
	                                    <div class="form-group">
	                                        <input type="email" class="form-control" id="Email" name="email" placeholder="الايميل"/>
	                                    </div>
	                                    <div class="form-group">
	                                        <textarea id="Message" class="form-control" rows="3" name="message" placeholder="الرسالة"></textarea>
	                                    </div>
                                        <div class="form-group">
	                                        <button type="submit" >إرسال</button>
	                                    </div>
	                
           </form>
           </div>
                         <div className='icons' >
                           <a href="https://www.instagram.com/qomrah.alemara/"><i class="fab fa-instagram sc-icon"></i></a>
                           <a href="https://www.linkedin.com/in/sadek-badawi-06549020a"> <i class="fab fa-linkedin sc-icon"></i></a>
                           <a href="https://wa.me/qr/3XUWKFHNXMU3O1"><i class="fa-brands fa-whatsapp"></i></a>
                         </div>
                         <div className='copy'>
                              <p>Copyright @ 2023 created By joudy jreis</p>
                         </div>
        </section>
    )


}

export default Footer