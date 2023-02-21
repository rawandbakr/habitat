import { createSlice } from '@reduxjs/toolkit'

export const PostSlice = createSlice({
  name: 'post',
  initialState: {
    value:[],
    link:[],
  },
  reducers: {
    FETCH_ALL: (state,action) => {
      state.value=action.payload
    },
    CREATE:(state,action) => {
      state.value.push(action.payload)
    },
    DELETE: (state, action) => {
      state.value=state.value.filter((val)=>val._id!==action.payload._id);
    }
  },
})

// Action creators are generated for each case reducer function
export const { FETCH_ALL, CREATE, DELETE } = PostSlice.actions

export default PostSlice.reducer