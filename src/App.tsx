import React from 'react';
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
    <div className='main'>
      <Title className='tweetfeed__title' text='Twitter Feed' />
      <div className='flex'>
        <div className='tweetfeed__container'>
          <SearchBar placeholder='Search by keyword' />
          <TweetFeed tweets={tweets} />
        </div>
        <div className='tweetfeed__hashtag-container'>
          <HashtagContainer hashtagList={hashtags} />
        </div>
      </div>
    </div>
  );
}

export default App;
