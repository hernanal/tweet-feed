import React, { useMemo, useState } from 'react';
import { ISearchBarProps, ITweetProps, ITweetStatus, ITwitterSearchData, ITwitterSearchResponse } from '../types/dataTypes';
import { onChangeKeyword } from '../model/reducers/searchBarReducer';
import { setTweets } from '../model/reducers/tweetFeedReducer';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import throttle from 'lodash/throttle';

const SearchBar = (props: ISearchBarProps) => {
    const dispatch = useDispatch();
    const [keyword, setKeyword] = useState('');

    const debounce = (func: any, timeout: number) => {
        let timer: NodeJS.Timeout;
        return (...args: []) => {
            clearTimeout(timer);
            timer = setTimeout(() => { func.apply(this, args); }, timeout);
        };
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value);
        setKeyword(e.target.value);
    }

    const getTweets = async (searchParam: string): Promise<ITwitterSearchData | null> => {
        try {
            const response: ITwitterSearchResponse = await axios.get('http://localhost:3001/api/search', { params: { searchParam }});
            return response.data;
        }
        catch (error) {
            console.log('Error trying to grab tweets...');
        }
        return null;
    }

    const formatTweets = (tweetStatuses: ITweetStatus[]): ITweetProps[] => {
        const tweets: ITweetProps[] = tweetStatuses.map((tweet: ITweetStatus) => {
            const formattedTweet: ITweetProps = {
                hashtags: tweet.entities.hashtags,
                image: tweet.user.profile_image_url,
                name: tweet.user.screen_name,
                text: tweet.text
            }

            return formattedTweet;
        });

        return tweets;
    };

    const searchByKeyword = throttle(async () => {
        if (keyword !== '') {
            dispatch(onChangeKeyword(keyword));

            const searchResponse: ITwitterSearchData | null = await getTweets(keyword);
            const tweets = searchResponse && searchResponse.statuses ? formatTweets(searchResponse.statuses) : [];
            dispatch(setTweets(tweets));
        }
    }, 1000);

    const debouncedSearchByKeyword = useMemo(() => debounce(searchByKeyword, 1000), [searchByKeyword]);

    return (
        <div data-testid="search-bar">
            <input type='text' value={keyword} placeholder={props.placeholder} onChange={handleChange} onKeyUp={debouncedSearchByKeyword} />
        </div>
    );
};

export default SearchBar;