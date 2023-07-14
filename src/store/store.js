import { configureStore } from '@reduxjs/toolkit'
import StudentSlice from '../reducer/StudentSlice'


export default configureStore({
  reducer: {
    student:StudentSlice,
  }
})