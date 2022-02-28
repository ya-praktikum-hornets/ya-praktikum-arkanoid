import React, { ChangeEvent, HTMLInputTypeAttribute, ReactChild } from 'react';

import { StyledInput } from './styled';

export interface InputProps {
    children?: ReactChild;
    name?: string;
    onBlur?: (event: ChangeEvent<HTMLInputElement>) => void;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    type?: HTMLInputTypeAttribute;
    value?: string;
}

const TextField = (props: InputProps) => {
    return (
        <StyledInput {...props} type='text' />
    );
}

const PasswordField = (props: InputProps) => {
    return (
        <StyledInput {...props} type='password' />
    );
}

const PhoneField = (props: InputProps) => {
    return (
        <StyledInput {...props} type='tel' />
    );
}

const EmailField = (props: InputProps) => {
    return (
        <StyledInput {...props} type='email' />
    );
}

export { TextField, PasswordField, PhoneField, EmailField };
