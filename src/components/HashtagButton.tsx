import { memo } from 'react';
import { IHashtagProps } from '../types/dataTypes';

const HashtagButton = (props: IHashtagProps) => {
    return (
        <div>
            <button type='button'>{props.text}</button>
        </div>
    );
};

const areEqual = (prevProps: IHashtagProps, nextProps: IHashtagProps) => {
    return prevProps === nextProps ? true : false;
};

export default memo(HashtagButton, areEqual);