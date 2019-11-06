import React,{Component} from 'react';
import styled from 'styled-components';
import {primaryColor, secondaryColor, color3Dark} from '../../themes/colors';

const UIInput = styled.input`
    border:none;
    border-bottom:1.5px solid  #e3e3e3;
    width:99%;
    font-size:15px;
    margin-bottom:19px;
    padding-left:18px;
    outline:none;
    color:${primaryColor};
    ::placeholder{
        color:${color3Dark};
    }
`;
class Input extends Component {
    state = {  }
    render() { 
        const {type,placeholder} = this.props;
        return ( 
            <UIInput type={type} placeholder={placeholder}/>
         );
    }
}
 
export default Input;