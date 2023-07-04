import React from "react";
import { Row } from "react-bootstrap";

import slide from '../image/backgroundaxit1.jpg';
import slide1 from '../image/slider2.jpg';
import slide2 from '../image/slider5.jpg';
import slide3 from '../image/slider6.jpg';
import image from '../image/backgroundimage1.avif';


import shruti from '../image/background url.png';
import hardik from '../image/hardik.png';


function Slider() {

    return (

        <div className="container">
            <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 0"></button>

                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <div class="carousel-caption ">
                            {/* <div className="col-6">
    <img src={slide2} alt="photo" />
</div>
    <div className="col-6">
    <img src={slide3} alt="photo" />
    </div>
        
     */}

                        </div>
                        {/* <Row>         
                        <div className="col-6">
                        </div>
                            <div className="col-6">
                                <img src={slide3} class="d-block w-50" style={{ height: "400px" }} alt="..." />
                            </div>
                        </Row> */}
                        <container>
                            <div className="col-12" style={{ height: "400px", backgroundImage: `url(${slide})` }}>
                                <Row>
                                    <div className="col-6">

                                        <h1 className="text-white mt-5 ms-5">Don't miss amazing<br />grocery deals </h1>
                                        <p className="text-white mt-3 ms-5"><b>sign up for the daily newsletter</b></p>

                                        <form>                                       
                                            <div className="input-group ms-5 w-50">
                                            <span className="input-group-text bg-white border-right-0"><i className="bi bi-cursor"></i></span>
                                            <input type="text" className="form-control border-0" placeholder="Search" />
                                            <button className="input-group-text bg-success slidbnt text-white">Button</button>
                                        </div>


                                        </form>



                                    </div>
                                    <div className="col-6" style={{ padding: "0" }}>
                                        {/* <img src={hardik} class="d-block w-100" style={{ height: "400px" }} alt="..." ClassName="img-fluid image" /> */}
                                        <img src={hardik} class="d-block w-100" style={{ height: "400px" }} alt="..." ClassName="img-fluid imageslide1" />



                                    </div>
                                </Row>
                            </div>
                        </container>




                    </div>
                    <div class="carousel-item">
                        <img src={slide1} class="d-block w-100" style={{ height: "400px" }} alt="..." />

                    </div>

                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div></div>


    );






}



export default Slider;