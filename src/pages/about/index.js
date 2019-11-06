import React, { Component } from 'react';
import * as UI from './style';
import Banner2 from '../../components/banner2';
import Footer from '../../components/footer';
import {Helmet} from "react-helmet";

class About extends Component {
    state = {  }
    render() { 
        return ( 
            <UI.Wrapper>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Wilaade Care | About</title>
                </Helmet>
                <Banner2 text="Welcome to Wilaade Care Services Limited" img="banner4.jpg"/>

                <UI.About>
                    <h3 class="big-about">ABOUT
                        <p className="small-about">ABOUT</p>
                    </h3>
                    
                    <UI.AboutContent className="container">
                        <div className="row">

                            <div className="item-1 col-lg-7">
                                <img src={require('../../assets/img/med.png')} alt="Wilaade care services"/>
                            </div>

                            <div className="item-2 col-lg-5">
                                <h3>Wilaade care services</h3>
                                <p>Wilaade Care is a care provider with a wealth of experience in delivering the highest standards of care through a user oriented approaches to its services. We listen to you and your needs to make you and the care you receive our number one priority. Our domiciliary care and supported live in services meet the needs of service users</p>

                            </div>
                        </div>
                    </UI.AboutContent>

                    <UI.Purpose>
                        <div className="container">
                            <div className="row">
                                    <div className="col-lg-4 mb-m">
                                        <h4>Our Aim</h4>
                                        <p>The aim of the service is to provide majestic and holistic care for elderly people in their own houuse 24hours. We care for the physical, emotional, social and spiritual wellbeing of our clients</p>
                                    </div>

                                    <div className="col-lg-4 mb-m">
                                        <h4>Our Mission</h4>
                                        <p>To provide an excellent delivery of quality care and services for elderky people in their own homes. We are dedicated to supporting an environment that promotes the achievement of optimal health and social welfare</p>
                                    </div>

                                    <div className="col-lg-4 mb-m">
                                        <h4>Our Values Includes</h4>
                                        <ul>
                                            <li>Provision of good quality of life for our service user</li>
                                            <li>Provision of privacy and confidentiality</li>
                                            <li>Provision of holistic care that is individual centered</li>
                                            <li>Respecting the dignity, preferences and wishes of our service users</li>
                                            <li>Provision of trained carers that can give care according to individual needs</li>
                                        </ul>
                                    </div>
                            </div>
                        </div>
                    </UI.Purpose>
                </UI.About>
                
                <Footer/>
            </UI.Wrapper>
         );
    }
}
 
export default About;