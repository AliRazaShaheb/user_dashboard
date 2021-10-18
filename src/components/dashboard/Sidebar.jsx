import React from 'react'
import MenuLinks from './MenuLinks';
import { SmallContainer } from '../common/Containers';
import styled from 'styled-components';
import { borderRadius } from '../../theme/BorderRadius';
import { colors } from '../../theme/Colors';

const Sidebar = () => {
    return (
        <Wrapper>
            <MenuLinks />
        </Wrapper>
    )
}

export default Sidebar

// side bar
const Wrapper = styled(SmallContainer)`
    display: flex;
    justify-content: center;
    align-items:center;
    background:linear-gradient(200deg, ${colors.primary} 0%, ${colors.secondary} 100%);
    border-radius:${borderRadius.radius40};
    position: relative;

    
`;