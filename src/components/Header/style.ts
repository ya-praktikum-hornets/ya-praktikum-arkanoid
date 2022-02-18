import styled from 'styled-components';

const HeaderElement = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 70px;
    padding: 0 16px;
    background: ${({ theme }) => theme.colors.containerBg};

    img {
        width: 177px;
        height: 18px;
    }
`;

export { HeaderElement };
