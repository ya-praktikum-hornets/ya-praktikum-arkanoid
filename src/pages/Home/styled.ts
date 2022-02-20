import styled from 'styled-components';

const Title = styled.h1`
    max-width: 70rem;
    font-weight: 600;
    font-size: 4.8rem;
    line-height: 5.8rem;
    text-align: center;
    color: ${({ theme }) => theme.colors.white};
`;

const Subtitle = styled.p`
    font-weight: 500;
    font-size: 2.4rem;
    text-align: center;
    color: ${({ theme }) => theme.colors.white};
    margin-bottom: 4rem;
`;

export { Title, Subtitle };
