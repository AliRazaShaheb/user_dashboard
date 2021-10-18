import React from 'react';
import styled from 'styled-components';
import UserAccount from '../common/UserAccount';
import { Divider } from '@mui/material';
import { useSelector } from 'react-redux';
import { userListSelector } from '../../state/UserListSlice';






const UserLists = () => {
    
    //getting users from store
    const {users} = useSelector(userListSelector)
    
    return (
        <>
        {/* mapping users  */}
        {users
        ?users.map((user)=>(
            <UserAccountWrapper key = {user.id}>
                <div></div>
                <UserAccount 
                    name = {user.name} 
                    profilepicture={user.profilepicture} 
                    id={user.id}
                /> 
                <Divider />  
            </UserAccountWrapper>
            ))
        : "loading..."}
        </>
    )
}

export default UserLists

// styles

  const UserAccountWrapper=styled.div`
    width:100%;
    display:flex;
    justify-content:space-between;
    flex-direction:column;
    height:60px;
    cursor:pointer;
    transition:all 0.2s ease-in;
    &:hover {
        background-color:rgba(0,0,0,0.01);
    }
`;