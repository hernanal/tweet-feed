import './view/style/main.scss';
import Title from './components/Title';
import SearchBar from './components/SearchBar';

const App = () => {
  return (
    <div className="main">
      <Title text='Twitter Feed'/>
      <SearchBar placeholder='Search by keyword' value='Test keyword'/>
    </div>
  );
}

export default App;
