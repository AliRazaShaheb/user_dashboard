import {useEffect} from 'react';

import { BrowserRouter as Router, Switch, Route,  } from "react-router-dom";

// importing redux hook
import {useDispatch} from 'react-redux';
import { useSelector } from 'react-redux';

// importing redux slices
import { userListSelector } from './state/UserListSlice';
import {setSelectedUser} from './state/UserListSlice'
import {fetchUserList} from './state/UserListSlice'

// importing our pages
import Home from "./pages/Home";
import UserProfile from './pages/UserProfile';
import UserPost from './pages/UserPosts';
import UserGallery from './pages/UserGallery';
import UserTodo from './pages/UserTodo';


function App() {
  const {users, selectedUserID} = useSelector(userListSelector)
  const dispatch = useDispatch()


// dispatch the thunk when first app loading (using useEffect)
useEffect(()=>{
  dispatch(fetchUserList())
},[dispatch]);


//getting filtered data
const selectedUserData = users.filter((user)=>{
  if(user.id===selectedUserID){
    return dispatch(setSelectedUser(user))
  }
})

  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home } />
        <Route path="/userProfile" exact component={UserProfile} />
        <Route path="/userPosts" exact component={UserPost} />
        <Route path="/userGallery" exact component={UserGallery} />
        <Route path="/userTodo" exact component={UserTodo }/>
      </Switch>
    </Router>
  );
}

export default App;
