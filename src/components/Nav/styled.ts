import styled, { css } from 'styled-components';

import { HeaderProps } from '../Header/Header';

const StyledNav = styled.nav`
    display: flex;
    align-items: center;
    gap: 3.2rem;
`;

const StyledNavLink = styled.nav<HeaderProps>`
    font-style: normal;
    font-weight: 600;
    font-size: 1.4rem;
    color: ${({ type, theme }) => type === 'button' ? theme.colors.buttonText : theme.colors.text} ;
    text-decoration: none;
    text-transform: uppercase;

    ${({ type }) => type === 'button' && css`
        display: block;
        padding: 1rem 2.6rem;
        background: ${({ theme }) => theme.colors.primary};
        border-radius: 0.4rem;
    `}
`;

export { StyledNav, StyledNavLink };
