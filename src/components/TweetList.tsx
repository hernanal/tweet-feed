import { ITweetListProps, ITweetProps } from '../types/dataTypes';
import Tweet from './Tweet';

const TweetList = (props: ITweetListProps) => {
    return (
        <div data-testid="tweet-list">
            {props.tweets.map((tweet: ITweetProps, index: number) => <Tweet key={index} name={tweet.name} text={tweet.text} hashtags={tweet.hashtags} image={tweet.image}/>)}
        </div>
    );
};

export default TweetList;