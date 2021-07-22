import { IHashtagProps } from '../types/dataTypes';

const HashtagButton = (props: IHashtagProps) => {
    return (
        <div>
            <button type='button'>{props.text}</button>
        </div>
    );
};

export default HashtagButton;