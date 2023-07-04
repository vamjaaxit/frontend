import React from 'react';
import { Container,Center} from 'react-bootstrap';
import { Outlet,Link } from 'react-router-dom';
import brand from '../../images/WhatsApp_Image_2023-06-01_at_2.03.31_PM__1_-removebg-preview.png';

 function Footer() {
  return (
    <> 
    
    <center>
    
    {/* <div className="shadow d-flex" >
    <div className='col-6'>
    <h6 className='mt-2'> Copy right @ 2023 .All right reserved</h6> </div>
    <div className='col-6 float-end'><a className='mt-2 me-3' href="mailto:hege@example.com">vamjaaxit@example.com</a>

    </div>
    </div> */}



    <div className='footer'>
   <h1>Join our Newsletter</h1>
   <p>Get access to subscriber exclusive deals and be the first to know when we 🚀 launch something new!</p>
<form>
<input type='text' classname="email" name='email' placeholder='Email address'/> &nbsp;
<button type='button' className='subscribe'>subscribe</button>


</form>
    </div>
   
   
   


</center>  


<div className='detail'>
  <p>As a subscriber you will receive subscriber deals for upcoming products, weekly blog summaries and new product<br></br> announcements. No spam, promise!

</p>
<hr/><p className='mb-0  m-0 p-0'>Copyright © 2023</p>
</div>
    
    </>

  )
}
export default Footer;