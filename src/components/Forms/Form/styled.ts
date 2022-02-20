import styled from 'styled-components';
import pattern from '@public/images/pattern.svg'

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 12px;
`;

const StyledFormLayout = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;

    height: 100%;
    max-height: 650px;
    min-height: 580px;

    background: ${({ theme }) => theme.colors.containerBg};
    border-radius: 10px;
`;

const StyledFormPattern = styled.div`
    background: url(${pattern}) no-repeat;
    background-size: cover;

    min-width: 350px;
    height: 100%;

    border-radius: 10px 0 0 10px;
`;

const StyledFormWrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 24px;

    padding: 50px;

    h2 {
        font-weight: 600;
        font-size: 24px;
        text-align: center;
    }

    span {
        font-weight: 400;
        font-size: 12px;
        text-align: center;
        color: ${({ theme }) => theme.colors.label};
    }
`;

export { StyledForm, StyledFormLayout, StyledFormPattern, StyledFormWrap };
