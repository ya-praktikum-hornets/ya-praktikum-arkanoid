import styled from 'styled-components';

import { InputProps } from './Inputs';

const StyledInput = styled.input<InputProps>`
    width: 100%;
    height: 4.8rem;

    background: ${({ theme }) => theme.colors.inputBg};
    border: 0.1rem solid ${({ theme }) => theme.colors.line};
    border-radius: 0.6rem;
    padding: 0 1.1em;

    font-weight: 400;
    font-size: 1.4rem;
    color: ${({ theme }) => theme.colors.text};
`;

export { StyledInput };
