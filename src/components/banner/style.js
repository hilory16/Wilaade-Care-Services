import styled from 'styled-components';
import { primaryColor, secondaryColor, color3Dark } from '../../themes/colors';

export const Wrapper = styled.div`
    width:100%;
    height:100vh;
    position:relative;
    @media only screen and (max-width:768px){
        margin-top:120px;
        padding-top:80px;
        height:90vh;
    }
    @media only screen and (max-width:500px){
        margin-top:80px;
        padding-top:30px;
        height:90vh;
    }
`;

export const Content= styled.div`
    display:flex;
    // justify-content:space-between;
    padding:0 100px;
    @media only screen and (max-width:768px){
        padding:0 30px;
    }
    @media only screen and (max-width:1000px){
        display:block;
    }
    @media only screen and (max-width:500px){
        padding:0;
    }
`;

export const Image = styled.div`
    padding-right:165px;
    @media only screen and (max-width:1000px){
        padding-right:0;
    }
    img{
        height:calc(100vh - 115px);
        @media only screen and (max-width:1000px){
            height:calc(100vh - 450px);;
        }
        @media only screen and (max-width:1000px){
           display:none;
        }
    }
    
`;

export const Text = styled.div`
    // height:100%;
    // width:50%;
    color:${color3Dark};
    padding-top:55px;
    width:80%;
    @media only screen and (max-width:768px){
        width:99%;
        padding-top:75px;
    }
    @media only screen and (max-width:500px){
        width:95%;
        padding-top:40px;
    }
    h1{
        margin-bottom:28px;
        font-weight:700;
        font-size:55px;
        @media only screen and (max-width:768px){
            font-size:70px;
        }
        @media only screen and (max-width:500px){
            font-size:41px;
        }
        span{
            display:block;
            margin-top:1px;
        }
    }

    div{
        display:flex;
    }
`;

export const Blocks = styled.div`
    margin-top:-135px;
    position:absolute;
    bottom:0;
`;