// Component prop types
interface IClickable {
    onClick?: any;
    text: string;
}

export interface ITitleProps {
    className?: string;
    text: string;
};

export interface ISearchBarProps {
    placeholder: string;
}

export interface ITweetFeedProps {
    tweets: ITweetProps[];
}

export interface ITweetProps {
    hashtags: IHashtagProps[];
    image: string;
    name: string;
    text: string;
    url: string;
}

export interface IHashtagProps extends IClickable {}

export interface IHashtagContainerProps {
    hashtagList: string[];
}

export interface ILinkProps extends IClickable {}


// Store types
export interface ISearchBarStore {
    keyword: string;
}

export interface ITweetFeedStore {
    tweets: ITweetProps[];
    prevTweets: ITweetProps[];
    loadMoreURL: string;
    filterBy: string;
}

export interface IHashtagContainerStore {
    hashtags: string[];
}

export interface IRootStore {
    hashtagContainerReducer: IHashtagContainerStore;
    searchBarSlice: ISearchBarStore;
    tweetFeedReducer: ITweetFeedStore;
}


// Action type
export interface ISetTweetsAction {
    loadMoreURL: string;
    tweets: ITweetProps[];
}


// Service response types
export interface ITwitterSearchResponse {
    data: ITwitterSearchData;
}

export interface ITwitterSearchData {
    statuses: ITweetStatus[];
    search_metadata: ITwitterSearchMetaData;
}

export interface ITwitterSearchMetaData {
    max_id: string;
    next_results: string;
    query: string;
    count: number;
}

export interface ITweetStatus {
    id: number;
    text: string;
    entities: ITweetEntities;
    user: ITweetUser;
}

interface ITweetEntities {
    hashtags: ITweetHashtag[];
    media?: ITweetMedia[];
    urls: ITweetURL[];
}

interface ITweetHashtag {
    text: string;
}

interface ITweetMedia {
    id: number;
    url: string;
}

interface ITweetURL {
    url: string;
}

interface ITweetUser {
    id: number;
    screen_name: string;
    profile_image_url: string;
}


// Formatted objects
export interface IFormattedSearchStatuses {
    hashtags: string[];
    tweets: ITweetProps[];
}