import React, {useState, useEffect} from 'react';

import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import {getPosts} from './actions/posts';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import memories from './images/memories.png';
import useStyles from './styles';


const App = () => {
    //useState to get the current id
    const [currentId, setCurrentId] = useState(null);
    //use styles
    const classes =useStyles();
    //define dispatch 
    const dispatch = useDispatch();

    // to dispatch the action we use use effect
    //as soon as we change the id to null, the app dispatches 
    useEffect(() => {
        dispatch(getPosts());
    },[currentId, dispatch]);

    return ( 
        <div>
            {/* centers everything */}
        
            <Container maxWidth="lg">
                {/* a bar to display info on current screen */}
                
                <AppBar className={classes.appBar} position="static" color="inherit">
                    {/* stands for any textural element like h2, h3 */}
                    
                    <Typography className={classes.heading} variant="h2" align="center">MOMENTS</Typography>
                    <img className={classes.image} src={memories} alt="memories" height="60"/>
                </AppBar>
                {/* provides simple animation has a property of in */}
                <Grow in>
                    {/* centers everything */}
                    
                    <Container>
                        {/* sets as containers of grids */}
                        <Grid className={classes.mainContainer} container justify="space-between" alignItems="stretch" >
                            {/* creates visual consistency between layouts */}
                            
                            <Grid item xs={12} sm={7}>
                                <Posts setCurrentId={setCurrentId}/>
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <Form  currentId={currentId} setCurrentId={setCurrentId}/> 
                            </Grid>
                        </Grid>
                    </Container>
                </Grow>
            </Container>
        </div>
     );
}
 
export default App;

//<Posts setCurrentId={setCurrentId} used to send set methods of currentId to Posts
//<Form currentId={currentId} setCurrentId={setCurrentId}/> used to send the current id and set method to Form