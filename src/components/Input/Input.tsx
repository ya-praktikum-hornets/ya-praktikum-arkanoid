import React, { ChangeEvent, HTMLInputTypeAttribute, ReactChild } from 'react';

import { StyledInput } from './styled';

export interface InputProps {
    children?: ReactChild;
    name?: string;
    onBlur: (event: ChangeEvent<HTMLInputElement>) => void;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    type: HTMLInputTypeAttribute;
    value?: string;
}

const Input = (props: InputProps) => {
    return (
        <StyledInput {...props} />
    );
}

export default Input;
