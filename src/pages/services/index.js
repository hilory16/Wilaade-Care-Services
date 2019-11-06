import React, { Component } from 'react';
import * as UI from './style';
import Banner2 from '../../components/banner2';
import Footer from '../../components/footer';
import Block3 from '../../components/widgets/block3';
import {Helmet} from "react-helmet";

class Services extends Component {
    state = {  }
    
     renderHvHomecare = () =>{
         return (
             <div>
                 <p>Our hourly visiting home care is for people needs some help to live independently at home.</p>
                 <p>We provide care assistants who are emphatic , understanding, compassionate and able to givecare according to individual needs.</p>
                 <p>Among all our trainings, our care assistants are given tranings regarding health and safety, abuse and infection control. We make sure our care asistants p[rovide two refrences, investigated with criminal background screening. We conduct home visit to mske sure that care givers are providing agreed services, and to make sure service users and their families are happy with services provided.</p>
             </div>
         )
     }

     rendercompanionship = () =>{
        return (
            <div>
                <li>We offer companionship and conversation</li>
                <li>assist with entertaining</li>
                <li>Help with reading</li>
                <li>Participate in hobbies and craft</li>
                <li>Monitior diet and eating</li>
                <li>Visit neighbours and friends</li>
                <li>Attend church and parties</li>
            </div>
        )
    }

    renderPersonalCare = () =>{
        return (
            <div>
                <li>Help with bathing</li>
                <li>Assist with dressing</li>
                <li>Provide grooming</li>
                <li>Help with incontinent care</li>
                <li>Assist with eating</li>
                <li>Provide medication reminder</li>
            </div>
        )
    }

    renderHouseHelp = () =>{
        return (
            <div>
                <li>Provide light housekeeping</li>
                <li>Dusting and vacuuming</li>
                <li>Help with washing and ironing</li>
                <li>Make bed and change bed linens</li>
                <li>Organize wardrobes and cupboards</li>
                <li>Take out waste</li>
                <li>Prepare meal</li>
                <li>Help with shopping</li>
            </div>
        )
    }

    render() { 
        return ( 
            <UI.Wrapper>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Wilaade Care | Our Services</title>
                </Helmet>
                <Banner2 text="Our services are next to none, simply the best." img="services1.jpg"/>

                <UI.Services>
                    <h3 class="big-about">SERVICES
                        <p className="small-about">SERVICES</p>
                    </h3>

                    <h6>We offer wide range of services to our clients</h6>
                    
                    
                    <UI.ServiceTypes>
                        <div className="types-body">
                            <div className="row">
                                <div className="col-lg-6">
                                    <Block3
                                        icon="stethoscope"
                                        heading="Live-In Care"
                                        body="Our full time live-in care for the elderly allows people to enjoy an independent life in their own home with full support with daily needs."
                                    />
                                </div>

                                <div className="col-lg-6">
                                <Block3
                                        icon="home"
                                        heading="Hourly Visiting Homecare "
                                        body={this. renderHvHomecare()}
                                    />
                                </div>

                                <div className="col-lg-6">
                                    <Block3
                                        icon="user"
                                        heading="Companionship Services"
                                        body={this.rendercompanionship()}
                                    />
                                </div>

                                <div className="col-lg-6">
                                    <Block3
                                        icon="heart"
                                        heading="Personal Care Services"
                                        body={this.renderPersonalCare()}
                                    />
                                </div>

                                <div className="col-lg-6">
                                    <Block3
                                        icon="clock-o"
                                        heading="House Help"
                                        body={this.renderHouseHelp()}
                                    />
                                </div>

                                <div className="col-lg-6">
                                    <Block3
                                        icon="heart"
                                        heading="Personal Care Services"
                                        body="We help with bathing , assist with dressing, provide grooming, help with incontinent care ..."
                                    />
                                </div>
                            </div>
                        </div>
                    </UI.ServiceTypes>
                </UI.Services>

                <UI.Fees>
                    <h3>Our Fee</h3>
                    <p>Our fee is arranged around your needs because of the flexibility of our services, it can change as your needs changes. Call our customer team today who will be happy to book an appointment for assessment.</p>
                </UI.Fees>
                
                <Footer/>
            </UI.Wrapper>
         );
    }
}
 
export default Services;