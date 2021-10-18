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
  height:300px;
  display:flex;
  flex-direction:column;

`;


// header SVG

const WaveHeaderSVG = ({imgOpacity, position, top}) => {

    const HeaderContainer = styled.div`
    height:100%;
    width:100%;
    opacity:${imgOpacity};
    position:${position};
    top:${top}
    `;
    const HeaderImgStyle={
        maxWidth:"100%",
        height:"auto",
        
    }

    return (
        <HeaderContainer>
            <img src={headerimg} style={HeaderImgStyle}/>
        </HeaderContainer>

    )
}





