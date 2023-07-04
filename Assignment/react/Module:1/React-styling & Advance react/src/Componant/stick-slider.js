import React, { Component } from "react";
import { Container } from "react-bootstrap";
import Slider from "react-slick";
import orange from "../image/orange1.jpg";
import appple from "../image/apple1.jpg";
import lychee from "../image/lychee.jpg";
import kiwi from "../image/kiwi.jpg";
import dragan from "../image/dragan.jpg";
import water from "../image/watermallan.jpg";
import mixfruit1 from "../image/mix fruit1.jpg";
import mixfruit2 from "../image/mix fruit 2.jpg";
import mixfruit3 from "../image/mix fruit 3.jpg";
import mixfruit4 from "../image/mix fruit4.jpg";

export default class Responsive extends Component {
    
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll:5,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
        <Container>
      <div className=" mb-5">
        <p className="d-flex"><h2>Featured Catagories</h2>   <p className="ms-3 mt-2"><button className="border-0"><b>Cake & Milk</b></button></p><p className="ms-3 mt-2"><button className="border-0"><b>Coffes & Teas</b></button></p><p className="ms-3 mt-2"><button className="border-0"><b>Pet Foods</b></button></p> <p className="ms-3 mt-2"><button className="border-0"><b>Vegetables</b></button></p>  </p>
        <Slider {...settings}>
          <div>
        <img src={orange} alt="images" title="" className="fruit"/>
          </div>
          <div>
          <img src={appple} alt="images" title="" className="fruit"/>
          </div>
          <div>
          <img src={lychee} alt="images" title="" className="fruit"/>
          </div>
          <div>
          <img src={kiwi} alt="images" title="" className="fruit"/>
          </div>
          <div>
            <img src={dragan} alt="images" title="" className="fruit"/>
          </div>
          <div>
            <img src={water} alt="images" title=""  className="fruit"/>
          </div>
          <div>
            <img src={mixfruit1} alt="images" title=""  className="fruit"/>
          </div>
          <div>
            <img src={mixfruit2} alt="images" title=" "  className="fruit"/>
          </div>
          <div>
            <img src={mixfruit3} alt="images" title=""  className="fruit"/>
          </div><div>
            <img src={mixfruit4} alt="images" title=""  className="fruit"/>
          </div>
        </Slider>
      </div>
      
      </Container>);
  }
}
