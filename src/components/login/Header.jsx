import React from 'react'
import headerimg from '../../assets/headerWave.svg'
import styled from 'styled-components'

const Header = () => {
    return (
        <WaveHeaderContainer>
            <WaveHeaderSVG 
                imgOpacity={"1"} 
            />
            <WaveHeaderSVG 
                imgOpacity={"0.3"} 
                position={"absolute"} 
                top={"15px"}    
            />
        </WaveHeaderContainer>
    )
}

export default Header

// style

const WaveHeaderContainer = styled.div`
  position:relative;
  height:100vh;
  width:100vw;
  display:flex;
  flex-direction:column;
  overflow:hidden;
  

`;


// header SVG

const WaveHeaderSVG = ({imgOpacity, position, top}) => {

    const HeaderContainer = styled.div`
    height:100%;
    width:100%;
    opacity:${imgOpacity};
    position:${position};
    top:${top};
    `;
    const Img = styled.img`
        width:100%;
        @media only screen and (max-width: 768px) {
        /* For mobile phones: */
        width:300%;

    }
        
    `;
    

    return (
        <HeaderContainer>
            <Img src={headerimg} />
        </HeaderContainer>

    )
}





