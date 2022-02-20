import styled from 'styled-components';
import { ContainerProps } from './Container';

const StyledContainer = styled.main<ContainerProps>`
    height: calc(100vh - 7rem);
    padding: 2rem 0;

    display: flex;
    justify-content: ${({justify}) => justify || 'stretch'};
    align-items: ${({align}) => align || 'stretch'};
    flex-direction: ${({direction}) => direction || 'row'};
    gap: ${({gap}) => gap || '0'};
`;

export { StyledContainer };
