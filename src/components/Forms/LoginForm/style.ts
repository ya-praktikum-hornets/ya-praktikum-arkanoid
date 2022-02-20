import styled from 'styled-components';
import pattern from '@public/images/pattern.svg'

const FormLayout = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    height: 100%;
    max-height: 650px;
    min-height: 580px;
    background: ${({ theme }) => theme.colors.containerBg};
    border-radius: 10px;
`;

const FormPattern = styled.div`
    background: url(${pattern}) no-repeat;
    background-size: cover;

    min-width: 350px;
    height: 100%;
    border-radius: 10px 0 0 10px;
`;

const FormWrap = styled.div`
    padding: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    h2 {
        font-weight: 600;
        font-size: 24px;
        margin-bottom: 24px;
        text-align: center;
    }

    span {
        font-weight: 400;
        font-size: 12px;
        text-align: center;

        color: ${({ theme }) => theme.colors.label};
        margin-top: 24px;
    }
`;

export { FormLayout, FormPattern, FormWrap };
