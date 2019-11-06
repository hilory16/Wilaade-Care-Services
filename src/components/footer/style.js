import styled from 'styled-components';
import {primaryColor, color3Dark,secondaryColor} from "../../themes/colors";

export const Wrapper = styled.div`
    // display:flex;
    // justify-content:space-between;
    background:${color3Dark};
    padding-top:65px;
    margin-top:35px;
`;
export const Item = styled.div`
    text-align:left;
    color:white;
    h3{
        color:${primaryColor};
        font-size:22px;
    }
    p{
        font-size:12px;
    }
    ul{
        padding-left:0;
        margin-top:10px;
        font-size:12px;
        li{
            font-family: 'Poppins', sans-serif;
            list-style:none;
            a{
                color:white;
                font-weight:400;
                text-decoration:none;
            }
            i{
                padding-right:9px;
            }
        }
    }
`;
