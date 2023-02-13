import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {carServices} from "../../services";

const initialState = {
    cars: [],
    next: null,
    prev: null,
    error: null,
    loading: null,
    carForUpdate: null,

};

const getAll = createAsyncThunk(
    'carSlice/getAll',
    async ({page}, thunkAPI) => {
        try {
            const {data} = await carServices.getAll(page);
            return data
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
);

const createCar = createAsyncThunk(
    'carSlice/createCar',
    async (value, thunkAPI) => {
        try {
            await carServices.create(value);
            thunkAPI.dispatch(getAll({page: 1}))

        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)

        }
    }
);

const updateCar = createAsyncThunk(
    'carSlice/updateCar',
    async ({id}, thunkAPI) => {
        try {
            await carServices.updateById(id)
            thunkAPI.dispatch(getAll({page: 1}))

        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }

    }
);

const deleteById = createAsyncThunk(
    'carSlice/deleteById',
    async ({id},thunkAPI )=>{
        try {
            await carServices.deleteById(id)
            thunkAPI.dispatch(getAll({page:1}))

        }catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
);



const carSlice = createSlice({
    name: 'carSlice',
    initialState,
    reducers: {
        setCarForUpdate: (state, action) => {
            state.carForUpdate = action.payload
        }
    },
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                const {prev, next, items} = action.payload;
                state.cars = items
                state.prev = prev
                state.next = next
                state.loading = false
            })
            .addCase(getAll.rejected, (state, action) => {
                state.error = action.payload
            })
            .addCase(getAll.pending, (state, action) => {
                state.loading = true
            })
            .addCase(createCar.fulfilled, (state, action) => {
                state.cars = action.payload

            })
            .addCase(updateCar.fulfilled, (state, action) => {
                state.cars = action.payload
            })
            .addCase(deleteById.fulfilled, (state, action)=>{
                state.cars = action.payload
            })
});

const {reducer: carReducer, actions: {setCarForUpdate}} = carSlice

const carActions = {
    getAll,
    createCar,
    setCarForUpdate,
    updateCar,
    deleteById
}

export {
    carReducer, carActions
}

