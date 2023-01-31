import React from 'react'
import BlogCard from '../components/BlogCard'

export default function Blog() {
  return (
    <div className=" bg-secondary min-h-screen min-w-screen">
     <div className='p-4 grid md:grid-cols-3 xl:grid-cols-4 gap-4 grid-cols-2'>
     <BlogCard/>
     <BlogCard/>
     <BlogCard/>
     <BlogCard/>
    </div>
    </div>
  )
}
