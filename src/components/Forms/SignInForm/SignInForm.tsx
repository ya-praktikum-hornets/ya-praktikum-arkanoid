import React from 'react';

import { FormProps } from '../Form/Form';
import { StyledFormLayout, StyledFormPattern, StyledFormWrap } from '../Form/styled';

const SignInForm = (props: FormProps) => {
    const { children } = props;

    return (
        <StyledFormLayout>
            <StyledFormPattern />
            <StyledFormWrap>
                <h2>Регистрация</h2>
                {children}
                <span>Есть аккаунт?</span>
            </StyledFormWrap>
        </StyledFormLayout>
    );
}

export default SignInForm;
