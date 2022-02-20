import styled from 'styled-components';
import { ButtonProps } from './Button';

const StyledButton = styled.button<ButtonProps>`
    max-width: 250px;
    width: 100%;
    height: 52px;

    border: none;
    border-radius: 6px;

    font-weight: 600;
    font-size: 14px;
    color: ${({ theme }) => theme.colors.white};
    background: ${({ primary, theme }) => primary ? theme.colors.primary : theme.colors.secondary};
`;

export { StyledButton };
