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
  const isMobile = window.screen.width <= 900 ? true : false;

  if (isMobile) {
    return (
      <div className='main mobile'>
        <Title className='tweetfeed__title--mobile' text='Twitter Feed' />
        <div>
          <SearchBar placeholder='Search by keyword' className='tweetfeed__search-bar-container mobile' />
        </div>
        <div>
          <HashtagContainer hashtagList={hashtags} />
        </div>
        <div>
          <TweetFeed tweets={tweets} />
        </div>
      </div>
    );
  }
  else {
    return (
      <div className='main'>
        <Title className='tweetfeed__title' text='Twitter Feed' />
        <div className='flex'>
          <div className='tweetfeed__container'>
            <SearchBar placeholder='Search by keyword' className='tweetfeed__search-bar-container' />
            <TweetFeed tweets={tweets} />
          </div>
          <div className='tweetfeed__hashtag-container'>
            <HashtagContainer hashtagList={hashtags} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
