import styled from 'styled-components';
import { ButtonProps } from './Button';

const StyledButton = styled.button<ButtonProps>`
    max-width: 25rem;
    width: 100%;
    height: 5.2rem;

    border: none;
    border-radius: 0.6rem;

    font-weight: 600;
    font-size: 1.4rem;
    color: ${({ theme }) => theme.colors.white};
    background: ${({ primary, theme }) => primary ? theme.colors.primary : theme.colors.secondary};
`;

export { StyledButton };
