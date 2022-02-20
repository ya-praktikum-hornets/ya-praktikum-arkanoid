import React from 'react';

import { StyledContainer } from './styled';

export interface ContainerProps {
    justify: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'space-between' | 'space-around',
    align: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline',
    direction: 'column' | 'row' | 'column-reverse' | 'row-reverse',
    gap: string,
}

const Container = (props: ContainerProps) => {
    return (
        <StyledContainer {...props} />
    );
}

export default Container;
