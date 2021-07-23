import { AnyAction, CombinedState, combineReducers, Reducer } from 'redux';
import hashtagContainerReducer from './hashtagContainerReducer';
import searchBarSlice from './searchBarReducer';
import tweetFeedSlice from './tweetFeedReducer';
import { IRootStore } from '../../types/dataTypes';

const rootReducer: Reducer<CombinedState<IRootStore>, AnyAction> = combineReducers({
    hashtagContainerReducer,
    searchBarSlice,
    tweetFeedReducer: tweetFeedSlice
});

export default rootReducer;