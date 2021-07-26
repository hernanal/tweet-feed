import React, { useMemo, useState } from 'react';
import { IFormattedSearchStatuses, ISearchBarProps, ITwitterSearchData } from '../types/dataTypes';
import { onChangeKeyword } from '../model/reducers/searchBarReducer';
import { setTweets } from '../model/reducers/tweetFeedReducer';
import { useDispatch } from 'react-redux';
import throttle from 'lodash/throttle';
import { setHashtags } from '../model/reducers/hashtagContainerReducer';
import { debounce, formatTweets } from '../model/actions/helpers/appHelper';
import { getTweets } from '../model/actions/searchBarActions';

const SearchBar = (props: ISearchBarProps) => {
    const dispatch = useDispatch();
    const [keyword, setKeyword] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setKeyword(e.target.value);
    }

    const searchByKeyword = throttle(async () => {
        if (keyword !== '') {
            dispatch(onChangeKeyword(keyword));

            const searchResponse: ITwitterSearchData | null = await getTweets(keyword);
            const formatted: IFormattedSearchStatuses = searchResponse && searchResponse.statuses ? formatTweets(searchResponse.statuses) : { hashtags: [], tweets: [] };
            const loadMoreURL: string = searchResponse && searchResponse.search_metadata ? searchResponse.search_metadata.next_results : '';
            dispatch(setTweets({ loadMoreURL, tweets: formatted.tweets}));
            dispatch(setHashtags(formatted.hashtags));
        }
    }, 300);

    const debouncedSearchByKeyword = useMemo(() => debounce(searchByKeyword, 300), [searchByKeyword]);

    return (
        <div data-testid="search-bar" className={props.className}>
            <i className="fa fa-search tweetfeed__search-icon"></i>
            <input className='tweetfeed__search-input' type='text' value={keyword} placeholder={props.placeholder} onChange={handleChange} onKeyUp={debouncedSearchByKeyword} />
        </div>
    );
};

export default SearchBar;