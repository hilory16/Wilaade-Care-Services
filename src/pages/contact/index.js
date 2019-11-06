import React, { Component } from 'react';
import * as UI from './style';
import Banner2 from '../../components/banner2';
import Footer from '../../components/footer';
import Block3 from '../../components/widgets/block3';
import Block2 from '../../components/widgets/block-2';
import {Helmet} from "react-helmet";

class Team extends Component {
    state = {  }

    render() { 
        return ( 
            <UI.Wrapper>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Wilaade Care | Contact Us</title>
                </Helmet>
                <Banner2 text="Contact Us Today" img="contact.jpg"/>

                <UI.Contact>
                    <h3 class="big-about">Contact
                        <p className="small-about">Contact</p>
                    </h3>

                    <h6>You can reach out to us through any of the following means</h6>
                    
                </UI.Contact>

                <UI.Fees>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d612.0150838467946!2d-0.47683583192032064!3d52.15141245031064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4877b72bde3c83bf%3A0xc42d3fd4a9bdb2ff!2sManton%20Ln%2C%20Bedford%20MK41%207PH%2C%20UK!5e0!3m2!1sen!2sng!4v1571842601775!5m2!1sen!2sng" width="600" height="450" frameborder="0" allowfullscreen=""></iframe>

                <UI.Contacts>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-sm-6 add">
                                <Block2
                                    icon="fa fa-location-arrow"
                                    heading="Address"
                                    desc="Unit 426 Bedford heights, Manton lane Bedford Mk41 7PH UK"
                                />
                            </div>

                            <div className="col-lg-3 col-sm-6 add" >
                                <Block2
                                    icon="fa fa-envelope"
                                    heading="Email"
                                    desc="info@wilaadecareservices.co.uk"
                                />
                            </div>

                            <div className="col-lg-3 col-sm-6 add">
                                <Block2
                                    icon="fa fa-phone"
                                    heading="Phone"
                                    desc="01-9084-87568"
                                />
                            </div>

                            <div className="col-lg-3 col-sm-6 add">
                                <Block2
                                    icon="fa fa-clock-o"
                                    heading="Work Hours"
                                    desc="Mon - Sun"
                                />
                            </div>
                        </div>
                    </div>

                </UI.Contacts>
                </UI.Fees>
                
                <Footer/>
            </UI.Wrapper>
         );
    }
}
 
export default Team;