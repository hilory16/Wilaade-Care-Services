import React, {useState} from 'react';
import * as UI from './style';
import { Link } from 'react-router-dom';

const Header = () => {

    const [toggle, toggelNav] = useState(false);

    const ToggleNav = () =>{
        toggelNav(!toggle);
        console.log(toggle);
    }

    return (
        <div className="container">
            <UI.Wrapper>
                <UI.Logo><img src={require('../../assets/img/wc.png')} alt="Wilaade care services logo"/></UI.Logo>
                {toggle ? 
                    <UI.Nav show>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>

                            <li>
                                <Link to="/about">About</Link>
                            </li>

                            <li>
                                <Link to="/services">Services</Link>
                            </li>

                            <li>
                                <Link to="/team">Team</Link>
                            </li>

                            <li>
                                <Link to="/contact">Contact</Link>
                            </li>
                        </ul>
                    </UI.Nav> 
                    : 
                    <UI.Nav>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>

                            <li>
                                <Link to="/about">About</Link>
                            </li>

                            <li>
                                <Link to="/services">Services</Link>
                            </li>

                            <li>
                                <Link to="/team">Team</Link>
                            </li>

                            <li>
                                <Link to="/contact">Contact</Link>
                            </li>
                        </ul>
                    </UI.Nav>
                }

                <UI.ToggleNav><i class="fa fa-bars" onClick = {ToggleNav}></i></UI.ToggleNav>
            </UI.Wrapper>
        </div>
     );
}
 
export default Header;