import styled from 'styled-components';

const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    height: 7rem;

    background: ${({ theme }) => theme.colors.containerBg};
    padding: 0 1.6rem;
`;

export { StyledHeader };
