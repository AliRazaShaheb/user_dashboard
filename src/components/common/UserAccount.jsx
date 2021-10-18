import React from 'react'
import styled from 'styled-components'
import {colors} from '../../theme/Colors';
import { Avatar } from '@mui/material';
import { NavLink as Link } from 'react-router-dom'
import { Title } from '../../theme/Typography'
import { useSelector } from 'react-redux';
import { userListSelector } from '../../state/UserListSlice';
import {useDispatch} from 'react-redux';
import {setSelectedUserID} from '../../state/UserListSlice'
import { SmallContainer } from './Containers';




// userIds for login, usermenu (for switching users)
const UserAccount = ({name, profilepicture, id}) => {
    const dispatch = useDispatch();
        
    
    return (
        <NavLink to="/userProfile" onClick={()=>{dispatch(setSelectedUserID(id))}}>
            <Avatar 
                alt={name} 
                src={profilepicture}
                sx={{ width: 35, height: 35 }}
            />
            <Title 
                align="left" 
                margin="0 0 0 10px"
            > 
                    {name} 
            </Title>
        </NavLink>
    )
}

export default UserAccount

// userIds for chatList
export const UserAccountChat = ({name, profilepicture, id}) => {
    const dispatch = useDispatch();
    
    
    return (
        <AccountWrapper 
            display="flex"
            justify="flex-start"
            align="center"
            onClick={()=>{dispatch(setSelectedUserID(id))}}>
            <Avatar 
                alt={name} 
                src={profilepicture}
                sx={{ width: 35, height: 35 }}
            />
            <Title 
                align="left" 
                margin="0 0 0 10px"
            > 
                    {name} 
            </Title>
        </AccountWrapper>
    )
}



    

// userIds for topbar
export const UserAccountOne = ({handlePopup}) => {
    const {selectedUser} = useSelector(userListSelector)
    
    
    return (
        
        <AccountWrapper 
            display="flex"
            justify="center"
            align="center"
            onClick={handlePopup}>
            <Avatar 
                alt={selectedUser.name} 
                src={selectedUser.profilepicture}
                sx={{ width: 35, height: 35 }}
            />
            <Title 
                align="left" 
                margin="0 0 0 10px"
            > 
                    {selectedUser.name} 
            </Title>
        </AccountWrapper>
    )
}


// userIds for header active user chat
export const UserAccountActiveChat = ({name, profilepicture}) => {
    
    return (
        <AccountWrapper 
            display="flex"
            justify="flex-start"
            align="center"
        >
            <Avatar 
                alt={name} 
                src={profilepicture}
                sx={{ width: 30, height: 30 }}
            />
            <Title 
                align="left" 
                margin="0 0 0 10px"
                color="white"
            > 
                    {name} 
            </Title>
        </AccountWrapper>
    )
}



// style

const AccountWrapper = styled(SmallContainer)`
    cursor: pointer;
`;

const NavLink = styled(Link)`
    text-decoration:none;
    display:flex;
    align-items: center;
    color:${colors.dark};
    width:100%;
    
`;
