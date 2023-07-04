import React from "react";
import { Row, Container, Col, select, option } from "react-bootstrap";
import hotdeals from '../image/hotdeal.avif';


function Navbar() {

    return (

        <><div className="container-fuild" style={{ borderBottom: "2px solid black" }}>
            <div className="container">
                <Row>
                    <div className="col-2 ">
                        <select className="vegatables">
                            <option><b>Vegatables</b></option>
                            <option>Potato</option>
                            <option>Tamato</option>
                        </select>
                    </div>
                    <div className="col-1">
                        <Row>
                            <div className="col-3 hotdeals">
                                <img src={hotdeals} alt="images" title="hot deals" style={{ width: "80px" }} />
                            </div>
                            <div className="col-3 namehotdeals">
                                <p><b><h4>Hot Deals</h4></b></p>
                            </div>
                        </Row>
                    </div>
                    <div className="col-7">
                        <nav class="navbar navbar-expand-lg">

                            <div className="container-fuild">
                                <ul className="">
                                    <li class="nav-item"><a class="nav-link" href="#">Home</a></li>
                                    <li class="nav-item"><a class="nav-link" href="#">About</a></li>
                                    <li class="dropdown"><a class="dropdown-toggle" href="#" data-bs-toggle="dropdown">Shop</a>
                                        <ul class="dropdown-menu bg-dark">
                                            <li><a href="#">Action</a></li>
                                            <li><a href="#">Another action</a></li>
                                            <li><a href="#">Something else here</a></li>

                                        </ul>
                                    </li>



                                    <li class="dropdown"><a class="dropdown-toggle" href="#" data-bs-toggle="dropdown">Vendors</a>
                                        <ul class="dropdown-menu bg-dark">
                                            <li><a href="#">Action</a></li>
                                            <li><a href="#">Another action</a></li>
                                            <li><a href="#">Something else here</a></li>

                                        </ul>
                                    </li>
                                    <li class="dropdown"><a class="dropdown-toggle" href="#" data-bs-toggle="dropdown">Mega Menu</a>
                                        <ul class="dropdown-menu bg-dark">
                                            <li><a href="#">Action</a></li>
                                            <li><a href="#">Another action</a></li>
                                            <li><a href="#">Something else here</a></li>

                                        </ul>
                                    </li>
                                    <li class="dropdown"><a class="dropdown-toggle" href="#" data-bs-toggle="dropdown">Blog</a>
                                        <ul class="dropdown-menu bg-dark">
                                            <li><a href="#">Action</a></li>
                                            <li><a href="#">Another action</a></li>
                                            <li><a href="#">Something else here</a></li>
                                        </ul>
                                    </li>
                                    <li class="dropdown"><a class="dropdown-toggle" href="#" data-bs-toggle="dropdown">Page</a>
                                        <ul class="dropdown-menu bg-dark">
                                            <li><a href="#"></a></li><br></br>
                                            <li><a href="#">Action</a></li>
                                            <li><a href="#">Another action</a></li>
                                            <li><a href="#">Something else here</a></li>

                                        </ul>
                                    </li>

                                    <li class="nav-item"><a class="nav-link" href="#">contact</a></li>

                                </ul>
                            </div>


                        </nav>


                    </div>
                    <div className="col-2 ">
                        <Row>
                            <div className="col-1">
                                <i class="bi bi-headset fs-1"></i>
                            </div>
                            <div className="col-9 services">
                                <h4><b>1900-888</b></h4>
                                <p><h6> 24*7 Service, &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Center</h6></p>
                            </div>



                        </Row>
                    </div>

                </Row>
            </div>
        </div>
        </>
    )
};
export default Navbar;