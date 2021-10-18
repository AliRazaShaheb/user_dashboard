import React from 'react';
import styled from 'styled-components';
import { colors } from '../../theme/Colors'
import{NavLink as Link} from 'react-router-dom';
import cdrop from '../../assets/cdrop.svg'


const MenuLinks = () => {
       

    return (
        <MenuWrapper>
            {/* all navs with router */}
            <NavLink to="/userProfile" activestyle="true" >
                Profile
            </NavLink>

            <NavLink to="/userPosts" activestyle="true" >
                Posts
            </NavLink>

            <NavLink to="/userGallery" activestyle="true" >
                Gallery
            </NavLink>

            <NavLink to="/userTodo" activestyle="true" >
                ToDo
            </NavLink>
        </MenuWrapper> 
        
    )
}

export default MenuLinks


// style

const MenuWrapper = styled.div`
    width:100%;
    padding: 5% 12%;
    

`;
const NavLink = styled(Link)`
    width:100%;
    height:60px;
    border-bottom:1px solid ${colors.gray};
    color:${colors.gray};
    margin-bottom:10px;
    font-size:1.2rem;
    display: flex;
    align-items:center;
    text-decoration:none;
    transition: all 0.3s ease;
    :after{
        content:'';
        width:90px;
        height:90px;
        background:url(${cdrop}) no-repeat center center;
        position: absolute;
        opacity: 0;  
        right: -36px;
        transition: all 0.8s;
        pointer-events:none;
    }
 
    &.active{
        color:${colors.white};
        border-bottom:1px solid ${colors.white};
        
    };
    &.active:after{
        opacity: 1;
    }
    
    
`;


