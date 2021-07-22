import { memo } from 'react';
import { ITweetProps, IHashtagProps } from '../types/dataTypes';
import HashtagButton from './HashtagButton';

const Tweet = (props: ITweetProps) => {
    return (
        <div>
            <div id='tweet-profile-img'>
                <img src={props.image} alt='Twitter profile'/>
            </div>
            <div id='tweet-info'>
                <h4>{`@${props.name}`}</h4>
                <div>{props.text}</div>
                {props.hashtags.map((hashtag: IHashtagProps, index: number) => <HashtagButton key={index} text={hashtag.text}/>)}
            </div>
        </div>
    );
};

const areEqual = (prevProps: ITweetProps, nextProps: ITweetProps) => {
    return prevProps === nextProps ? true : false;
};

export default memo(Tweet, areEqual);