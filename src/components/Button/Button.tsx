import React from 'react';

import { StyledButton } from './styled';

export interface ButtonProps {
    primary?: boolean,
    autoFocus?: boolean;
    disabled?: boolean;
    form?: string;
    formAction?: string;
    formEncType?: string;
    formMethod?: string;
    formNoValidate?: boolean;
    formTarget?: string;
    name?: string;
    type?: 'submit' | 'reset' | 'button';
    value?: string | string[] | number;
}

const Button = (props: ButtonProps) => {
    return (
        <StyledButton {...props} />
    );
}

export default Button;
