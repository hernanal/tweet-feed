import React from 'react';
import './view/style/main.scss';
import Title from './components/Title';
import SearchBar from './components/SearchBar';
import TweetList from './components/TweetList';
import HashtagContainer from './components/HashtagContainer';
import { useSelector } from 'react-redux';
import { IRootStore } from './types/dataTypes';

const App = () => {
  const { hashtagContainerReducer, searchBarSlice, tweetFeedReducer } = useSelector((state: IRootStore) => state);
  const { hashtags } = hashtagContainerReducer;
  const { keyword } = searchBarSlice;
  const { tweets } = tweetFeedReducer;
  return (
    <div className="main">
      <div>
        <Title text='Twitter Feed' />
        <SearchBar placeholder='Search by keyword' value={keyword} />
        <TweetList tweets={tweets} onClickTweetHashtag={() => console.log('Tweet hashtag clicked')} onClickLoadMore={() => console.log('Load more clicked')} />
      </div>
      <div>
        <HashtagContainer hashtagList={hashtags} onClickHashtag={() => console.log('Hashtag clicked from container')} />
      </div>
    </div>
  );
}

export default App;
