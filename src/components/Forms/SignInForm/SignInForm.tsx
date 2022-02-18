import React from 'react';

import { FormLayout, FormPattern, FormWrap } from './style';

const SignInForm = (props) => {
    return (
        <FormLayout>
            <FormPattern />
            <FormWrap>
                <h2>Регистрация</h2>
                {props.children}
                <span>Есть аккаунт?</span>
            </FormWrap>
        </FormLayout>
    );
}

export default SignInForm;
