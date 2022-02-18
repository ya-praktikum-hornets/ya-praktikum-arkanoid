import styled, { css } from 'styled-components';

const NavElement = styled.nav`
    display: flex;
    align-items: center;
    gap: 32px;
`;

const NavLink = styled.nav<{ asButton?: boolean }>`
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    color: ${({asButton}) => asButton ? '#fff' : '#272C32'} ;
    text-decoration: none;
    text-transform: uppercase;

    ${({asButton}) => asButton && css`
        display: block;
        padding: 10px 26px;
        background: #0B82FF;
        border-radius: 4px;
    `}
`;

export { NavElement, NavLink };
