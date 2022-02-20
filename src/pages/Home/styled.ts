import styled from 'styled-components';

const Title = styled.h1`
    max-width: 700px;
    font-weight: 600;
    font-size: 48px;
    line-height: 58px;
    text-align: center;
    color: ${({ theme }) => theme.colors.white};
`;

const Subtitle = styled.p`
    font-weight: 500;
    font-size: 24px;
    text-align: center;
    color: ${({ theme }) => theme.colors.white};
    margin-bottom: 40px;
`;

export { Title, Subtitle };
