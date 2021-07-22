// Component prop types
export interface ITitleProps {
    text: string;
};

export interface ISearchBarProps {
    placeholder: string;
    value: string;
    onChange: () => any; 
}

export interface ITweetListProps {
    tweets: ITweetProps[];
    onClickTweetHashtag: () => any;
}

export interface ITweetProps {
    hashtags: IHashtagProps[];
    image: string;
    name: string;
    text: string;
    onClickHashtag: () => any;
}

export interface IHashtagProps {
    onClick: () => any;
    text: string;
}

export interface IHashtagContainerProps {
    hashtagList: IHashtagProps[];
    onClickHashtag: () => any;
}

// Action types
interface IAction {
    type: string;
}

export interface IKeywordChange extends IAction {
    keyword: string;
}