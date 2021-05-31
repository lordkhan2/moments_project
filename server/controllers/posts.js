import mongoose from 'mongoose';
import PostMessage from '../models/postMessage.js'


export const getPosts = async (req, res) => {
    try{
        const postMessages = await PostMessage.find();

        console.log(postMessages);

        res.status(200).json(postMessages);
    } catch (error){
        res.status(404).json({message: error.message });
    }
}

export const createPost = async (req, res) => {
    //to get the body
    const post =req.body;
    //creates new post
    const newPost = new PostMessage(post);
    try {
        await newPost.save();

        res.status(201);
        
    } catch (error) {
        res.status(409).json({ message: error.message});
        
    }
}

export const updatePost = async (req, res) => {
    //extract id from req.params
    //req.params is used to extract object, i.e id
    //id is renamed to _id for mongoose
    const {id: _id} =req.params;
    //post is set to request body data
    const post = req.body;
    //check if id is mongoose id
    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No post with that id');
    // call model, PostMessage, findByIdAndUpdate method is called which parameters are _id and post, 
    //and new:true to receive updated version of post
    const updatePost = await PostMessage.findByIdAndUpdate(_id, {...post, _id}, { new: true});
    //send over that updatePost with res,json
    res.json(updatePost);
}

export const deletePost = async (req, res) =>{
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No post with that id');

    await PostMessage.findByIdAndRemove(id);

    res.json({message: 'Post delete successfully'});

}

export const likePost = async (req, res) => {
    const {id} = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);
    //to find the post we are looking for// returns post
    const post = await PostMessage.findById(id);
    //returns updatedPost
    const updatedPost = await PostMessage.findByIdAndUpdate(id, { likeCount: post.likeCount + 1 }, { new: true });

    res.json(updatedPost);
}