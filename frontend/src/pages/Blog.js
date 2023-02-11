import React, { useEffect } from 'react'
import BlogCard from '../components/BlogCard'
import {getposts} from '../actions/posts'
import { useSelector,useDispatch } from 'react-redux';


export default function Blog() { 
  const dispatch = useDispatch();
  const posts= useSelector((state) => state.posts.value)

  useEffect(() => {
    dispatch(getposts());
    console.log('useeffect run')
  },[dispatch]);  

  return (
    <div className=" bg-secondary min-h-screen min-w-screen">
     <div className=' m-4  grid md:grid-cols-3 xl:grid-cols-4 sm:grid-cols-2 sm:gap-4 '>
     {posts &&
          posts.map((post) => (
            <BlogCard post={post} key={post._id} />
          ))}
    </div>
    </div>
  )
}
