import { IFormattedSearchStatuses, IHashtagProps, ITweetProps, ITweetStatus } from "../../../types/dataTypes";

export const debounce = (func: any, timeout: number) => {
    let timer: NodeJS.Timeout;
    return (...args: []) => {
        clearTimeout(timer);
        timer = setTimeout(() => { func.apply(this, args); }, timeout);
    };
}

// PERFORMANCE CHECK
export const formatTweets = (tweetStatuses: ITweetStatus[]): IFormattedSearchStatuses => {
    let hashtags: string[] = [];
    const tweets: ITweetProps[] = tweetStatuses.map((tweet: ITweetStatus) => {
        const formattedTweet: ITweetProps = {
            hashtags: tweet.entities.hashtags,
            image: tweet.user.profile_image_url,
            name: tweet.user.screen_name,
            text: tweet.text
        }
        formattedTweet.hashtags.forEach((hashtag: IHashtagProps) => hashtags.push(hashtag.text));

        return formattedTweet;
    });

    hashtags = [...new Set(hashtags)];
    return { hashtags, tweets };
};

export const removeDuplicateHashtags = (newTags: string[], existingTags: string[]): string[] => {
    const tags: string[] = existingTags.concat(...newTags);
    return [...new Set(tags)];
};