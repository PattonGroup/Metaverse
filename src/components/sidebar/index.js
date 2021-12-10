import React from 'react'
import {SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidearRoute,
    SideBtnWrap, SidebarLink, SidebarMenu} from './elements';

const Sidebar = () => {
    return (
        <SidebarContainer>
            <Icon>
                <CloseIcon/>
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to='about'>About</SidebarLink>
                    <SidebarLink to='discover'>Discover</SidebarLink>
                    <SidebarLink to='services'>Services</SidebarLink>
                    <SidebarLink to='Signup'>Sign Up</SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidearRoute to="/">Sign In</SidearRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar;
