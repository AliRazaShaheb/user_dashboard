import React,{useState} from 'react'
import styled from 'styled-components'
import { BigContainer,SmallContainer } from '../components/common/Containers'
import { colors } from '../theme/Colors'
import { HeaderSm } from '../theme/Typography'
import UserMenu from '../components/dashboard/UserMenu'
import {UserAccountOne} from '../components/common/UserAccount'
import IndexChat from '../components/dashboard/chat/IndexChat'
import Sidebar from '../components/dashboard/Sidebar'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import ComingSoon from '../components/common/ComingSoon'


const UserPost = () => {
    
    const [sideBar, setSideBar] = useState(false)
    // userMenu popup state management
    const [popup, setPopup] = useState(false);
    
    // function for poppup
    const handlePopup = ()=>{
        setPopup((prev)=>!prev);
    }
    const handleOpenSideBar= ()=>{
        setSideBar((prev)=>!prev)
    }
   
    return (
        // main container on body
        <BigContainer 
            width="100%" 
            padding="2% 5%" 
        >

            {/* left section */}
            <LeftSection flex={2} 
                justify="center" 
                align="center"
            >
                    <Sidebar />
            </LeftSection>

            <Wrapper sideBar={sideBar}>
                <Sidebar />
                <CancelContainer onClick={handleOpenSideBar}>
                    <CloseIcon/>
                </CancelContainer>
            </Wrapper>
            <Backdrop onClick={handleOpenSideBar} sideBar={sideBar}></Backdrop>

            {/* right section */}
            <RightSection 
                flex={8} 
                flexDirection="column"
            >
               
                {/* right section top */}
                <Top flex={1.2} 
                    display="flex"
                    justify="space-between"
                    align="center"
                    padding="0 20px"
                >
                    <Left>
                        <Hamburger onClick={handleOpenSideBar}>
                            <MenuIcon 
                                sx={{width:"30px",height:"30px" }} 
                            />
                        </Hamburger>
                        {/* Nav name */}
                        <HeaderSm> Posts </HeaderSm>
                    </Left>
                    
                    {/* user id */}
                    <div>
                        <UserAccountOne handlePopup={handlePopup} />
                    </div>
                </Top>

                {/* right section bottom */}
                <Bottom 
                    flex={8.8} 
                    justify="center" 
                    align="center" 
                    padding="2% 0 0 0"
                >
                    <ComingSoon />    
                       
                </Bottom>
            
            </RightSection>


            {/* Chat Bar */}
            <IndexChat />

            {/* User menu Popup */}
                <UserMenu popup={popup} />
            <UserMenuPop popup={popup} onClick={handlePopup}>
            </UserMenuPop>

        </BigContainer>
    )
}

export default UserPost

//****should be removed this after work done */


// style

const Hamburger = styled.div`
    width: 30px;
    height: 30px;
    display:flex;
    justify-content: center;
    align-items:center;
    cursor:pointer;
    display: block;
    margin-right: 20px;
    @media only screen and (min-width: 1230px) {
    /* For mobile phones: */
        display: none;
    }
`;


// Right Section
const LeftSection = styled(SmallContainer)`
    margin-right: 4%;
    @media only screen and (max-width: 1230px) {
    /* For mobile phones: */
        display: none;
    }
`;
const Backdrop = styled.div`
    width: 100vw;
    height: 100vh;
    position: absolute;
    background: rgba(0,0,0,0.05);
    top:0;
    left:0;
    display:${props=>props.sideBar?"block" : "none"};;
`;
const Wrapper = styled.div`
    width: 350px;
    height: 100vh;
    position: absolute;
    left:${props=>props.sideBar?"-50px" : "-350px"};
    padding-left:50px;
    top:0;
    display: flex;
    justify-content: center;
    align-items:center;
    background:linear-gradient(200deg, ${colors.primary} 0%, ${colors.secondary} 100%);
    z-index: 1000;
    overflow:hidden;
    transition: all 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55);
    box-shadow: rgba(0, 0, 0, 0.5) 0px 3px 8px;
`;
const CancelContainer = styled.div`
    width: 30px;
    height: 30px;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top:20px;
    left: 300px;
    color:${colors.white};
    cursor: pointer;

`;
const Left = styled(SmallContainer)`
    display: flex;
    justify-content: center;
    align-items:center;
    width:auto;
    height:auto;
`;
// style as name suggests

const RightSection = styled(SmallContainer)``;
// style as name suggests


// General components
const Top = styled(SmallContainer)`
    border-bottom: 2px solid ${colors.gray};
    padding-bottom:5px;
    @media only screen and (max-width: 1230px) {
        /* For mobile phones: */
            flex: 1;
            padding-left: 30px;
        }
`;
const Bottom = styled(SmallContainer)`
    
    @media only screen and (max-width: 1230px) {
        /* For mobile phones: */
            flex: 9;

        }
    @media only screen and (max-width: 768px) {
        /* For mobile phones: */
            flex-direction: column;

        }

`;



const UserMenuPop = styled.div`
    width:100vw;
    height:100vh;
    display:${props=>props.popup?"block":"none"};
    position:absolute;
    right:0;
    top:0;
    z-index:995;

`;

