import React from "react";
import { ILinkProps } from '../types/dataTypes';

const ButtonLink = (props: ILinkProps) => {
    return (
        <div className='button__load-more-container'>
            <button className={props.className} type='button' onClick={props.onClick}>{props.text}</button>
        </div>
    );
};

export default ButtonLink;