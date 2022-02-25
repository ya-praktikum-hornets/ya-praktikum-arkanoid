import React from 'react';

import { StyledButton } from './styled';

export enum ButtonSize {
    XS = 'XS',
    S = 'S',
    M = 'M',
    L = 'L',
}

export enum ButtonType {
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
    buttonType: ButtonType,
}

const Button = (props: ButtonProps) => {
    return (
        <StyledButton {...props} />
    );
}

export { Button };
