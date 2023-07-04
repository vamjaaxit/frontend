import React from 'react';
import Header from './header';
import Footer from './footer';
import { Container, Row } from 'react-bootstrap';
import img1 from '../../images/images1.jpg';
import img2 from '../../images/img2.jpg';
import img3 from '../../images/img3.jpg';
import img4 from '../../images/img-4.jpg';
import img5 from '../../images/img-5.jpg';

export default function Store() {
  return (
    <>
      <Container>
        <div className='col-6 mt-5'>
          <h1>Powerful tools for <br /> web professionals
          </h1>
          <p>We help designers and developers finish their projects on<br />time and ship faster.

          </p>
          <button type='button' className='our-product'>View Our Product</button>
          <br />
        </div>
      </Container>
      <br /><br /><br />

      <div className='container shadow'>


         <div className='col-12 d-flex'>

          <div className='col-6'>
            <img src={img1} className='img' alt='images' title='images' />
          </div>

          <div className='col-6 d-flex container'>

            <div className='col-6'>
              <h3><b>Shards Pro</b></h3>
              <p>BOOTSTRAP 4 UI KIT
              </p>
            </div>
         

            <div className='col-6 float-end'>
              <span style={{ color: 'green' }}><h3>US$ 105.02
              </h3></span>
              <del>US$ 140.42
              </del>
               </div>
               
              
            </div>

            
          </div>
       

       </div>
       
<div className='container'>




  <h3 className='mt-5'><b>Latest Products
</b></h3>


<div className='col-12'>
<Row>
<div className='col-4'>

  <div className='card shadow'>
  

    <div className='cardbody'>
      <img src={img2} alt='images'/>
    </div>
    <div className='cardfooter'>
      <b className='fs-6 ms-3'>Shards Dashboard Lite React</b><p className='float-end mt-2 text-success fs-5 me-3'>Free</p>
      <p className='ms-3'>React Ui Kit</p>

      
    </div>
  </div>
</div>
<div className='col-4'>
  <div className='card shadow'>
  

    <div className='cardbody'>
      <img src={img3} alt='images'/>
    </div>
    <div className='cardfooter'>
      <b className='fs-6 ms-3'>Shards Dashboard Pro React</b><p className='float-end  text-success fs-6 me-3'>US$ 46.02<br/><del>US$ 57.82</del></p><br/>
      <p className='ms-3'>React Ui Kit</p>

      
    </div>
  </div></div>
<div className='col-4'> <div className='card shadow'>
  

  <div className='cardbody'>
    <img src={img4} alt='images'/>
  </div>
  <div className='cardfooter'>
    <b className='fs-6 ms-3'>Shards React</b><p className='float-end mt-2 text-success fs-5 me-3'>Free</p>
    <p className='ms-3'>React Ui Kit</p>

    
  </div>
</div></div>



</Row>
  
</div>



<div className='col-12'>
<Row>
<div className='col-3'>fffff</div>
<div className='col-3'>ffff</div>
<div className='col-3'>ffff</div>



</Row>
  
</div>
</div>
      </>

      );
};
