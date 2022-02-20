import React from 'react';

import { Nav } from '..';

import { HeaderElement } from './style';
import { HeaderProps } from '@types';
import logo from '@public/images/logo.svg';

const Header = (props: HeaderProps) => {
    return (
        <HeaderElement>
            <img src={logo} />
            <Nav {...props} />
        </HeaderElement>
    );
}

export default Header;
