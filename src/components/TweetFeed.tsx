import React, { useMemo, useState, useEffect } from 'react';
import { IFormattedSearchStatuses, IRootStore, ITweetFeedProps, ITweetProps, ITwitterSearchData } from '../types/dataTypes';
import Tweet from './Tweet';
import ButtonLink from './ButtonLink';
import { useDispatch, useSelector } from 'react-redux';
import { loadMoreTweets } from '../model/actions/tweetFeedActions';
import { debounce, throttle } from 'lodash';
import { loadMoreTweets as loadMoreAC } from '../model/reducers/tweetFeedReducer';
import { formatTweets, removeDuplicateHashtags } from '../model/actions/helpers/appHelper';
import { setHashtags } from '../model/reducers/hashtagContainerReducer';

const TweetFeed = (props: ITweetFeedProps) => {
    const dispatch = useDispatch();
    const [hideLoadMore, setHideLoadMore] = useState(false);
    const { loadMoreURL, filterBy } = useSelector((state: IRootStore) => state.tweetFeedReducer);
    const { hashtags } = useSelector((state: IRootStore) => state.hashtagContainerReducer);
    const loadMore = throttle(async () => {
        const loadMoreResponse: ITwitterSearchData | null = await loadMoreTweets(loadMoreURL);
        const formatted: IFormattedSearchStatuses = loadMoreResponse && loadMoreResponse.statuses ? formatTweets(loadMoreResponse.statuses) : { hashtags: [], tweets: [] };
        const loadMoreString: string = loadMoreResponse && loadMoreResponse.search_metadata ? loadMoreResponse.search_metadata.next_results : '';
        loadMoreResponse?.statuses.length === 0 || !loadMoreResponse?.statuses ? setHideLoadMore(true) : setHideLoadMore(false);
        dispatch(loadMoreAC({ loadMoreURL: loadMoreString, tweets: formatted.tweets }));
        dispatch(setHashtags(removeDuplicateHashtags(formatted.hashtags, hashtags)));
    }, 3000);

    const debouncedLoadMore = useMemo(() => debounce(loadMore, 300), [loadMore]);

    // Show load more on each new search
    useEffect(() => setHideLoadMore(false), [props.tweets]);

    return (
        <div data-testid="tweet-list" className='tweetfeed__tweets-container'>
            {props.tweets.map((tweet: ITweetProps, index: number) => <Tweet key={index} name={tweet.name} text={tweet.text} hashtags={tweet.hashtags} image={tweet.image} url={tweet.url} />)}
            <div style={hideLoadMore || filterBy !== '' || props.tweets.length === 0 || props.tweets.length < 5 ? { display: 'none'} : {}}>
                <ButtonLink className='button__load-more' onClick={debouncedLoadMore} text={'Load more'} />
            </div>
        </div>
    );
};

export default TweetFeed;