import React from 'react';
import { Container, Row, } from 'react-bootstrap';
import { Outlet,Link } from 'react-router-dom';
import brand from '../../images/WhatsApp_Image_2023-06-01_at_2.03.31_PM__1_-removebg-preview.png';

 function Header() {
  return (
    <> 
    <Container>
    <div className="shadow d-flex">
    <div className='col-12'>
    <Row>
    <div className='col-6 d-flex'>
     <div className='col-2  '>
<img src={brand} alt='images0' title='logo' className='brand'></img>
</div>
<div className='col-9 mt-3'>
    <h2>Designrevision</h2>
</div>
        

    </div>
    <div className='col-6 '>
    <nav className='nav navbar float-end '>
    <ul>


    
 <li><Link to="/">Store</Link></li>
 <li><Link to="/Blog">Blog</Link></li>
 <li><Link to="/Account">My Account</Link></li>
    </ul>

    <Outlet/>

    




    </nav>
    </div>
    



</Row>

</div>
    </div>



    </Container>
    </>

  )
}
export default Header;