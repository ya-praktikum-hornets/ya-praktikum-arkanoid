import React from 'react';

import { Nav } from '..';

import { StyledHeader } from './styled';
import { HeaderProps } from '@types';
import logo from '@public/images/logo.svg';

const Header = (props: HeaderProps) => {
    return (
        <StyledHeader>
            <img src={logo} />
            <Nav {...props} />
        </StyledHeader>
    );
}

export default Header;
