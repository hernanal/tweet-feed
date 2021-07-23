import React from 'react';
import './view/style/main.scss';
import Title from './components/Title';
import SearchBar from './components/SearchBar';
import TweetFeed from './components/TweetFeed';
import HashtagContainer from './components/HashtagContainer';
import { useSelector } from 'react-redux';
import { IRootStore } from './types/dataTypes';

const App = () => {
  const { hashtagContainerReducer, tweetFeedReducer } = useSelector((state: IRootStore) => state);
  const { hashtags } = hashtagContainerReducer;
  const { tweets } = tweetFeedReducer;
  return (
    <div className="main">
      <div>
        <Title text='Twitter Feed' />
        <SearchBar placeholder='Search by keyword' />
        <TweetFeed tweets={tweets} onClickTweetHashtag={() => console.log('Tweet hashtag clicked')} onClickLoadMore={() => console.log('Load more clicked')} />
      </div>
      <div>
        <HashtagContainer hashtagList={hashtags} onClickHashtag={() => console.log('Hashtag clicked from container')} />
      </div>
    </div>
  );
}

export default App;
