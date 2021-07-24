import axios from "axios";
import { PROXY_KEYWORD_SEARCH } from "../../constants";
import { ITwitterSearchData, ITwitterSearchResponse } from "../../types/dataTypes";

export const loadMoreTweets = async (loadMoreQuery: string): Promise<ITwitterSearchData | null> => {
    try {
        const response: ITwitterSearchResponse = await axios.get(`${PROXY_KEYWORD_SEARCH}/loadmore${loadMoreQuery}`);
        return response.data;
    }
    catch (error) {
        console.log('Error trying to grab tweets...');
    }
    return null;
}