import React from 'react';

import { StyledForm } from './styled';

export interface FormProps {
    children?: React.ReactNode;
}

const Form = (props: FormProps) => {
    return (
        <StyledForm {...props} />
    );
}

export default Form;
