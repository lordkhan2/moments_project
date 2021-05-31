import React, {useState, useEffect } from 'react';

import { TextField, Button, Typography, Paper } from '@material-ui/core';
import useStyles from './styles';
import FileBase from 'react-file-base64';
//to call dispatch and useSelector to view
import { useDispatch, useSelector } from 'react-redux';

//import createPost
import {createPost, updatePost} from '../../actions/posts';



//set currentId and setCurrentID as props
const Form = ({ currentId, setCurrentId }) => {
    const classes =useStyles();
    const [postData, setPostData] = useState({creator: '', title: '', message: '', tags: '', selectedFile: ''});
    //if we have currentid then find post that has same id as our current if, if not return null
    const post = useSelector((state) => (currentId ? state.posts.find((message) => message._id === currentId) : null));
    // use dispatch function
    const dispatch = useDispatch();

    //useEffect to populated values in the form
    //
    useEffect(() => {
        //if  post exsists we set post data
        if (post) setPostData(post);
    }, [post]);
    //[] dependency array// which is used to say when a callback function should be ran// for this case we say when post changes callback function is ran


    const handleSubmit = (e) =>{
        //dispatch on handle submit

        //to prevent page refresh after handle submit
        e.preventDefault();

        if (currentId === null) {
            dispatch(createPost(postData));
            
          } else {
              //update the post using patch
            dispatch(updatePost(currentId, postData));
            
          }
        clear();
        setTimeout(() =>{
            window.location.reload(); // you can pass true to reload function to ignore the client cache and reload from the server
        },1000);
    };
    const clear = () =>{
        setCurrentId(null);
        setPostData({ creator: '', title: '', message: '', tags: '', selectedFile: '' });       
    };

    return ( 
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant= "h6">{currentId ? 'Editing' : 'Creating' } a Memory</Typography>
                <TextField 
                    name="creator" 
                    variant="outlined" 
                    label="Creator" 
                    fullWidth
                    value={postData.creator}
                    onChange={(e) => setPostData({...postData, creator: e.target.value})}
                />
                <TextField 
                    name="title" 
                    variant="outlined" 
                    label="title" 
                    fullWidth
                    value={postData.title}
                    onChange={(e) => setPostData({...postData, title: e.target.value})}
                />
                <TextField 
                    name="message" 
                    variant="outlined" 
                    label="message" 
                    fullWidth
                    value={postData.message}
                    onChange={(e) => setPostData({...postData, message: e.target.value})}
                />
                <TextField 
                    name="tags" 
                    variant="outlined" 
                    label="tags" 
                    fullWidth
                    value={postData.tags}
                    onChange={(e) => setPostData({...postData, tags: e.target.value.split(',')})}
                />
                 <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} /></div>
                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>clear</Button>
            </form>
        </Paper>
     );
}
 
export default Form;