import React from "react";
import Title from "./Title";
import HashtagButton from "./HashtagButton";
import { IHashtagContainerProps } from '../types/dataTypes';

const HashtagContainer = (props: IHashtagContainerProps) => {
    return (
        <div data-testid="hashtag-container" className='tweetfeed__hashtags'>
            <Title text='Filter by hashtag' />
            <div className="flex marginTB20 nowrap">
                {props.hashtagList.map((hashtag: string, index: number) => <HashtagButton key={index} text={hashtag} />)}
            </div>
        </div>
    );
};

const areEqual = (prevProps: IHashtagContainerProps, nextProps: IHashtagContainerProps) => {
    return prevProps === nextProps ? true : false;
};

export default React.memo(HashtagContainer, areEqual);