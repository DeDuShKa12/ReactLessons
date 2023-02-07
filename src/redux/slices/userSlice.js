import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {userService} from "../../services";


const initialState = {
    usersList: [],
    errors: null,
    loading: null,
    selectedUser: null,
}

const getAll = createAsyncThunk(
    'userSlice/getAll',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await userService.getAll();
            return data
        } catch (e) {
            return rejectWithValue(e.response.data)
        }

    });

const userSlice = createSlice({
        name: 'userSlice',
        initialState,
        reducers: {
            // getAll: (state, action) => {
            //     state.usersList = action.payload
            // },
            setSelectedUser: (state, action) => {
                state.selectedUser = action.payload
            }
        },
        extraReducers: (value) => value
            .addCase(getAll.fulfilled, (state,action)=> {
                state.user = action.payload
            })

    }
);

const {reducer: userReducer, actions: {setSelectedUser}} = userSlice


const userAction = {
    getAll,
    setSelectedUser
}
console.log(userReducer);

export {
    userReducer, userAction
}