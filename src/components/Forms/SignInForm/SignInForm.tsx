import React from 'react';

import { StyledFormLayout, StyledFormPattern, StyledFormWrap } from '../Form/styled';

const SignInForm = (props) => {
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
