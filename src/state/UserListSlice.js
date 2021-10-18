import {createSlice} from '@reduxjs/toolkit';
import UserApi from '../api/UserApi';

// initial  State
export const initialState = {
    loading:false,
    hasErrors:false,
    users:[],
    selectedUserID:[],
    selectedUser:[],
    activeUser:false,
}


// creating user slices


const userListSlices = createSlice({
    name:'data',
    initialState,

    //reducers
    reducers:{
        getUserList: (state)=>{
            state.loading = true
        },
        getUserListSuccess:(state,action)=>{
            state.users = action.payload
            state.loading = false
            state.hasErrors = false
        },
        getUserListFailures: (state)=>{
            state.loading = false
            state.hasErrors = true
        },
        setSelectedUserID:(state,action)=>{
            state.selectedUserID = action.payload
            
        },
        setSelectedUser:(state,action)=>{
            state.selectedUser = action.payload
            
        },
        setActiveUser:(state,action)=>{
            state.activeUser = action.payload
            
        },
    },
})


// reducers
export default userListSlices.reducer

// selector
export const userListSelector = (state)=>(state.rootReducer.UserListReducer)


//  exporting actions 

export const {getUserList, getUserListSuccess, getUserListFailures, setSelectedUserID, setSelectedUser, setActiveUser} = userListSlices.actions
 
// Asynchronous thunk action

export const fetchUserList = ()=>{
    return async (dispatch) =>{
        dispatch(getUserList())
        try{
            const userListData = await UserApi.get().then((response)=>{
                return response.data.users
            })
            dispatch(getUserListSuccess(userListData))
        } catch(error){
            dispatch(getUserListFailures())
        }
        
    }

}
