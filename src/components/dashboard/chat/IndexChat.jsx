import React,{useState} from 'react'
import ActiveChatUser from './ActiveChatUser'
import ChatUser from './ChatUser'
import { useSelector } from 'react-redux';
import { userListSelector } from '../../../state/UserListSlice';


const IndexChat = () => {
    
    //getting user from store
    const {users} = useSelector(userListSelector)
    
    // Chat window state management
    const [activeUser, setActiveuser] = useState(false)
    const [selectActiveChat, setSelectActiveChat] = useState([])
    
    //getting filtered user data on click
    let selectedUserData = {}
    const ActiveUserData = ()=>{
        users.filter((selectedUser)=>{
            if(selectedUser.id === selectActiveChat){
                return selectedUserData=selectedUser
            }
        })
    }
    ActiveUserData()
 

    return (
        <>
            <ChatUser 
                setActiveuser={setActiveuser}
                setSelectActiveChat={setSelectActiveChat} 
                
            />
            {activeUser 
            ? <ActiveChatUser  
                setActiveuser={setActiveuser}
                name = {selectedUserData.name} 
                profilepicture = {selectedUserData.profilepicture}
                
            />: null}
        </>
    )
}

export default React.memo(IndexChat)
