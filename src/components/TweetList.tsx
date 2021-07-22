import React from 'react';
import { ITweetListProps, ITweetProps } from '../types/dataTypes';
import Tweet from './Tweet';
import ButtonLink from './ButtonLink';

const TweetList = (props: ITweetListProps) => {
    return (
        <div data-testid="tweet-list">
            {props.tweets.map((tweet: ITweetProps, index: number) => <Tweet onClickHashtag={props.onClickTweetHashtag} key={index} name={tweet.name} text={tweet.text} hashtags={tweet.hashtags} image={tweet.image}/>)}
            <div>
                <ButtonLink onClick={props.onClickLoadMore} text={'Load more'}/>
            </div>
        </div>
    );
};

const areEqual = (prevProps: ITweetListProps, nextProps: ITweetListProps) => {
    return prevProps === nextProps ? true : false;
};

export default React.memo(TweetList, areEqual);