import { combineReducers} from 'redux';

import posts from './posts';


//combine all individual reducers
export default combineReducers({
    posts,
})
