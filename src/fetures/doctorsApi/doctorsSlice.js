import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  specialistOfDoctor: [
    'urology',
    'neorology',
    'Orthopedic',
    'Cardiologist',
    'Dentist',
  ],
  gender: [],
};

const doctorsSlice = createSlice({
  name: 'doctors',
  initialState,
  reducers: {
    filterSpecialist: (state, action) => {
      const indexedToRemove = state.specialistOfDoctor.findIndex((s) => s === action.payload);
      if (indexedToRemove !== -1) {
        state.specialistOfDoctor.splice(indexedToRemove, 1);
      } else {
        state.specialistOfDoctor.push(action.payload);
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