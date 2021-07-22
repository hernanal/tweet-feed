import { createSlice } from '@reduxjs/toolkit';
import { ITweetFeedStore } from '../../types/dataTypes';

const initialState: ITweetFeedStore = {
    tweets: []
};

const tweetFeedSlice = createSlice({
    name: 'tweetfeed',
    initialState,
    reducers: {
        getTweets(state: ITweetFeedStore, action) {
            state.tweets = action.payload;
        },
        loadMoreTweets(state: ITweetFeedStore, action) {
            const loadMore: never[] = action.payload
            state.tweets.push(...loadMore);
        }
    }
});

const { getTweets, loadMoreTweets } = tweetFeedSlice.actions;

export default tweetFeedSlice.reducer;