import axios from 'axios';

class TwitterFeedService {
    private twitterPath = 'https://api.twitter.com/1.1/search/tweets.json';

    public getTweets(searchParam: string): any {
        axios.get('http://localhost:3001/api/search', { params: { searchParam }}).then((response) => {
            return response;
        }).catch((error) => {
            console.log(error);
        });
    }

    public loadMore(pathString: string) {
        axios.get(`${this.twitterPath}${pathString}`)
    }

}

export default new TwitterFeedService();