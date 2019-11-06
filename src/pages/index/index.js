import React, { Component } from 'react';
import Banner from '../../components/banner';
import Block from '../../components/block';
import Footer from '../../components/footer';
import * as UI from './style';
import Slider from '../../components/slider';
import Input from '../../components/widgets/input';
import DropDown from '../../components/widgets/dropdown';
import Block2 from '../../components/widgets/block-2';
import Block3 from '../../components/widgets/block3';
import { Link } from 'react-router-dom';
import {Helmet} from "react-helmet";

class Index extends Component {
    state = { 
        dropdown1:false,
        dropdown2:false,
        dropdown3:false,
     }

     toggleDropDown1 = () =>{
        this.setState({
            dropdown1:!this.state.dropdown1
        })
     }

     toggleDropDown2 = () =>{
        this.setState({
            dropdown2:!this.state.dropdown2
        })
     }

     toggleDropDown3 = () =>{
        this.setState({
            dropdown3:!this.state.dropdown3
        })
     }

     renderDropDown3 =  () =>{
         return(
         <ul>
             <li>Provision of good quality of life for our service user</li>
             <li>Provision of privacy and confidentiality</li>
             <li>Provision of holistic care that is individual centered</li>
             <li>Respecting the dignity, preferences and wishes of our service users</li>
             <li>Provision of trained carers that can give care </li>
         </ul>
        )
     }

    render() { 
        const {dropdown1, dropdown2, dropdown3} = this.state
        return ( 
            <UI.Wrapper>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Wilaade Care | Homepage</title>
                </Helmet>
                <Banner/>
                <UI.About className="container">
                    <div className="row">

                        <div className="item-1 col-lg-7">
                            <img src={require('../../assets/img/med.png')} alt="Wilaade care"/>
                        </div>

                        <div className="item-2 col-lg-5">
                            <h3>About Wilaade care services</h3>
                            <p>Wilaade Care is a care provider with a wealth of experience in delivering the highest standards of care through a user oriented approaches to its services. We listen to you and your needs to make you and the care you receive our number one priority. </p>
                                
                            <p>Our domiciliary care and supported live in services meet the needs of service users. Our personal care and support services offers assistance with a broad range of everyday tasks and activities. Our services are majorly centered around the elderly.</p>

                             {/* Daily life can become increasingly difficult for elderly people so it is always good to lova a helping hand. Our personal care and support services offers assistance with a broad range of everyday tasks and activities */}

                             <DropDown
                                title="Our Aim"
                                desc="The aim of the service is to provide majestic and holistic care for elderly people in their own house 24 hours. We care for the physical, emotional, social and spiritual wellbeing of our clients"
                                dropdown={dropdown1}
                                toggleDropDown = {() => (this.toggleDropDown1("dropdown1"))}
                             />

                             <DropDown
                                title="Our Mission"
                                desc="To provide an excellent delivery of quality care and services for elderly people in their own homes. We are dedicated to supporting an environment that promotes the achievement of optimal health and social welfare"
                                dropdown={dropdown2}
                                toggleDropDown = {() => (this.toggleDropDown2())}
                             />

                             <DropDown
                                title="Our Values Includes"
                                desc={this.renderDropDown3()}
                                dropdown={dropdown3}
                                toggleDropDown = {() => (this.toggleDropDown3())}
                             />
                             
                        </div>
                    </div>
                </UI.About>

                <UI.Services>
                    <h3>How can we help you</h3>
                    <p>READ MORE ABOUT OUR SERVICES</p>

                    <UI.ServiceBlock>
                        <div className="row">
                            <div className="col-lg-4">
                                <Block3
                                    icon="stethoscope"
                                    heading="Live-In Care"
                                    body="Our full time live-in care for the elderly allows people to enjoy an independent life in their own home with full upport with daily needs"
                                />
                            </div>

                            <div className="col-lg-4">
                               <Block3
                                    icon="home"
                                    heading="Hourly Visiting Homecare "
                                    body="Our hourly visiting home care is for people who needs some help to live independently at home ..."
                                />
                            </div>

                            <div className="col-lg-4">
                                <Block3
                                    icon="user"
                                    heading="Companionship Services"
                                    body="We offer companionship and conversation , assist with entertaining, help with reading ..."
                                />
                            </div>

                            <div className="col-lg-4">
                                <Block3
                                    icon="heart"
                                    heading="Personal Care Services"
                                    body="We help with bathing, assist with dressing, provide grooming, help with incontinent care ..."
                                />
                            </div>

                            <div className="col-lg-4">
                                <Block3
                                    icon="clock-o"
                                    heading="House Help"
                                    body="We provide house helping, dusting and vacuuming, help with washing and ironing, make beds and change bed linens ..."
                                />
                            </div>

                            <div className="col-lg-4">
                                <Block3
                                    icon="heart"
                                    heading="Personal Care Services"
                                    body="We help with bathing, assist with dressing, provide grooming, help with incontinent care ..."
                                />
                            </div>
                        </div>
                        <Link to="/services">
                            <p className="see-more">See more</p>
                        </Link>
                        
                    </UI.ServiceBlock>

                </UI.Services>

                <UI.Hire className="container">
                    <div className="row">
                        <UI.HireItem className="col-lg-4">
                            <Slider
                                content = {
                                    [
                                        {
                                            img: require('../../assets/img/banner4.jpg'),
                                            name:'Ilori Olamide',
                                            testimony:'You can place your trust in them',
                                            occupation:"Developer"
                                        },
                                        {
                                            img: require('../../assets/img/banner.jpg'),
                                            name:'Jane Smith',
                                            testimony:"They helped look after my mum and it was wonderful",
                                            occupation:"Banker"
                                        },
                                        {
                                            img: require('../../assets/img/banner.jpg'),
                                            name:'Frank Kirk',
                                            testimony:'They are simply the best, I recommend them. These guys really helped me',
                                            occupation:"Teacher"
                                        }
                                    ]
                                }
                            />
                        </UI.HireItem>

                        <div className="col-lg-8">
                            <UI.HireForm>
                                <h3>Need Our Services?</h3>
                                <p>Message us and we will contact you</p>

                                <form>
                                    <Input type="text" placeholder="Full name"/>

                                    <Input type="email" placeholder="Email address"/>

                                    <Input type="text" placeholder="Phone number"/>

                                    <Input type="text" placeholder="Phone number"/>

                                    <button>Send</button>
                                </form>
                            </UI.HireForm>
                        </div>
                    </div>
                </UI.Hire>


                <UI.Contact>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-sm-6 add">
                                <Block2
                                    icon="fa fa-location-arrow"
                                    heading="Address"
                                    desc="Unit 426 Bedford heights, Manton lane Bedford (Mk41 7PH) UK"
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

                </UI.Contact>
                <Footer/>
            </UI.Wrapper>
         );
    }
}
 
export default Index;