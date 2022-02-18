import React from 'react';

import { Form, Header, Container, LoginForm, Button, Input } from '../../components';

function Login() {
    return (
        <>
            <Header isLogin />
            <Container justify='center' align='center'>
                <LoginForm>
                    <Form>
                        <Input type="text" name="login" placeholder="Login" />
                        <Input type="password" name="password" placeholder="Password" />
                        <Button primary>Войти</Button>
                    </Form>
                </LoginForm>
            </Container>
        </>
    );
}

export default Login;
