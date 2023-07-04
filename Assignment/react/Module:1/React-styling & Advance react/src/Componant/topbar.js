import React from "react";
import { Row, } from "react-bootstrap"
import mbr from "../mbr.jpg";
function TopbarApp() {
    return (
        <><div className="container-fuild" style={{borderBottom:"2px solid black"}}>
            <div className="container TopbarApp">
                
                    <Row>
                        <div className="col-4 d-flex " >
                            <a href="#">Aboutus&nbsp;:</a>&nbsp;
                            <a href="#">My account:</a>&nbsp;
                            <a href="#">Wishlist :</a>&nbsp;
                            <a href="#">order Tracking:</a>
                            
                        </div>
                        <div className="col-4 ">
                            Get Greate devices to 50% off<a href="#"> view detail</a>
                        </div>
                        <div className="col-4">
                            Need help? Call us=<a href="#">3800 908</a>
                            <select className="border border-0">
                                <option>&nbsp;English</option>
                                <option>hindi</option>
                                <option>gujrati</option>
                            </select>

                            <select className="border border-0">

                                <option>USD</option>
                                <option>Rupee</option>
                                <option>Euro</option>
                            </select>
                        </div>
                    </Row>
                </div>
            </div>
            
            
        </>
    )
};

export default TopbarApp;