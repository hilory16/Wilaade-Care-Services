import React from 'react';
import styled from 'styled-components';
import {primaryColor, secondaryColor, color3Dark } from '../../themes/colors';

const Wrapper = styled.div`
    display:flex;
    align-items:flex-start;
    .icon-container{
        i{
            font-size:25px;
            margin-right:15px;
            color:${primaryColor};
        }
    }
    .text-container{
        h3{
            font-size:18px;
            font-weight:600;
            color:${color3Dark}
        }
        p{
            font-size:14px;
            color:${color3Dark}
        }
    }
`;
const Block2 = ({heading, desc, icon}) => {
    return ( 
        <Wrapper>
           <div className="icon-container"><i className={icon}></i></div>
            <div className="text-container">
                <h3>{heading}</h3>
                <p>{desc}</p>
            </div> 
        </Wrapper>
     );
}
 
export default Block2;