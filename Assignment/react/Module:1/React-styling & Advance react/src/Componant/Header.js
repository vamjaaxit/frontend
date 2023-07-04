import React from "react";
import { Row, Container, img, InputGroup } from "react-bootstrap";
import logo from '../image/images2.jpg';
function HeaderApp() {
    return (
        <><div className="container-fuild" style={{ borderBottom: "2px solid black" }}>
            <div className="container">
                <div className="header">
                    <Row>
                        <div className="col-3">
                            <Row>
                                <div className="col-3">
                                    <img src={logo} alt="images" className="logo" />
                                </div>
                                <div className="col-8 nest">
                                    <p>
                                        <h2>Nest<br /></h2>
                                        <b>fruits&vegatables</b></p>
                                </div>
                            </Row>
                        </div>

                        <div className="col-4 search">

                            <div class="input-group">

                                <input type="text" class="form-control" placeholder="Search " />
                                <i class="bi bi-search"></i>

                            </div>

                        </div>
                        <div className="col-5 location mt-3">
                            <Row>
                                <div className="col-3">
                                    <select>
                                        <option>Your Location</option>
                                        <option>Rajkot</option>
                                        <option>Surat</option>
                                        <option>Junagadh</option>
                                    </select>
                                </div>
                                <div className="col-9">
                                        <b className="m-0 p-0 "><i class="bi bi-basket-fill position-relative"></i><span class="badge badge-lg bg-warning rounded-circle position-absolute translate-middle">0</span>&nbsp;Compare</b>&nbsp;
                                        <b><i class="bi bi-heart position-relative"></i><span class="badge badge-lg bg-warning rounded-circle position-absolute translate-middle">0</span>&nbsp;&nbsp;Wishlist</b>&nbsp;
                                        <b><i class="bi bi-cart position-relative"></i><span class="badge badge-lg bg-warning rounded-circle position-absolute translate-middle">0</span>&nbsp;&nbsp;Cart</b>&nbsp;
                                        <b><i class="bi bi-person position-relative"></i><span class="badge badge-lg bg-warning rounded-circle position-absolute translate-middle">0</span>&nbsp;&nbsp;Account</b>



                                </div>
                            </Row>





                        </div>



                    </Row>
                </div>
            </div>
        </div>

        </>
    )
};

export default HeaderApp;