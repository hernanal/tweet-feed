// Component prop types
export interface ITitleProps {
    text: string;
};

export interface ISearchBarProps {
    placeholder: string;
    value: string;
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