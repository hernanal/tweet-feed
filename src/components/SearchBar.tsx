import { ISearchBarProps } from '../types/dataTypes';

const SearchBar = (props: ISearchBarProps) => {
    return (
        <div data-testid="search-bar">
            <input type='text' value={props.value} placeholder={props.placeholder}/>
        </div>
    );
};

export default SearchBar;