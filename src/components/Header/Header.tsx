import React from 'react';
import { HeaderElement } from './style';

import logo from '../../../public/images/logo.svg';
import { Nav } from '../../components';

const Header = () => {
    return (
        <HeaderElement>
            <img src={logo} />
            <Nav />
        </HeaderElement>
    );
}

export default Header;
