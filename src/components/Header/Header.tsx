import React from 'react';

import { StyledHeader } from './styled';
import { Logo, Nav } from '@components';

const Header = (props) => {
    return (
        <StyledHeader>
            <Logo />
            <Nav {...props} />
        </StyledHeader>
    );
}

export default Header;
