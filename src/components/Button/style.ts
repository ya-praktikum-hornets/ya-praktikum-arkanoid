import styled from 'styled-components';

const ButtonElement = styled.button<{ primary: boolean }>`
    max-width: 250px;
    width: 100%;
    height: 52px;

    border: none;

    font-family: inherit;
    font-weight: 600;
    font-size: 14px;
    color: ${({ theme }) => theme.colors.white};
    background: ${({ primary, theme }) => primary ? theme.colors.primary : theme.colors.secondary};
    border-radius: 6px;
`;

export { ButtonElement };
