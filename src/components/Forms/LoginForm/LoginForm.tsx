import React from 'react';

import { StyledFormLayout, StyledFormPattern, StyledFormWrap } from '../Form/styled';

const LoginForm = (props) => {
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
