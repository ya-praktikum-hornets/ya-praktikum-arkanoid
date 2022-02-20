import styled, { css } from 'styled-components';

import { HeaderProps } from '../Header/Header';

const StyledNav = styled.nav`
    display: flex;
    align-items: center;
    gap: 32px;
`;

const StyledNavLink = styled.nav<HeaderProps>`
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    color: ${({ type, theme }) => type === 'button' ? theme.colors.white : theme.colors.text} ;
    text-decoration: none;
    text-transform: uppercase;

    ${({ type }) => type === 'button' && css`
        display: block;
        padding: 10px 26px;
        background: ${({ theme }) => theme.colors.primary};
        border-radius: 4px;
    `}
`;

export { StyledNav, StyledNavLink };
