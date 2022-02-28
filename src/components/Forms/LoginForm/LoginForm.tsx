import React from 'react';

import { FormProps } from '../Form/Form';
import { StyledFormLayout, StyledFormPattern, StyledFormWrap } from '../Form/styled';

const LoginForm = (props: FormProps) => {
    const { children } = props;

    return (
        <StyledFormLayout>
            <StyledFormPattern />
            <StyledFormWrap>
                <h2>Вход</h2>
                {children}
                <span>Нет аккаунта?</span>
            </StyledFormWrap>
        </StyledFormLayout>
    );
}

export default LoginForm;
