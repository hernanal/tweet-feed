import React from 'react';
import { ISearchBarProps } from '../types/dataTypes';

const SearchBar = (props: ISearchBarProps) => {
    return (
        <div data-testid="search-bar">
            <input type='text' value={props.value} placeholder={props.placeholder} onChange={props.onChange}/>
        </div>
    );
};

export default SearchBar;