import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ISetTweetsAction, ITweetFeedStore } from '../../types/dataTypes';

const initialState: ITweetFeedStore = {
    tweets: [],
    prevTweets: [],
    loadMoreURL: '',
    filterBy: ''
};

const tweetFeedSlice = createSlice({
    name: 'tweetfeed',
    initialState,
    reducers: {
        setTweets(state: ITweetFeedStore, action: PayloadAction<ISetTweetsAction>) {
            state.tweets = action.payload.tweets;
            state.loadMoreURL = action.payload.loadMoreURL;
            state.filterBy = '';
            state.prevTweets = [];
        },
        loadMoreTweets(state: ITweetFeedStore, action: PayloadAction<ISetTweetsAction>) {
            state.tweets.push(...action.payload.tweets);
            state.loadMoreURL = action.payload.loadMoreURL;
        },
        filterTweets(state: ITweetFeedStore, action) {
            state.prevTweets = [...state.tweets];
            state.filterBy = action.payload;
            const filteredTweets = [];
            for (const tweet of state.tweets) {
                const filteredHashtags = tweet.hashtags.filter((hashtag) => hashtag.text === action.payload);
                if (filteredHashtags.length > 0) {
                    filteredTweets.push(tweet);
                }
            }
            state.tweets = filteredTweets;
        },
        unsetFilter(state: ITweetFeedStore) {
            state.tweets = [...state.prevTweets];
            state.prevTweets = [];
            state.filterBy = '';
        }
    }
});

export const { setTweets, loadMoreTweets, filterTweets, unsetFilter } = tweetFeedSlice.actions;

export default tweetFeedSlice.reducer;