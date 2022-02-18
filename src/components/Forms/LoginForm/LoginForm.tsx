import React from 'react';

import { FormLayout, FormPattern, FormWrap } from './style';

const LoginForm = (props) => {
    return (
        <FormLayout>
            <FormPattern />
            <FormWrap>
                <h2>Вход</h2>
                {props.children}
                <span>Нет аккаунта?</span>
            </FormWrap>
        </FormLayout>
    );
}

export default LoginForm;
