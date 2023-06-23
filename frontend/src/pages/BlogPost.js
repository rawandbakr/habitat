import {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux';
import {getpost} from '../actions/posts'
import moment from 'moment'


export default function BlogPost() {
  const {id}=useParams()
  var post=('')
  const [loading , setLoading]=useState(true)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getpost(id));
    setLoading(false)
  },[dispatch]);  

  post= useSelector((state) => state.posts.singlepost)

  return (<div>
    {loading?<h1>loading</h1>:
    <div className='bg-primary min-h-screen min-w-screen m-2 flex flex-col rounded-lg '>
      <div className=' flex flex-row justify-between'>
      <h1 className='m-3'>{post.title}</h1>
      <span className='m-3 opacity-40'> {moment(post.createdAt).fromNow()}</span>
      </div>
     <img src={post.photo} alt='postpicture' className='rounded max-h-60 md:max-h-96 object-cover m-2 '/>
     <p className='m-2 block'>
     .
     </p>
     <span className='m-2 opacity-50'>user name</span>
     {/* comments section */}
     <span> comments</span>
    </div>
  }
  </div>
  )
}
