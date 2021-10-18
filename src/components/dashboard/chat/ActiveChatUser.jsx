import React,{useState} from 'react'
import { SmallContainer } from '../../common/Containers'
import { colors } from '../../../theme/Colors'
import styled from 'styled-components'
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import CloseIcon from '@mui/icons-material/Close';
import {UserAccountActiveChat} from '../../common/UserAccount';
import SendIcon from '@mui/icons-material/Send';
import { Title } from '../../../theme/Typography';



const ActiveChatUser = ({setActiveuser, name, profilepicture}) => {
    const [open, setSetopen] = useState(true)
    const [chat, setChat] = useState("")
    const [chatList, setChatList] = useState([])
    
    

    const handleOpen = ()=>{
        setSetopen(!open);
    }
    const TakingChatValue = (e)=>{
        setChat(e.target.value)
        
    }
    // add new chat(temporary)
    const AddChat = (e)=>{
        let userdata = document.getElementById("userInput");
        setChatList(chatList.concat(
            <UserChat1 key={chatList.length} chat={chat} />
        ))
        userdata.value = "";

    }
    

  //style
    
    const Input = {
        width:"100%",
        height:"100%",
        paddingLeft:"10px",
        border:0,
        outline:0,
        fontFamily:"'Open Sans', sans-serif",
        fontSize:"1rem",
        "&:focus":{
            outline: `1px solid ${colors.primary}`
        }
    }
    
    return (
        <ChatContainer flexDirection="column" open={open}>
            <ChatHeader 
                flex={1.7} 
                display="flex" 
                justify="space-between" 
                align="center" 
                backgroundColor={`${colors.primary}`} 
            >
                <UserContainer 
                    flex={1} 
                    display="flex" 
                    justify="center" 
                    align="center"
                    onClick={handleOpen}
                > 
                    <UserAccountActiveChat name ={name} profilepicture={profilepicture}/>
                    {open 
                    ? <KeyboardArrowDownOutlinedIcon /> 
                    : <KeyboardArrowUpOutlinedIcon />}
                </UserContainer>
                <CloseIcon onClick = {()=>setActiveuser(false)}/>
            </ChatHeader>

            <ChatBody 
                flex={7.1} 
                display="flex" 
                justify="center" 
                align="center" 
                backgroundColor={`${colors.white}`} 
            >
                <UserChatContainer >
                    <UserChat1 chat="How are you?" />
                    <UserChat2 chat="I am Fine" />
                    <UserChat2 chat="Hey how are u doing?" />
                    <UserChat1 chat="As usual... Thanks" />
                    
                    {chatList}
                    
                </UserChatContainer>
            </ChatBody>
            <ChatFooter flex={1.2} display="flex" justify="center" align="center">
                <Left 
                    flex={8.5} 
                    display="flex" 
                    justify="center" 
                    align="center"
                >
                    <input 
                        type="text" 
                        name="userinput" 
                        onChange={TakingChatValue} 
                        style={Input} 
                        id="userInput"
                    />
                </Left>

                <Right 
                    flex={1.5} 
                    display="flex" 
                    justify="center" 
                    align="center" 
                    onClick={AddChat}
                >
                    <SendIcon />
                </Right>

            </ChatFooter>
        </ChatContainer>

    )
}

export default ActiveChatUser

//sub componenent
const UserChat1 = ({chat})=>{
    return(
        <ChatBox display="flex" justify="flex-end" align="flex-end" >
            <ChatBox1>
            <Title fontSize="0.8rem">{chat}</Title>
            </ChatBox1>
        </ChatBox>
    )
}

const UserChat2 = ({chat})=>{

    return(
        <ChatBox display="flex" justify="flex-start" align="flex-end" >
            <ChatBox2>
            <Title fontSize="0.8rem">{chat}</Title>
            </ChatBox2>
        </ChatBox>
    )
}

//style

const ChatContainer = styled(SmallContainer)`
    width:290px;
    height:300px;
    position: absolute;
    bottom:${props=>props.open? "0px":"-250px"};
    right:350px;
    border-radius:10px 10px 0 0;
    border:1px solid ${colors.primary};
    background-color:${colors.primary};
    transition: all 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55);
`;
const ChatHeader = styled(SmallContainer)`
    border-radius:10px 10px 0 0;
    padding:0 3% 0 0;
    color:${colors.white};
    font-size: 1rem;
    cursor:Pointer;
`;
const UserContainer = styled(SmallContainer)`
    width:auto;
    height:auto;
    padding-left: 15px;
`;
const ChatBody = styled(SmallContainer)``;
const ChatBox = styled(SmallContainer)`
    max-height: 40px;
    padding: 5px;
`;
const ChatBox1 = styled.div`
    background-color:${colors.grayLight};
    padding:5px 10px;
    border-radius:6px 6px 0 6px;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
`;
const ChatBox2 = styled.div`
    background-color:${colors.grayLight};
    padding:5px 10px;
    border-radius:6px 6px 6px 0;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
`;

const ChatFooter = styled(SmallContainer)`
    background-color:${colors.white};
    height: 40px;
    border-top: 2px solid ${colors.grayLight}
`;
const Left = styled(SmallContainer)``;

const Right = styled(SmallContainer)`
    color: ${colors.primary};
    &:hover{
        background-color:${colors.grayLight}
    }
`;


const UserChatContainer = styled(SmallContainer)`
    height:210px;
    width:100%;
    display:block;
    padding:1% 0% 2% 1%;
    overflow-y:scroll;
 
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

