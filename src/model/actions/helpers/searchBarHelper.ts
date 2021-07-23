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
    const hashtagStrings: string[] = [];
    const tweets: ITweetProps[] = tweetStatuses.map((tweet: ITweetStatus) => {
        const formattedTweet: ITweetProps = {
            hashtags: tweet.entities.hashtags,
            image: tweet.user.profile_image_url,
            name: tweet.user.screen_name,
            text: tweet.text
        }
        formattedTweet.hashtags.forEach((hashtag) => hashtagStrings.push(hashtag.text));

        return formattedTweet;
    });

    const hashtagSet = [...new Set(hashtagStrings)];
    const hashtags: IHashtagProps[] = hashtagSet.map((hashtag) => { 
        return { text: hashtag } 
    });
    return { hashtags, tweets };
};