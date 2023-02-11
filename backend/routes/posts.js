const express =require('express');
const router=express.Router();
const {getPosts,createPost,deletePost,updatePost,getSinglePost}= require ('../controllers/posts')

router.get('/',getPosts)
router.post('/',createPost)
router.delete('/:id',deletePost)
router.patch('/:id',updatePost)
router.get('/:id',getSinglePost)

module.exports = router