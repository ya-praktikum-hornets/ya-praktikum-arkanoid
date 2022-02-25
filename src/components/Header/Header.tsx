import React from 'react';

import { StyledHeader } from './styled';
import { Logo, Nav } from '@components';

export interface HeaderProps {
    type?: 'link' | 'button',
    isLoggedIn?: boolean,
}

const Header = (props: HeaderProps) => {
    return (
        <StyledHeader>
            <Logo />
            <Nav {...props} />
        </StyledHeader>
    );
}

export default Header;
