import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  specialist: '',
  gender: ''
};

const doctorsSlice = createSlice({
  name: 'doctors',
  initialState,
  reducers: {
    filterSpecialist: (state, action) => {
      state.specialist = action.payload;
    },
    filterGender: (state, action) => {
      state.gender = action.payload;
    }
  }
});

export default doctorsSlice.reducer;