import axios from "axios";
import { PROXY_LOAD_MORE } from "../../constants";
import { ITwitterSearchData, ITwitterSearchResponse } from "../../types/dataTypes";

export const loadMoreTweets = async (loadMoreQuery: string): Promise<ITwitterSearchData | null> => {
    try {
        const response: ITwitterSearchResponse = await axios.get(PROXY_LOAD_MORE, { params: {loadMoreQuery} });
        return response.data;
    }
    catch (error) {
        console.log('Error trying to grab tweets...');
    }
    return null;
}