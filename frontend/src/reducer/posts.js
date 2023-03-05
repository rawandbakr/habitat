import { createSlice } from '@reduxjs/toolkit'

export const PostSlice = createSlice({
  name: 'post',
  initialState: {
    value:[],
    link:[],
    singlepost:[]
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
    },
    FETCH_SINGLE:(state,action)=>{
      state.singlepost=action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { FETCH_ALL, CREATE, DELETE,FETCH_SINGLE } = PostSlice.actions

export default PostSlice.reducer