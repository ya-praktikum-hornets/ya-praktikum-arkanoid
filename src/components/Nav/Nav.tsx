import React from 'react';

import { HeaderProps } from '../Header/Header';
import { StyledNav, StyledNavLink } from './styled';

const Nav = (props: HeaderProps) => {
    const { isLogin } = props;

    if (isLogin) {
        return (
            <StyledNav>
                <StyledNavLink>Форум</StyledNavLink>
                <StyledNavLink>Лидерборд</StyledNavLink>
                <StyledNavLink>Настройки</StyledNavLink>
                <StyledNavLink type={'button'}>Играть</StyledNavLink>
            </StyledNav>
        );
    }

    return <></>
}

export default Nav;
