import axios from "axios";
import { ITwitterSearchData, ITwitterSearchResponse } from "../../types/dataTypes";
import { PROXY_KEYWORD_SEARCH } from '../../constants';

export const getTweets = async (searchParam: string): Promise<ITwitterSearchData | null> => {
    try {
        const response: ITwitterSearchResponse = await axios.get(PROXY_KEYWORD_SEARCH, { params: { searchParam } });
        return response.data;
    }
    catch (error) {
        console.log('Error trying to grab tweets...');
    }
    return null;
}