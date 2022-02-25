import React from 'react';

import { Form, Header, Container, LoginForm, Button, ButtonType, ButtonSize, TextField, PasswordField } from '@components';

function Login() {
    return (
        <>
            <Header isLogin />
            <Container justify='center' align='center'>
                <LoginForm>
                    <Form>
                        <TextField name="login" placeholder="Login" />
                        <PasswordField name="password" placeholder="Password" />
                        <Button buttonType={ButtonType.primary} size={ButtonSize.L}>Войти</Button>
                    </Form>
                </LoginForm>
            </Container>
        </>
    );
}

export default Login;
