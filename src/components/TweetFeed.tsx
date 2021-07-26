import React, { useMemo } from 'react';
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
    const { loadMoreURL } = useSelector((state: IRootStore) => state.tweetFeedReducer);
    const { hashtags } = useSelector((state: IRootStore) => state.hashtagContainerReducer);

    const loadMore = throttle(async () => {
        const loadMoreResponse: ITwitterSearchData | null = await loadMoreTweets(loadMoreURL);
        const formatted: IFormattedSearchStatuses = loadMoreResponse && loadMoreResponse.statuses ? formatTweets(loadMoreResponse.statuses) : { hashtags: [], tweets: [] };
        const loadMoreString: string = loadMoreResponse && loadMoreResponse.search_metadata ? loadMoreResponse.search_metadata.next_results : '';
        dispatch(loadMoreAC({ loadMoreURL: loadMoreString, tweets: formatted.tweets }));
        dispatch(setHashtags(removeDuplicateHashtags(formatted.hashtags, hashtags)));
    }, 3000);

    const debouncedLoadMore = useMemo(() => debounce(loadMore, 300), [loadMore]);

    return (
        <div data-testid="tweet-list" className='tweetfeed__tweets-container'>
            {props.tweets.map((tweet: ITweetProps, index: number) => <Tweet key={index} name={tweet.name} text={tweet.text} hashtags={tweet.hashtags} image={tweet.image} url={tweet.url} />)}
            <div>
                <ButtonLink onClick={debouncedLoadMore} text={'Load more'} />
            </div>
        </div>
    );
};

const areEqual = (prevProps: ITweetFeedProps, nextProps: ITweetFeedProps) => {
    return prevProps === nextProps ? true : false;
};

export default React.memo(TweetFeed, areEqual);