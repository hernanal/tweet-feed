import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterTweets, unsetFilter } from '../model/reducers/tweetFeedReducer';
import { IHashtagProps, IRootStore } from '../types/dataTypes';

const HashtagButton = (props: IHashtagProps) => {
    const dispatch = useDispatch();
    const { filterBy } = useSelector((state: IRootStore) => state.tweetFeedReducer);
    
    const handleClick = () => {
        filterBy !== props.text ? dispatch(filterTweets(props.text)) : dispatch(unsetFilter());
    };
    return (
        <div>
            <button disabled={filterBy !== props.text && filterBy !== '' ? true : false} type='button' className={`button__hashtag${filterBy !== props.text && filterBy !== '' ? '--disabled' : ''}`} onClick={handleClick}>{`#${props.text}`}</button>
        </div>
    );
};

const areEqual = (prevProps: IHashtagProps, nextProps: IHashtagProps) => {
    return prevProps === nextProps ? true : false;
};

export default React.memo(HashtagButton, areEqual);