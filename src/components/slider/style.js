import styled from 'styled-components';
import {color3Dark, primaryColor} from '../../themes/colors'

export const Bg = styled.div`
    height:265px;
    :nth-child(even){
    
    }
    h4{
        color:white;
    }
    .occupation{
        font-family:poppins;
        color:${primaryColor}
    }
    .desc{
        color:white;
    }
`;

export const ImageBg = styled.div`
    width:65px;
    height:65px;
    background:white;
    border-radius:50%;
    display:flex;
    align-items:center;
    justify-content:center;
    margin-bottom:15px;

    i{
        font-size:42px;
        color:${color3Dark}
    }
`;