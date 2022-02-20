import React from 'react';

import { Form, Header, Container, LoginForm, Button, TextField, PasswordField } from '@components';

function Login() {
    return (
        <>
            <Header isLogin />
            <Container justify='center' align='center'>
                <LoginForm>
                    <Form>
                        <TextField name="login" placeholder="Login" />
                        <PasswordField name="password" placeholder="Password" />
                        <Button primary>Войти</Button>
                    </Form>
                </LoginForm>
            </Container>
        </>
    );
}

export default Login;
