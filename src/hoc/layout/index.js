import React, { Component } from 'react';
import styled from 'styled-components';


class Layout extends Component {
    state = {  }

    wrapper = styled.div`  
       font-family: 'Open Sans', sans-serif;
        // padding:0 100px;
    `;
    render() { 
        return ( 
            <this.wrapper>
                {this.props.children}
            </this.wrapper>
         );
    }
}
 
export default Layout;