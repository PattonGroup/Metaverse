import React from 'react';
import { Nav, NavContainer, NavLogo, MobileIcon, NavMenu, 
    NavItems, NavLinks, NavBtn, NavBtnLink } from './elements';
import {FaBars} from 'react-icons/fa';

const index = () => {
    return (
        <>
            <Nav>
                <NavContainer>
                    <NavLogo to="/">Meta</NavLogo>
                    <MobileIcon>
                        <FaBars/>
                    </MobileIcon>
                    <NavMenu>
                        <NavItems>
                            <NavLinks to="about">About</NavLinks>
                        </NavItems>
                        <NavItems>
                            <NavLinks to="discover">Discover</NavLinks>
                        </NavItems>
                        <NavItems>
                            <NavLinks to="services">Services</NavLinks>
                        </NavItems>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to="signup">Sign Up</NavBtnLink>
                    </NavBtn>
                </NavContainer>
            </Nav> 
        </>
    )
}

export default index
