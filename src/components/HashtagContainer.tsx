import Title from "./Title";
import HashtagButton from "./HashtagButton";
import { IHashtagProps, IHashtagContainerProps } from '../types/dataTypes';

const HashtagContainer = (props: IHashtagContainerProps) => {
    return (
        <div data-testid="hashtag-container">
            <Title text='Filter by hashtag'/>
            {props.hashtagList.map((hashtag: IHashtagProps, index: number) => <HashtagButton key={index} text={hashtag.text}/>)}
        </div>
    );
};

export default HashtagContainer;