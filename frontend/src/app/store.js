import { configureStore } from '@reduxjs/toolkit'
import PostReducer from '../reducer/posts'

export default configureStore({
  reducer: {
    posts:PostReducer,
  },
})