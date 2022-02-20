import styled, { css, FlattenInterpolation, FlattenSimpleInterpolation, ThemeProps } from 'styled-components';

import { ButtonProps, ButtonSize, ButtonColor } from './Button';

type StyledVariants<E extends string | number> = {
    [key in E]?: FlattenSimpleInterpolation | FlattenInterpolation<ThemeProps<any>>
}

const sizes: StyledVariants<ButtonSize> = {
    XS: css`
    height: 2.8rem;
    font-size: 1.2rem;
    font-weight: 400;
    `,
    S: css`
    height: 3.6rem;
    font-size: 1.4rem;
    font-weight: 400;
    `,
    M: css`
    height: 4.8rem;
    font-size: 1.4rem;
    font-weight: 500;
    `,
    L: css`
    height: 5.2rem;
    font-size: 1.4rem;
    font-weight: 500;
`
}

const colors: StyledVariants<ButtonColor> = {
    primary: css`
    color: ${({ theme }) => theme.colors.white};
    background: ${({ theme }) => theme.colors.primary};
    `,
    secondary: css`
    color: ${({ theme }) => theme.colors.white};
    background: ${({ theme }) => theme.colors.secondary};
    `,
    success: css`
    color: ${({ theme }) => theme.colors.white};
    background: ${({ theme }) => theme.colors.success};
    `,
    danger: css`
    color: ${({ theme }) => theme.colors.white};
    background: ${({ theme }) => theme.colors.danger};
`
}

const StyledButton = styled.button<ButtonProps>`
    max-width: 25rem;
    width: 100%;

    border: none;
    border-radius: 0.6rem;

    ${({ size }) => sizes[size]}
    ${({ color }) => colors[color]}
`

export { StyledButton };
