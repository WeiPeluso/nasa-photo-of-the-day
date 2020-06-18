import React from 'react';
import styled from 'styled-components';

const PStyle=styled.p`

display:block;
    line-height: 1.3;
    font-size: 1rem;
    letter-spacing: .5px;
    color: #0b3d91;

    ${props => (props.type === 'date' ? `  font-size: 1.5rem;` : `  font-size: 1rem;`)}
`
export default PStyle;
