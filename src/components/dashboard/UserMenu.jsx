import React from 'react'
import { Avatar, Divider } from '@mui/material'
import styled from 'styled-components'
import { SmallContainer } from '../common/Containers'
import { colors } from '../../theme/Colors'
import { borderRadius } from '../../theme/BorderRadius'
import { Title, Title1 } from '../../theme/Typography'
import UserLists from '../login/UserLists'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { userListSelector } from '../../state/UserListSlice';

const UserMenu = ({popup}) => {
    const {selectedUser} = useSelector(userListSelector)
    return (
        <MenuContainer popup={popup}>
            <MenuWrapper 
                flexDirection="column" 
                padding="0 25px">
                    <Top 
                        flex={3.2} 
                        flexDirection="column" 
                        justify="space-between" 
                        align="center" 
                        padding="10px" 
                    >
                        <Avatar 
                            alt={selectedUser.name} 
                            src={selectedUser.profilepicture} 
                            sx={{ width: 90, height: 90, marginBottom:1 }}
                        />
                        <Title1>{selectedUser.name}</Title1>
                        <Title 
                            color={`${colors.grayDark}`} 
                            margin="5px 0 0 0">{selectedUser.email}
                        </Title>
                    </Top>
                    <Divider />
                
                <Center 
                    flex={3.6} 
                    justify="flex-start" 
                    align="center" 
                    flexDirection="column" >
                    <AccountListWrapper>
                        <UserLists />
                    </AccountListWrapper>
                </Center>
               
                <Bottom 
                    flex={3.2} 
                    justify="center" 
                    align="center" >
                    
                    <LogoutBtn>
                        <Link to="/" 
                        activestyle="true" 
                        style={{ textDecoration: 'none' }}
                        >
                            <Title 
                                color={`${colors.white}`} 
                                fontSize="1.1rem" 
                                fontWeight="400" 
                            >
                                Sign Out
                            </Title>
                        </Link>  
                    </LogoutBtn>

                </Bottom>
            </MenuWrapper>
        </MenuContainer>
    )
}

export default UserMenu


// style


const MenuContainer = styled(SmallContainer)`
    width:300px;
    height:400px;
    border-radius:${borderRadius.radius40};
    padding:20px 10px;
    position:absolute;
    right:5%;
    top:15%;
    z-index:999;
    background-color:${colors.white};
    transition: all 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55);
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
    transform:${props=>props.popup?"scaleY(1)":"scaleY(0)"};
    opacity: ${props=>props.popup?"1":"0"};
    transform-origin: top center;
    @media only screen and (max-width: 1200px) {
        /* For mobile phones: */
        right:5%;
        top:12%;

        }
    @media only screen and (max-width: 768px) {
        /* For mobile phones: */
        right:5%;
        top:10%;

        }
`;




const MenuWrapper = styled(SmallContainer)`
    border-radius:${borderRadius.radius40};
`;
const Top = styled(SmallContainer)``;
const AccountListWrapper = styled(SmallContainer)`
    position: absolute;
    height: 600px;
    top:0;
    left:0;
    display: flex;
    flex-direction: column;
`;
const Center = styled(SmallContainer)`
    padding:20px 0;
    height:150px;
    position:relative;
    overflow-y: scroll;
    /* scroll design */
    ::-webkit-scrollbar {
    width: 21px;
    height: 50px; 
    }
    ::-webkit-scrollbar-thumb {
    background-color: ${colors.gray};
    border-radius:20px;
    background-clip: content-box;
    border: 7px solid transparent;
    }
    ::-webkit-scrollbar-track {
        width:10px;
    }
`;
const Bottom = styled(SmallContainer)``;

const LogoutBtn = styled.button`
    padding:7px 17px;
    background-color:${colors.pinkDark};
    outline:none;
    border:none;
    border-radius:${borderRadius.radius40};
    cursor:pointer;
    &:hover{
        background-color:${colors.pinkHover};
    }
`;


