const posts = require('../models/posts')
const mongoose=require('mongoose')

// getPosts
const getPosts=async(req,res) =>{
    const post= await posts.find({}).sort({createdAt:-1})
    res.status(200).json(post)
}
// createPosts
const createPost=async (req,res)=>{
    const {pharaghrap,photo,title}=req.body
    try {
        const post=await posts.create({title,photo,pharaghrap})
        res.status(200).json(post)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}
// deletePost
const deletePost =async (req,res)=>{
    const {id}=req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error :"no such post"})
    }
    const post=await posts.findOneAndDelete({_id:id})

    if(!post){
        return res.status(404).json({error:"no such post"})
    }
    res.status(200).json(post)
}
// updatePost
  const updatePost=async(req, res) => {
    const {id}= req.params
     if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"no such post"})
     }
     const post = await posts.findOneAndUpdate({_id:id},{
      ...req.body
     })
     if(!post){
      return res.status(404).json({error:"no such post"})
  }
  res.status(200).json(post)
}
// getSinglePost
const getSinglePost=async(req, res) => {
    const {id} = req.params
     if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"no such post"})
     }


    const post= await posts.findById(id)
    if(!post){
        return res.status(404).json({error:"no such post"})
    }

    res.status(200).json(post)
  }
  module.exports={createPost,updatePost,deletePost,getPosts,getSinglePost}