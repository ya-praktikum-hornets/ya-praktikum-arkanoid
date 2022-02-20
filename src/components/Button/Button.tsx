import React from 'react';

import { StyledButton } from './styled';

export enum ButtonSize {
    XS = 'XS',
    S = 'S',
    M = 'M',
    L = 'L',
}

export enum ButtonColor {
    primary = 'primary',
    secondary = 'secondary',
    success = 'success',
    danger = 'danger',
}

export interface ButtonProps {
    disabled?: boolean,
    name?: string,
    type?: 'submit' | 'reset' | 'button',
    value?: string | string[] | number,
    children?: React.ReactNode,
    size: ButtonSize,
    color: ButtonColor,
}

const Button = (props: ButtonProps) => {
    return (
        <StyledButton {...props} />
    );
}

export default Button;
