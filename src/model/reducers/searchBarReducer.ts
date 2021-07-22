import { createSlice } from '@reduxjs/toolkit';
import { ISearchBarStore } from '../../types/dataTypes';

const initialState: ISearchBarStore = {
    keyword: ''
};

const searchBarSlice = createSlice({
    name: 'searchbar',
    initialState,
    reducers: {
        onChangeKeyword(state: ISearchBarStore, action) {
            state.keyword = action.payload;
        }
    }
});

export const { onChangeKeyword } = searchBarSlice.actions;

export default searchBarSlice.reducer;