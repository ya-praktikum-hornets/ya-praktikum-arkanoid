import React from 'react';

import { Form, Header, Container, SignInForm, Button, Input } from '../../components';

function SingIn() {
    return (
        <>
            <Header isLogin />
            <Container>
                <SignInForm>
                    <Form>
                        <Input type="text" name="login" placeholder="Login" />
                        <Input type="text" name="login" placeholder="Login" />
                        <Input type="text" name="login" placeholder="Login" />
                        <Input type="text" name="login" placeholder="Login" />
                        <Input type="text" name="login" placeholder="Login" />
                        <Input type="password" name="password" placeholder="Password" />
                        <Button>Зарегистрироваться</Button>
                    </Form>
                </SignInForm>
            </Container>
        </>
    );
}

export default SingIn;
