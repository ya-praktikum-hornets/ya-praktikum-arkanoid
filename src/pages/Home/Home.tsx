import React from 'react';

import { Header, Container, Button } from '@components';
import { Subtitle, Title } from './styled';

function Home() {
    return (
        <>
            <Header />
            <Container justify='center' align='center' gap='2rem' direction='column'>
                <Title>Обманчиво простая и невероятно интересная игра</Title>
                <Subtitle>Приветствуем вас в Arkanoid</Subtitle>
                <Button>Начать игру</Button>
            </Container>
        </>
    );
}

export default Home;
