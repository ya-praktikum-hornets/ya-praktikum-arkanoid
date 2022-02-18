import React from 'react';

import { Header, Container, Button } from '../../components';
import { Subtitle, Title } from './style';

function Home() {
    return (
        <>
            <Header />
            <Container justify='center' align='center' gap='20px' direction='column'>
                <Title>Обманчиво простая и невероятно интересная игра</Title>
                <Subtitle>Приветствуем вас в Arkanoid</Subtitle>
                <Button>Начать игру</Button>
            </Container>
        </>
    );
}

export default Home;
