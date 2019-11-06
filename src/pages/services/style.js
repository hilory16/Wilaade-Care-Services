import styled from 'styled-components';
import {primaryColor, secondaryColor, color3Dark} from '../../themes/colors';

export const Wrapper = styled.div`

`;

export const Services = styled.div`
    padding-top:55px;
    .big-about{
        text-align:center;
        font-size:65px;
        color:rgba(52, 52, 80, .1);
        position:relative;
        width:fit-content;
        margin:0 auto 41px;
        @media only screen and (max-width:768px){
            margin:0 auto 25px;
        }
        @media only screen and (max-width:451px){
            font-size:48px;
        }

        .small-about{
            font-size:35px;
            position:absolute;
            bottom:0;
            left:50%;
            transform:translateX(-50%);
            color:${secondaryColor};
            margin-bottom:5px;
            @media only screen and (max-width:451px){
                font-size:28px;
            }
        }
    }
    h6{
        text-align:center;
        color:${primaryColor};
    }
`;

export const ServiceTypes = styled.div`
    margin-top:95px;
    background:${primaryColor};
    padding:35px;
    @media only screen and (max-width:451px){
        padding:21px;
    }
    @media only screen and (max-width:768px){
        margin-top:45px;
    }
    .types-body{
        background:white;
        border-radius:4px;
        padding:35px;
        @media only screen and (max-width:451px){
            padding:21px;
        }
    }
`;

export const Fees = styled.div`
    margin:55px .1px;

    h3{
        text-align:center;
        font-weight:700;
        font-size:39px;
        color: ${color3Dark}
        @media only screen and (max-width:451px){
            font-size:34px;
        }
    }
    p{
        width:85%;
        margin:0 auto;
        text-align:center;
        font-size:19px;
        @media only screen and (max-width:451px){
            font-size:16px;
        }
    }
`;