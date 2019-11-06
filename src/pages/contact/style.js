import styled from 'styled-components';
import {primaryColor, secondaryColor, color3Dark} from '../../themes/colors';

export const Wrapper = styled.div`

`;

export const Contact = styled.div`
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
    h6{
        text-align:center;
        color:${primaryColor};
    }
`;

export const Contacts = styled.div`
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


export const Fees = styled.div`
    background:#fff6f6;
    margin-bottom:75px;
    iframe{
        width:100%;
        height:555px;
        margin:0 auto;
    }
    margin:55px .1px;

    h3{
        // text-align:center;
        font-weight:700;
        font-size:39px;
        color: ${color3Dark}
    }
    p{
        // width:85%;
        // margin:0 auto;
        // text-align:center;
        font-size:19px;
    }
    .contact-details{
        margin-top:45px;
    }
`;