import Title from "./Title";
import HashtagButton from "./HashtagButton";
import { IHashtagProps, IHashtagContainerProps } from '../types/dataTypes';
import { memo } from "react";

const HashtagContainer = (props: IHashtagContainerProps) => {
    return (
        <div data-testid="hashtag-container">
            <Title text='Filter by hashtag'/>
            {props.hashtagList.map((hashtag: IHashtagProps, index: number) => <HashtagButton key={index} text={hashtag.text}/>)}
        </div>
    );
};

const areEqual = (prevProps: IHashtagContainerProps, nextProps: IHashtagContainerProps) => {
    return prevProps === nextProps ? true : false;
};

export default memo(HashtagContainer, areEqual);