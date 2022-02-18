import styled from 'styled-components';

const ContainerElement = styled.main<{
    justify: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'space-between' | 'space-around',
    align: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline',
    direction: 'column' | 'row' | 'column-reverse' | 'row-reverse',
    gap: string,
}>`
    height: calc(100vh - 70px);
    padding: 20px 0 20px 0;

    display: flex;
    justify-content: ${({justify}) => justify || 'stretch'};
    align-items: ${({align}) => align || 'stretch'};
    flex-direction: ${({direction}) => direction || 'row'};
    gap: ${({gap}) => gap || '0'};
`;

export { ContainerElement };
