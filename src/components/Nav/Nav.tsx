import React from 'react';

import { StyledNav, StyledNavLink } from './styled';
import { HeaderProps } from '@types';

const Nav = (props: HeaderProps) => {
    const { isLogin } = props;

    if (isLogin) {
        return (
            <StyledNav>
                <StyledNavLink>Форум</StyledNavLink>
                <StyledNavLink>Лидерборд</StyledNavLink>
                <StyledNavLink>Настройки</StyledNavLink>
                <StyledNavLink asButton>Играть</StyledNavLink>
            </StyledNav>
        );
    }

    return <></>
}

export default Nav;
