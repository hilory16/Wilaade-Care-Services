import React from 'react';
import * as UI from './style';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
            <UI.Wrapper>
                <div className="container">
                    <div className="row">

                    <UI.Item className="col-lg-4">
                        <h3>About</h3>
                        <p>Wilaade Care is a care provider with a wealth of experience in delivering the highest standards of care through a user oriented approaches to its services. We listen to you and your needs to make you and the care you receive our number on priority. Our domiciliary care and supported live in services meet the needs of service users </p>
                    </UI.Item>


                    <UI.Item className="col-lg-4">
                        <h3>Quick Links</h3>
                        <ul>
                            <li> 
                                <Link to="/"> Home</Link>
                            </li>

                            <li>
                                <Link to="/">About</Link>
                            </li>

                            <li>
                                <Link to="/">Services</Link>
                            </li>

                            <li>
                                <Link to="/">Team</Link>
                            </li>

                            <li>
                                <Link to="/">Contact</Link>
                            </li>
                        </ul>
                    </UI.Item>


                    <UI.Item className="col-lg-4">
                        <h3>Contacts</h3>
                        <ul>
                            <li><i className="fa fa-home"></i> Wilaade care services limited</li>

                            <li>
                                <i className="fa fa-map-marker"></i> Unit 426 Bedford heights, Manton lane Bedford (Mk41 7PH) UK
                            </li>

                            <li>
                                <Link to="/"><i className="fa fa-phone"></i> 01-9084-87568</Link>
                            </li>

                            <li>
                                <Link to="/"><i className="fa fa-envelope"></i> info@wilaadecareservices.co.uk</Link>
                            </li>

                            <li>
                            <i className="fa fa-clock-o"></i> Mon - Sun
                            </li>
                        </ul>
                    </UI.Item>
                    </div>
            </div>
        </UI.Wrapper>
     );
}
 
export default Footer;