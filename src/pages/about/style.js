import styled from 'styled-components';
import {primaryColor, secondaryColor, color3Dark} from '../../themes/colors';

export const Wrapper = styled.div`

`;

export const About = styled.div`
    padding-top:55px;
    .big-about{
        text-align:center;
        font-size:65px;
        color:rgba(52, 52, 80, .1);
        position:relative;
        width:fit-content;
        margin:0 auto 41px;

        .small-about{
            font-size:35px;
            position:absolute;
            bottom:0;
            left:50%;
            transform:translateX(-50%);
            color:${secondaryColor};
            margin-bottom:5px;
        }
    }
`;

export const AboutContent = styled.div`
    margin-top:95px;
    @media only screen and (max-width:768px){
        margin-top:45px;
    }

    .item-1 img{
        width:90%;
        @media only screen and (max-width:768px){
        margin-bottom:41px;
        }
        
    }

    .item-2{
        h3{
            font-weight:600;
            color:${secondaryColor};
            margin-bottom:34px;
            @media only screen and (max-width:768px){
                margin-bottom:15px;
            }
        }
        p{
            font-weight:300;
            color:${color3Dark};
            line-height:20px;
            margin-bottom:22px;
        }
    }
`;

export const Purpose = styled.div`
    padding-top:85px;
    @media only screen and (max-width:768px){
        padding-top:45px;
    }

    .mb-m{
        @media only screen and (max-width:768px){
            margin-bottom:31px;
        }
    }
    h4{
        color:${secondaryColor};
        font-weight:700;
        margin-bottom:25px;
        @media only screen and (max-width:768px){
            margin-bottom:15px;
        }
    }

    ul{
        padding-left:0;
        li{
            list-style:none;
        }
    }
`;