import React from 'react';

import { NavElement, NavLink } from './style';
import { HeaderProps } from '../../types';

const Nav = ({ isLogin }: HeaderProps) => {
    if (isLogin) {
        return (
            <NavElement>
                <NavLink>Форум</NavLink>
                <NavLink>Лидерборд</NavLink>
                <NavLink>Настройки</NavLink>
                <NavLink asButton>Играть</NavLink>
            </NavElement>
        );
    }
    return <></>
}

export default Nav;
