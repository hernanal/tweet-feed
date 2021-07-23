import axios from "axios";
import { ITwitterSearchData, ITwitterSearchResponse } from "../../types/dataTypes";

export const getTweets = async (searchParam: string): Promise<ITwitterSearchData | null> => {
    try {
        const response: ITwitterSearchResponse = await axios.get('http://localhost:3001/api/search', { params: { searchParam } });
        return response.data;
    }
    catch (error) {
        console.log('Error trying to grab tweets...');
    }
    return null;
}