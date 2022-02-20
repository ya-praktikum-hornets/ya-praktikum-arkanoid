import styled from 'styled-components';
import { ContainerProps } from './Container';

const StyledContainer = styled.main<ContainerProps>`
    height: calc(100vh - 70px);
    padding: 20px 0 20px 0;

    display: flex;
    justify-content: ${({justify}) => justify || 'stretch'};
    align-items: ${({align}) => align || 'stretch'};
    flex-direction: ${({direction}) => direction || 'row'};
    gap: ${({gap}) => gap || '0'};
`;

export { StyledContainer };
