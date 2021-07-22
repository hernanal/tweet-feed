import { memo } from 'react';
import { ITweetListProps, ITweetProps } from '../types/dataTypes';
import Tweet from './Tweet';

const TweetList = (props: ITweetListProps) => {
    return (
        <div data-testid="tweet-list">
            {props.tweets.map((tweet: ITweetProps, index: number) => <Tweet key={index} name={tweet.name} text={tweet.text} hashtags={tweet.hashtags} image={tweet.image}/>)}
        </div>
    );
};

const areEqual = (prevProps: ITweetListProps, nextProps: ITweetListProps) => {
    return prevProps === nextProps ? true : false;
};

export default memo(TweetList, areEqual);