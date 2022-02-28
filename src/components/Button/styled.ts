import styled, { css, FlattenInterpolation, FlattenSimpleInterpolation, ThemeProps } from 'styled-components';

import { ButtonProps, ButtonSize, ButtonType } from './Button';

type StyledVariants<E extends string | number> = {
    [key in E]?: FlattenSimpleInterpolation | FlattenInterpolation<ThemeProps<any>>
}

const sizes: StyledVariants<ButtonSize> = {
    [ButtonSize.XS]: css`
    height: 2.8rem;
    font-size: 1.2rem;
    font-weight: 400;
    `,
    [ButtonSize.S]: css`
    height: 3.6rem;
    font-size: 1.4rem;
    font-weight: 400;
    `,
    [ButtonSize.M]: css`
    height: 4.8rem;
    font-size: 1.4rem;
    font-weight: 500;
    `,
    [ButtonSize.L]: css`
    height: 5.2rem;
    font-size: 1.4rem;
    font-weight: 500;
`
}

const types: StyledVariants<ButtonType> = {
    [ButtonType.primary]: css`
    color: ${({ theme }) => theme.colors.buttonText};
    background: ${({ theme }) => theme.colors.primary};
    `,
    [ButtonType.secondary]: css`
    color: ${({ theme }) => theme.colors.buttonText};
    background: ${({ theme }) => theme.colors.secondary};
    `,
    [ButtonType.success]: css`
    color: ${({ theme }) => theme.colors.buttonText};
    background: ${({ theme }) => theme.colors.success};
    `,
    [ButtonType.danger]: css`
    color: ${({ theme }) => theme.colors.buttonText};
    background: ${({ theme }) => theme.colors.danger};
`
}

const StyledButton = styled.button<ButtonProps>`
    max-width: 25rem;
    width: 100%;

    border: none;
    border-radius: 0.6rem;

    ${({ size }) => sizes[size]}
    ${({ buttonType }) => types[buttonType]}
`

export { StyledButton };
