import styled from 'styled-components';

const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    height: 70px;

    background: ${({ theme }) => theme.colors.containerBg};
    padding: 0 16px;
`;

export { StyledHeader };
