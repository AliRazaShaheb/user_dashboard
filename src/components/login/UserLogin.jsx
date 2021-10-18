import styled from 'styled-components';
import {colors} from '../../theme/Colors';
import {borderRadius} from '../../theme/BorderRadius';
import {SmallContainer} from '../common/Containers';
import UserLists from './UserLists';
import { userListSelector } from '../../state/UserListSlice';
import { useSelector } from 'react-redux';



//  user container holding all accounts / Login

const UserLogin = () => {
  const {loading} = useSelector(userListSelector)

    return (
        <UserAccountsContainer flexDirection="column">
          <UserAccountsHeader>
              Select an account
          </UserAccountsHeader>
          <UserAccountsWrapper>
             {!loading ? <UserLists />:"Loading..."}
          </UserAccountsWrapper>
        </UserAccountsContainer>
    )
}

export default UserLogin

// styles

const UserAccountsContainer = styled(SmallContainer)`
    width: 500px;
    height: 500px;
    background-color:${colors.white};
    position: absolute;
    top:100px;
    left: 50%;
    transform: translate(-50%);
    border-radius:${borderRadius.radius};
    box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
    overflow:hidden;
    @media only screen and (max-width: 768px) {
    /* For mobile phones: */
        width: 80%;
  }`;
  const UserAccountsHeader = styled.div`
    height: 100px;
    width:100%;
    background-color:${colors.grayLight};
    border-radius:${borderRadius.radiusTop};
    display:flex;
    justify-content: center;
    align-items:center;
    font-size: 1.4rem;
    font-weight:400;
    color:${colors.grayDark}
  `;

  const UserAccountsWrapper=styled.div`
    height: 380px;
    width:100%;
    margin-top:3px;
    padding:0 20px 0 30px;
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