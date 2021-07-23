// Component prop types
interface IClickable {
    onClick?: () => any;
    text: string;
}

export interface ITitleProps {
    text: string;
};

export interface ISearchBarProps {
    placeholder: string;
    value: string;
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
    onClickHashtag?: () => any;
}

export interface IHashtagProps extends IClickable {}

export interface IHashtagContainerProps {
    hashtagList: IHashtagProps[];
    onClickHashtag: () => any;
}

export interface ILinkProps extends IClickable {}


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

export interface IRootStore {
    hashtagContainerReducer: IHashtagContainerStore;
    searchBarSlice: ISearchBarStore;
    tweetFeedReducer: ITweetFeedStore;
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
}

interface ITweetHashtag {
    text: string;
}

interface ITweetUser {
    id: number;
    screen_name: string;
    profile_image_url: string;
}


// Formatted objects
export interface IFormattedSearchStatuses {
    hashtags: IHashtagProps[];
    tweets: ITweetProps[];
}