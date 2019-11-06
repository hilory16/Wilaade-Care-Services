import styled from 'styled-components';
import { primaryColor, secondaryColor,color3Dark } from '../../themes/colors';

export const Wrapper = styled.div`

`;
export const Blocks = styled.div`
    margin-top:-135px;
`;

export const About = styled.div`
    margin-top:95px;

    @media only screen and (max-width:500px){
        margin-top:30px;
     }
    .item-1 img{
        width:90%;
        @media only screen and (max-width:768px){
           margin-bottom:41px;
        }
        
    }

    .item-2{
        font-family: 'Open Sans', sans-serif;
        h3{
            font-weight:600;
            color:${primaryColor};
            margin-bottom:34px;
            @media only screen and (max-width:768px){
                font-size:30px
            }
            @media only screen and (max-width:500px){
                font-size:26px;
                text-align:center;
            }
        }
        p{
            font-weight:300;
            color:${color3Dark};
            line-height:25px;
            margin-bottom:22px;
            @media only screen and (max-width:768px){
                font-size:18px;
                line-height:28px;
            }
            @media only screen and (max-width:500px){
                font-size:15px;
                line-height:25px;
                text-align:justify;
            }
        }
    }
`;

export const Services = styled.div`
    padding:61px 15px;
    background:linear-gradient(to right bottom, rgba(255, 246, 246, .5), rgba(255, 113, 126, .5));
    margin-top:85px;
    h3,p{
        text-align:center;
    }
    h3{
        font-weight:700;
    }
    p{
        font-size:11px;
    }

`;

export const ServiceBlock = styled.div`
    background:white;
    margin-top:31px;
    padding:51px 31px 31px 31px;
    border-radius:4px;

    a,a p{
        text-decoration:none;
        color:${primaryColor};
        font-size:18px;
        font-family:poppins;
        transition:all ease .1s;
        :hover{
            color:${secondaryColor}
        }
    }
`;



export const Hire = styled.div`
    padding-top:91px;
    padding-bottom:85px;
`;

export const HireItem = styled.div`
     @media only screen and (max-width:768px){
           margin-bottom:71px;
    }
   
`;

export const HireForm = styled.div`
    width:95%;
    margin-left:auto;
    form{
        width:99%;

    }
    h3{
        margin-bottom:18px;
        padding-left:18px;
        color:${secondaryColor};
        font-weight:700;
    }
    p{
        color:${color3Dark};
        padding-left:18px;
    }
    button{
        border:none;
        background:${primaryColor};
        color:white;
        padding:6px 19px;
        margin-left:18px;
        border-radius:3px;
        outline:none;
    }
`;

export const Contact = styled.div`
    padding:25px;
    background:#fff6f6;

    @media only screen and (max-width:768px){

        .add:nth-child(2){
            margin-bottom:38px;
        }
        .add:first-child{
            margin-bottom:38px;
        }
    }
    @media only screen and (max-width:768px){

        .add{
            margin-bottom:38px !important;
        }
    }
`;