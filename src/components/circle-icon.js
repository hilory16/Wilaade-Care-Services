import React from 'react';
import styled from 'styled-components';
import { primaryColor } from '../themes/colors';

const Wrapper = styled.div`
    padding:18px;
    font-size:22px;
    color:white;
    background:${primaryColor};
    border-radius:50%;
    margin-right:21px;
    box-shadow:.5px .5px 8px rgba(0,0,0,.4);
    @media only screen and (max-width:768px){
        padding:25px;
        font-size:26px;
    }
    @media only screen and (max-width:768px){
        padding:16px;
        font-size:20px;
    }
`;


const CircleIcon = ({type}) => {
    return ( 
        <Wrapper>
             <i className={`fa fa-${type}`}></i>
        </Wrapper>
     );
}
 
export default CircleIcon;