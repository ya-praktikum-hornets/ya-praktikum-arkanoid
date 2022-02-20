import styled from 'styled-components';

import { InputProps } from './Input';

const StyledInput = styled.input<InputProps>`
    width: 100%;
    height: 48px;

    background: ${({ theme }) => theme.colors.inputBg};
    border: 1px solid ${({ theme }) => theme.colors.line};
    border-radius: 6px;
    padding: 0 16px;

    font-weight: 400;
    font-size: 14px;
    color: ${({ theme }) => theme.colors.text};
`;

export { StyledInput };
