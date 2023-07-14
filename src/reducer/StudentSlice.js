import { createSlice } from '@reduxjs/toolkit'

export const StudentSlice = createSlice({
  name: 'student',
  initialState: {
    value: [{
      Name:"Avaneesh",
      Age:21
    },
  ]
  },
  reducers: {
    addStudent: (state, action) => {
      state.value=[...state.value,action.payload];
    }
  }
})

// Action creators are generated for each case reducer function
export const {addStudent} = StudentSlice.actions;

export default StudentSlice.reducer;

