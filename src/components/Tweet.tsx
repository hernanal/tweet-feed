import React from 'react';
import { ITweetProps, IHashtagProps } from '../types/dataTypes';
import HashtagButton from './HashtagButton';

const Tweet = (props: ITweetProps) => {
    return (
        <div className='tweet__container'>
            <div id='tweet-profile-img' className='tweet__img-container'>
                <img className='tweet__image' src={props.image} alt='Twitter profile' />
            </div>
            <div id='tweet-info'>
                <h4 className='tweet__info--name'>{`@${props.name}`}</h4>
                <div className='tweet__info--text'>
                    {props.text}
                    <span>
                        <a href={props.url}>{props.url}</a>
                    </span>
                </div>
                <div className="flex marginTB20 wrap">
                    {props.hashtags.map((hashtag: IHashtagProps, index: number) => <HashtagButton key={index} text={hashtag.text} />)}
                </div>
            </div>
        </div>
    );
};

export default Tweet;