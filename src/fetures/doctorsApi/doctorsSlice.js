import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  specialist: [],
  gender: [],
};

const doctorsSlice = createSlice({
  name: 'doctors',
  initialState,
  reducers: {
    filterSpecialist: (state, action) => {
      const indexedToRemove = state.specialist.findIndex((s) => s === action.payload);
      if (indexedToRemove !== -1) {
        state.specialist.splice(indexedToRemove, 1);
      } else {
        state.specialist.push(action.payload);
      }
    },
    filterGender: (state, action) => {
      const indexedToRemove = state.gender.findIndex((g) => g === action.payload);
      if (indexedToRemove !== -1) {
        state.gender.splice(indexedToRemove, 1);
      } else {
        state.gender.push(action.payload);
      }
    }
  }
});

export default doctorsSlice.reducer;
export const { filterSpecialist, filterGender } = doctorsSlice.actions;