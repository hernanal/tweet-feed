// Component prop types
export interface ITitleProps {
    text: string;
};

export interface ISearchBarProps {
    placeholder: string;
    value: string;
    onChange: any; 
}

export interface ITweetListProps {
    tweets: ITweetProps[];
}

export interface ITweetProps {
    hashtags: IHashtagProps[];
    image: string;
    name: string;
    text: string;
}

export interface IHashtagProps {
    text: string;
}

export interface IHashtagContainerProps {
    hashtagList: IHashtagProps[];
}

// Action types
interface IAction {
    type: string;
}

export interface IKeywordChange extends IAction {
    keyword: string;
}