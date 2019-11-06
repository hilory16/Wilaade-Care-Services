import React from 'react';
import { color3Dark, primaryColor} from '../../themes/colors';

import styled from 'styled-components';

const Wrapper = styled.div`
    width:85%;
    margin:0 auto 55px auto;
    h4{
        font-weight:600;
        font-size:21px;
        margin-bottom:15px;
    }
    p{
        text-align:left;
        font-size:14px;
    }
`;

const BigIcon = styled.span`
    position:relative;
    font-size:65px;
    color:rgba(255, 113, 126, .1);
    margin-bottom:20px;
    .small{
        font-size:35px;
        position:absolute;
        bottom:0;
        left:0;
        color:${color3Dark};
    }
`;

const Block3 = ({icon, heading, body}) => {
    return ( 
        <Wrapper>
             <BigIcon className={`fa fa-${icon}`}>
                <i className={`fa fa-${icon} small`}></i>
            </BigIcon>

            <h4>{heading}</h4>
            <p>{body}</p>
        </Wrapper>
     );
}
 
export default Block3;