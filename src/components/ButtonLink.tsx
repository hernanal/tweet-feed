import React from "react";
import { ILinkProps } from '../types/dataTypes';

const ButtonLink = (props: ILinkProps) => {
    return (
        <div>
            <button type='button' onClick={props.onClick}>{props.text}</button>
        </div>
    );
};

export default ButtonLink;