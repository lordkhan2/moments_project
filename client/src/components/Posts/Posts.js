import React from 'react';
//to make post frontend
import { Grid, CircularProgress } from '@material-ui/core';
import Post from './Post/Post';
import { useSelector } from 'react-redux';
import useStyles from './styles';

//accept currentID as props
const Posts = ({ setCurrentId }) => {
    //we get posts from reducer exported posts
    const posts = useSelector((state) => state.posts);
    const classes =useStyles();

    return ( 
        /* circularProgress is a loading spinner */
        /* if no post.length return circularProgress otherwise return this */
        !posts.length ? <CircularProgress /> : (
            <Grid className={classes.container} container alignItems="stretch" spacing={3} >
                {posts.map((post) => (
                    <Grid key={post._id} item xs={12} sm={6}>
                        <Post post={post} setCurrentId= {setCurrentId}/>
                    </Grid>
                ))}
            </Grid>
        )
     );
}
/* curley braces indicates js logic */
 
export default Posts;