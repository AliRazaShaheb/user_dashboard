import React,{useState} from 'react'
import { SmallContainer } from '../../common/Containers'
import { colors } from '../../../theme/Colors'
import styled from 'styled-components'
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import { Title } from '../../../theme/Typography';
import ChatUserList from './ChatUserList'



const ChatUser = ({setActiveuser, setSelectActiveChat}) => {
    
      
    
    
    const [open, setSetopen] = useState(false)

    const handleOpen = ()=>{
        setSetopen(!open);

    }
    
    return (
        <ChatContainer 
            flexDirection="column" 
            open={open}
        >
            <ChatHeader 
                flex={1.3} 
                display="flex" 
                justify="space-between" 
                align="center" 
                backgroundColor={`${colors.primary}`} 
                onClick={handleOpen} 
            >
                <IconContainer 
                    display="flex" 
                    justify="center" 
                    align="center"
                > 
                    <ModeCommentOutlinedIcon />
                    <Title style={{marginLeft:"8px"}}>Chat</Title>
                </IconContainer>
                {open 
                ? <KeyboardArrowDownOutlinedIcon /> 
                : <KeyboardArrowUpOutlinedIcon />}
            </ChatHeader>


            <ChatBody 
                flex={7.5} 
                display="flex" 
                justify="center" 
                align="center" 
                backgroundColor={`${colors.white}`} 
            >

                <UserListContainer flexDirection="column">
                    <ChatUserList setActiveuser={setActiveuser} setSelectActiveChat={setSelectActiveChat}/>
                </UserListContainer>
            </ChatBody>

            <ChatFooter flex={1.2}/>
        </ChatContainer>

    )
}

export default ChatUser






const ChatContainer = styled(SmallContainer)`
    width:290px;
    height:450px;
    position: absolute;
    bottom:${props=>props.open? "-48px":"-395px"};
    right:50px;
    border-radius:10px 10px 0 0;
    border:1px solid ${colors.primary};
    background-color:${colors.primary};
    transform-origin: bottom center;
    transition: all 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55);
    @media only screen and (max-width: 768px) {
        /* For mobile phones: */
        width:200px;
        right:5px;
    }
`;
const ChatHeader = styled(SmallContainer)`
    border-radius:10px 10px 0 0;
    padding:0 7%;
    color:${colors.white};
    font-size: 1.2rem;
    cursor:Pointer;
`;
const IconContainer = styled(SmallContainer)`
    width:auto;
    height:auto;
`;
const ChatBody = styled(SmallContainer)``;
const ChatFooter = styled(SmallContainer)`
    background-color:${colors.white};

`;
const UserListContainer = styled(SmallContainer)`
    height:340px;
    width:100%;
    font-size: 0.9rem;
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

