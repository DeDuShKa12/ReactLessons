import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {postsService} from "../../services";

let initialState = {
    posts: [],
    error: null,
    loading: null,
    selectPost: null,
    getPostById: null
};

const getAll = createAsyncThunk(
    'postsSlice/getAll',
    async (_,{rejectedWithValue})=>{
        try { const {data} = await postsService.getAll();
            return data

        }catch (e) {
            return rejectedWithValue(e.response.data)

        }

});

const getPostById = createAsyncThunk(
    'postsSlice/getById',
    async ({id}, {rejectedWithValue}) =>{
        try {
            const {data} = await postsService.getById(id);
            return  data
        }catch (e) {
            return rejectedWithValue(e.response.data)
        }

    }
);

const postSlice = createSlice({
    name: 'postsSlice',
    initialState,
    reducers: {
        selectPost: (state, action) => {
            state.selectPost = action.payload

        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getAll.fulfilled, (state, action)=>{
                state.posts = action.payload
                state.loading = false
            })
            .addCase(getAll.rejected, (state, action )=>{
                state.error = action.payload
            })
            .addCase(getAll.pending, (state, action)=>{
                state.loading = true
            })
            .addCase(getPostById.fulfilled, (state, action)=>{
                state.getPostById = action.payload
            })
    }
});

const {reducer: postReducer, actions: {selectPost}} = postSlice



const postActions = {
    selectPost,
    getAll,
    getPostById,

}

export {
    postActions, postReducer
}