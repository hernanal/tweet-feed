import React from 'react';
import './view/style/main.scss';
import Title from './components/Title';
import SearchBar from './components/SearchBar';
import TweetList from './components/TweetList';
import HashtagContainer from './components/HashtagContainer';

const App = () => {
  return (
    <div className="main">
      <Title text='Twitter Feed'/>
      <SearchBar onChange={() => console.log('Search bar on change')} placeholder='Search by keyword' value='Test keyword'/>
      <TweetList tweets={[]} onClickTweetHashtag={() => console.log('Tweet hashtag clicked')}/>
      <HashtagContainer hashtagList={[]} onClickHashtag={() => console.log('Hashtag clicked from container')}/>
    </div>
  );
}

export default App;
