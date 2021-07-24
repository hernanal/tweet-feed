import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ISetTweetsAction, ITweetFeedStore } from '../../types/dataTypes';

const initialState: ITweetFeedStore = {
    tweets: [],
    prevTweets: [],
    loadMoreURL: ''
};

const tweetFeedSlice = createSlice({
    name: 'tweetfeed',
    initialState,
    reducers: {
        setTweets(state: ITweetFeedStore, action: PayloadAction<ISetTweetsAction>) {
            state.tweets = action.payload.tweets;
            state.loadMoreURL = action.payload.loadMoreURL;
        },
        loadMoreTweets(state: ITweetFeedStore, action: PayloadAction<ISetTweetsAction>) {
            state.tweets.push(...action.payload.tweets);
            state.loadMoreURL = action.payload.loadMoreURL;
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
        unsetFilter(state: ITweetFeedStore) {
            state.tweets = [...state.prevTweets];
            state.prevTweets = [];
        }
    }
});

export const { setTweets, loadMoreTweets, filterTweets, unsetFilter } = tweetFeedSlice.actions;

export default tweetFeedSlice.reducer;