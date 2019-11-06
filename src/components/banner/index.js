import React from 'react';
import Header from '../header';
import * as UI from './style';
import CircleIcon from '../../components/circle-icon';
import Block from '../../components/block';

const Banner = () => {
    return ( 
        <UI.Wrapper style={{background:`url(${require('../../assets/img/banner.jpg')})`, backgroundSize:'cover', backgroundPosition:'top'}} title="wilaade care services">
            <Header/>

            <UI.Content>
                <UI.Text className="container">
                    <h1>Professional  <span>Adult Care</span></h1>
                    <div>
                        <CircleIcon
                            type="heartbeat"
                        />

                        <CircleIcon
                            type="medkit"
                        />

                        <CircleIcon
                            type="stethoscope"
                        />

                        <CircleIcon
                            type="wheelchair"
                        />
                    </div>
                </UI.Text>

                <UI.Image>
                    <img src={require('../../assets/img/doctor.png')} alt="Wilaade care services"/>

                </UI.Image>
            </UI.Content>

        </UI.Wrapper>
     );
}
 
export default Banner;