import React, { Component } from 'react';
import * as UI from './style';
import Banner2 from '../../components/banner2';
import Footer from '../../components/footer';
import Block3 from '../../components/widgets/block3';
import {Helmet} from "react-helmet";

class Team extends Component {
    state = {  }

    render() { 
        return ( 
            <UI.Wrapper>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Wilaade Care | Team</title>
                </Helmet>
                <Banner2 text="Meet Our Skilled Personnels" img="team.jpg"/>

                <UI.Teams>
                    <h3 class="big-about">Team Members
                        <p className="small-about">Team</p>
                    </h3>

                    <h6>Get to know some of our team members</h6>
                    <p className="team-desc">Our team of skilled personnels is committed to providing you with the a quality service that is second to none. We have capable hands that will look after your needs more than you can ever imagine.</p>
                    
                </UI.Teams>

                <UI.Fees>
                    <h3>Job Opportunities</h3>
                    <p>We are looking for people with kind, compassionate hearts to be care asistants. If you have these qualities and interested  in care giving.</p>
                    <p>We provide adequate trainings, do something spectacular, become a carer today.</p>
                    <p>Call : 01-9084-87568</p>
                </UI.Fees>
                
                <Footer/>
            </UI.Wrapper>
         );
    }
}
 
export default Team;