import './view/style/main.scss';
import Title from './components/Title';
import SearchBar from './components/SearchBar';
import TweetList from './components/TweetList';
import HashtagContainer from './components/HashtagContainer';

const App = () => {
  return (
    <div className="main">
      <Title text='Twitter Feed'/>
      <SearchBar placeholder='Search by keyword' value='Test keyword'/>
      <TweetList tweets={[]}/>
      <HashtagContainer hashtagList={[]}/>
    </div>
  );
}

export default App;
