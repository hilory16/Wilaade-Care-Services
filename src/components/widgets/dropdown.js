import React from 'react'
import styled from 'styled-components';
import { primaryColor, secondaryColor} from '../../themes/colors';

const Wrapper = styled.div`
    :first-child{
       margin-top:38px;
    }
   
   .desc{
       font-weight:300;
       font-size:15px;
       padding-top:16px;
       padding-left:48px;
       overflow:hidden;
       transition:all ease .4s;
       @media only screen and (min-width:767px){
        max-height:125px;
       }
       
       ul{
           padding-left:0;
       }
   }
`;

const Heading = styled.div`
    color:white;
    padding:13px 18px;
    border-radius:5px;
    font-size:16px;
    font-weight:600;
    cursor:pointer;
    i{
        padding-right:18px;
        font-size:23px;
        font-weight:600;
    }
`;

const DropDown = ({title,type, desc,dropdown, toggleDropDown}) => {
    return ( 
        <Wrapper>
            <Heading onClick={(type)  => (toggleDropDown(type))} style={{background: dropdown ? secondaryColor :primaryColor}}>
                {dropdown? <i className="fa fa-angle-up"></i> : <i className="fa fa-angle-down"></i>}
                {title}    
            </Heading>
            
            <div className="desc" style={{height:dropdown?'235px':'0'}}>{desc}</div>
        </Wrapper>
     );
}
 
export default DropDown;