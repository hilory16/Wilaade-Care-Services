import React from 'react';
import styled from 'styled-components';
import Header from '../../components/header';

const Wrapper = styled.div`
    height:60vh;
    position:relative;
`;

const Text = styled.div`
    position:absolute;
    top:50%;
    left:50%;
    transform:translate(-50%, -50%);
    color:white;
    @media only screen and (max-width:768px){
        width:85%;
    }

    @media only screen and (max-width:451px){
        width:95%;
    }
    h3{
        font-size:45px;
        font-weight:700;
        text-align:center;
        @media only screen and (max-width:768px){
            font-size:55px;
        }
        @media only screen and (max-width:451px){
            font-size:35px;
        }
    }
`;


const Banner2 = ({text, img}) => {

    const image = require(`../../assets/img/${img}`)

    return ( 
        <Wrapper style={{background:`linear-gradient(to right bottom, rgba(52, 52, 80, .7), rgba(222, 222, 222, .3)), url(${image})`, backgroundSize:'cover', backgroundPosition:'center'}} title="Wilaade care services">
            <Header/>
            {/* rgba(52, 52, 80, .7) */}

            <Text>
                <h3>{text}</h3>
            </Text>
        </Wrapper>
     );
}
 

export default Banner2;