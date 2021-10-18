import styled from 'styled-components'
import { colors } from './Colors';
//Title

export const Title = styled.p`
    font-size:${props=>props.fontSize};
    font-style: ${props=>props.fontStyle};
    font-weight: ${props=>props.fontWeight};
    color:${props=>props.color};
    margin:${props=>props.margin};
    padding:${props=>props.padding};
`;

export const HeaderSm = styled.p`
    font-size:1.3rem;
    font-weight:600;
    color:${colors.dark}
`;

export const Title1 = styled.p`
    font-size:1.1rem;
    font-weight: 500;
    color:${colors.dark}
`;