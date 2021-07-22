// Component prop types
interface IClickable {
    onClick: () => any;
    text: string;
}

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
    onClickLoadMore: () => any;
}

export interface ITweetProps {
    hashtags: IHashtagProps[];
    image: string;
    name: string;
    text: string;
    onClickHashtag: () => any;
}

export interface IHashtagProps extends IClickable {}

export interface IHashtagContainerProps {
    hashtagList: IHashtagProps[];
    onClickHashtag: () => any;
}

export interface ILinkProps extends IClickable {}

// Action types
export interface IAction {
    type: string;
}

export interface IKeywordChange extends IAction {
    keyword: string;
}

// Store types
export interface ISearchBarStore {
    keyword: string;
}

export interface ITweetFeedStore {
    tweets: ITweetProps[];
    prevTweets: ITweetProps[];
}

export interface IHashtagContainerStore {
    hashtags: IHashtagProps[];
}