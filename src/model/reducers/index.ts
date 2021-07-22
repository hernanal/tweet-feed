import { combineReducers } from 'redux';
import searchBarReducer from './searchBarReducer';
import tweetFeedReducer from './tweetFeedReducer';

const rootReducer = combineReducers({
    searchBarReducer,
    tweetFeedReducer
});

export default rootReducer;