import React from 'react';

import { StyledHeader } from './styled';
import { Logo, Nav } from '@components';

export enum NavType {
    link = 'link',
    button = 'button'
}
export interface HeaderProps {
    type?: NavType,
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
