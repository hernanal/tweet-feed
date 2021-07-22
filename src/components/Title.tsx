import { ITitleProps } from '../types/dataTypes';

const Title = (props: ITitleProps) => {
    return (
        <h4>{props.text}</h4>
    );
};

export default Title;