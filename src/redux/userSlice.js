import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    inputA: '',
    inputB: '',
};

export const userSlice = createSlice({
    name: 'inputuser',
    initialState,
    reducers: {
        addInput: (state,action) => {
            const {inputA, inputB} = action.payload;
        }
    }

})
