import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import { primaryColor } from '../themes/colors';

const Wrapper = styled.div`
    padding:15px 25px;
    font-size:24px;
    color:white;
    background:${primaryColor};
    width:86%;
    margin:0 auto;
    border-radius:4px;
    // border-radius:50%;
    // margin-right:21px;
    box-shadow:.5px .5px 8px rgba(0,0,0,.4);
    .desc{
        font-size:18px;
    }
    .btn{
        padding:3px 7px;
        background:white;
        font-size:12px;
        border-radius:4px;
    }
`;


const Block = ({type, desc}) => {
    return ( 
        <Wrapper>
             <i className={`fa fa-${type}`}></i>
             <p className="desc">{desc}</p>
             <Link to="/"><p className="btn">Read more</p></Link>
        </Wrapper>
     );
}
 
export default Block;