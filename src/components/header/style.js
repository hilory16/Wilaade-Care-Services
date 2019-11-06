import styled from 'styled-components';
import {primaryColor,color3Dark} from "../../themes/colors";

export const Wrapper = styled.div`
    padding:30px 0;
    display:flex;
    justify-content:space-between;
    @media only screen and (max-width:768px){
        background:white;
        padding-left:40px;
        padding-right:40px;
        position: fixed;
        z-index:500;
        top: 0;
        left: 0;
        right: 0;
        color:black;
    }
    @media only screen and (max-width:500px){
        padding:16px 0;
        padding-left:20px;
        padding-right:30px;
    }
`;

export const Logo = styled.div`
    color:${primaryColor};
    img{
        width:100px;
        @media only screen and (max-width:768px){
            width:90px;
            padding-left:10px;
        }
        @media only screen and (max-width:500px){
            width:50px;
            padding-left:0px;
        }
    }
`;

export const Nav = styled.div`
    ul{
        li{
            display:inline;
            text-decoration:none;
            padding:0 23px;
            @media only screen and (max-width:768px){
                display:block;
                padding:20px 0px;
            }
            @media only screen and (max-width:500px){
                padding:10px 0px;
            }
            a{
                color:white;
                font-weight:400;
                font-size:20px;
                text-decoration:none;
                position:relative;
                transition:all ease .3;
                :before{
                    content:'';
                    background:white;
                    width:0;
                    height:1px;
                    position:absolute;
                    bottom:0;
                    transition:all ease .3;
                }
                @media only screen and (max-width:768px){
                    font-size:34px;
                    color:${color3Dark};
                }
                @media only screen and (max-width:500px){
                    font-size:26px;
                
                }
                :hover:before{
                    width:100%;
                }
            }
        }
        @media only screen and (max-width:768px){
            position:absolute;
            top:137px;
            left:${(props) => props.show ? "0" : "-100%"};
            right:0;
            height:calc(100vh - 150px);
            background:white;
            color:black;
            padding-top:80px;
            padding-left:60px;
            width:100%;
            transition:all ease .3s;
        }
        @media only screen and (max-width:500px){
            top:80px;
            height:calc(100vh - 80px);
            padding-top:40px;
            padding-left:30px;
        }
        
    }
`;

export const ToggleNav = styled.div`
    color:white;
    display:none;
    
    i{
        font-size:50px;
        color:${color3Dark};
        @media only screen and (max-width:500px){
            font-size:30px;
        }
    }
    @media only screen and (max-width:768px){
        display:block;
    }
    
`;