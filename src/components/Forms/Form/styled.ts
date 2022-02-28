import styled from 'styled-components';
import pattern from '@public/images/pattern.svg'

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
`;

const StyledFormLayout = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    max-height: 65rem;
    min-height: 58rem;
    background: ${({ theme }) => theme.colors.containerBg};
    border-radius: 1rem;
`;

const StyledFormPattern = styled.div`
    background: url(${pattern}) no-repeat;
    background-size: cover;
    min-width: 35rem;
    border-radius: 1rem 0 0 1rem;
`;

const StyledFormWrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2.4rem;

    padding: 5rem;

    h2 {
        font-weight: 600;
        font-size: 2.4rem;
        text-align: center;
    }

    span {
        font-weight: 400;
        font-size: 1.2rem;
        text-align: center;
        color: ${({ theme }) => theme.colors.label};
    }
`;

export { StyledForm, StyledFormLayout, StyledFormPattern, StyledFormWrap };
