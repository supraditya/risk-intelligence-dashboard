import { createSlice } from '@reduxjs/toolkit';

const selectedRiskSlice = createSlice({
    name: 'selectedRisk',
    initialState: null,
    reducers: {
        setSelectedRisk: (state, action) => {
            return action.payload;
        },
        clearSelectedRisk: (state) => {
            return null;
        },
    },
});

export const { setSelectedRisk, clearSelectedRisk } = selectedRiskSlice.actions;

export default selectedRiskSlice.reducer;