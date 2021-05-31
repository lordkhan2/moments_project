import express from 'express';

//not default export so {}
import { getPosts, createPost, updatePost, deletePost, likePost } from '../controllers/posts.js'

//routes folder does not contain logic

const router = express.Router();

//not reached by going to localhost:5000/ but localhost:5000/posts since we added prefix of posts to all routes

router.get('/', getPosts);
router.post('/', createPost);
//patch used to update post
router.patch('/:id', updatePost);

router.delete('/:id', deletePost);
//liking something is updating
router.patch('/:id/likePost', likePost);


export default router;