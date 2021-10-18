import React from 'react';
import styled from 'styled-components';
import {UserAccountChat} from '../../common/UserAccount';
import { useSelector } from 'react-redux';
import { userListSelector } from '../../../state/UserListSlice';
import { SmallContainer } from '../../common/Containers';




//  user container holding all accounts / Login

const ChatUserList = ({setActiveuser, setSelectActiveChat}) => {
    
    const {users} = useSelector(userListSelector)
    
 
    // open/close active chat
    const ActiveUserChat = (id)=>{
        setActiveuser(true)
        setSelectActiveChat(id)
        
    }
    
    

    // online/offline handler(temporary)

    const onlineStatus = ()=>{
        const randInt = Math.floor(Math.random() * 10) + 1;
        if(randInt%2===0){
            return "online";
        }else{
            return "offline";
        };
    }
    

    return (
        <>
        {users?users.map((user)=>(
        <UserWrapper 
            display="flex" 
            justify="center" 
            align="center" 
            key={user.id}
            onClick = {()=>ActiveUserChat(user.id)}
            
        >
            <Left 
                flex={9} 
                    display="flex" 
                    justify="flex-start" 
                    align="flex-start" 
                >
                    <UserAccountChat 
                        name = {user.name} 
                        profilepicture={user.profilepicture}
                    /> 
            </Left>
            
            <Right flex={1} display="flex" justify="center" align="center">
                <Circle status={onlineStatus()}></Circle>
            </Right>
        </UserWrapper>
        )): null}
        </>
    )
}

export default ChatUserList

// styles



const UserWrapper = styled(SmallContainer)`
    cursor:pointer;
    transition:all 0.2s ease-in;
    padding:5px 2px 5px 10px;
    height:60px;
    &:hover {
        background-color:rgba(0,0,0,0.01);
    }
`;

const Left = styled(SmallContainer)`
padding-left: 6px;
`;
const Right = styled(SmallContainer)`

`;

const Circle = styled.div`
    background-color:${props=>props.status==="online"?"rgb(0, 175, 0)":"rgb(199, 199, 199)"};
    width:10px;
    height:10px;
    border-radius:50%;
    box-shadow: rgba(99, 99, 99, 0.1) 0px 1px 5px 0px;
`;
