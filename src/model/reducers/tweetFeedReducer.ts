import { createSlice } from '@reduxjs/toolkit';
import { ITweetFeedStore } from '../../types/dataTypes';

const initialState: ITweetFeedStore = {
    tweets: [],
    prevTweets: []
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
        },
        filterTweets(state: ITweetFeedStore, action) {
            state.prevTweets = [...state.tweets];

            const filtered = [];
            for (const tweet of state.tweets) {
                if (tweet.hashtags.indexOf(action.payload) > -1) {
                    filtered.push(tweet);
                }
            }
            state.tweets = filtered;
        },
        unsetFilter(state: ITweetFeedStore, action) {
            state.tweets = [...state.prevTweets];
            state.prevTweets = [];
        }
    }
});

const { getTweets, loadMoreTweets, filterTweets, unsetFilter } = tweetFeedSlice.actions;

export default tweetFeedSlice.reducer;