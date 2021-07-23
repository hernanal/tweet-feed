import { createSlice } from "@reduxjs/toolkit";
import { IHashtagContainerStore } from "../../types/dataTypes";

const initialState: IHashtagContainerStore = {
    hashtags: []
};

const hashtagContainerSlice = createSlice({
    name: 'hashtagcontainer',
    initialState,
    reducers: {
        setHashtags(state: IHashtagContainerStore, action) {
            state.hashtags = action.payload;
        },
        addNewHashtags(state: IHashtagContainerStore, action) {
            const newHashtags: never[] = action.payload;
            state.hashtags.push(...newHashtags);
        }
    }
});

export const { setHashtags, addNewHashtags } = hashtagContainerSlice.actions;

export default hashtagContainerSlice.reducer;