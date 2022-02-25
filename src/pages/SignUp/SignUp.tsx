import React from 'react';

import { Form, Header, Container, SignInForm,  Button, ButtonType, ButtonSize, TextField, PasswordField, PhoneField, EmailField } from '@components';

function SingIn() {
    return (
        <>
            <Header isLogin />
            <Container justify='center' align='center'>
                <SignInForm>
                    <Form>
                        <TextField name="firstName" placeholder="Имя" />
                        <TextField name="secondName" placeholder="Фамилия" />
                        <TextField name="login" placeholder="Логин" />
                        <PhoneField name="phone" placeholder="Телефон" />
                        <EmailField name="email" placeholder="Почта" />
                        <PasswordField name="password" placeholder="Пароль" />
                        <Button buttonType={ButtonType.primary} size={ButtonSize.L}>Зарегистрироваться</Button>
                    </Form>
                </SignInForm>
            </Container>
        </>
    );
}

export default SingIn;
