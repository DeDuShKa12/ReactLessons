import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {userService} from "../../services";


const initialState = {
    users: [],
    errors: null,
    loading: null,
    selectedUser: null,
    getById: null
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
    }
);

const getById = createAsyncThunk(
    'userSlice/getById',
    async ({id}, {rejectedWithValue})=>{
        try {
            const {data} = await userService.getById(id);
            return data
        }catch (e){
            rejectedWithValue(e.response.data)
        }
    }
);

const userSlice = createSlice({
        name: 'userSlice',
        initialState,
        reducers: {
            setSelectedUser: (state, action) => {
                state.selectedUser = action.payload
            }
        } ,
        extraReducers: (value) =>
        value
            .addCase(getAll.fulfilled, (state, action) => {
                state.users = action.payload
                state.loading = false
            })
            .addCase(getAll.rejected, (state, action)=>{
                state.errors = action.payload
            })
            .addCase(getAll.pending, (state, action)=>{
                state.loading = true
            })
            .addCase(getById.fulfilled, (state, action)=>{
                state.getById =action.payload
            })


    }
);

const {reducer: userReducer, actions: {setSelectedUser}} = userSlice


const userAction = {
    setSelectedUser,
    getAll,
    getById
}

export {
    userReducer, userAction
}