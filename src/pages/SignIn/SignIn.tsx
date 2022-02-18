import React from 'react';

import { Form, Header, Container, SignInForm, Button, Input } from '../../components';

function SingIn() {
    return (
        <>
            <Header isLogin />
            <Container justify='center' align='center'>
                <SignInForm>
                    <Form>
                        <Input type="text" name="firstName" placeholder="Имя" />
                        <Input type="text" name="secondName" placeholder="Фамилия" />
                        <Input type="text" name="login" placeholder="Логин" />
                        <Input type="tel" name="phone" placeholder="Телефон" />
                        <Input type="email" name="email" placeholder="Почта" />
                        <Input type="password" name="password" placeholder="Пароль" />
                        <Button primary>Зарегистрироваться</Button>
                    </Form>
                </SignInForm>
            </Container>
        </>
    );
}

export default SingIn;
