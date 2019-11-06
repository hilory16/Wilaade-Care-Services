import styled from 'styled-components';
import {primaryColor, secondaryColor, color3Dark} from '../../themes/colors';

export const Wrapper = styled.div`

`;

export const Teams = styled.div`
    padding-top:55px;
    .big-about{
        text-align:center;
        font-size:65px;
        color:rgba(52, 52, 80, .1);
        position:relative;
        width:fit-content;
        margin:0 auto 41px;
        @media only screen and (max-width:451px){
            font-size:43px;
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
    .team-desc{
        width:85%;
        text-align:center;
        margin:0 auto;
    }
`;

export const Fees = styled.div`
    margin:55px .1px;

    h3{
        text-align:center;
        font-weight:700;
        font-size:39px;
        color: ${color3Dark}
        margin-bottom:31px;
    }
    p{
        width:85%;
        margin:0 auto;
        text-align:center;
        font-size:16px;
        :nth-child(4){
            color: ${primaryColor}
        }
    }
`;