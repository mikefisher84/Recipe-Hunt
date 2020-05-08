import React, {useEffect, useState} from 'react';
import SearchInput from './components/SearchInput';
import ResultList from './components/ResultList';
import useDebounce from '../hooks/useDebounce';

const SearchPage = () => {

  const [searchTerm, updateSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const debouncedSearchTerm = useDebounce(searchTerm, 500);


  useEffect(() => {
    if (!debouncedSearchTerm) return setSearchResults([])
    let response

    const fetchSearchResults = async () => {
      try {
        response = await fetch(`/api/?q=${searchTerm}`)
      } catch(error) {
        console.log(error)
      }
      const {results} = await response.json();
      console.log(results)

      setSearchResults(results);
      setIsSearching(false);
    }
    fetchSearchResults()

  }, [debouncedSearchTerm, searchTerm])

  return (
    <div>
      <header className="App-header">
        <p>
          Welcome to Search Pups
        </p>
      </header>
      <SearchInput updateSearchTerm={updateSearchTerm} setIsSearching={setIsSearching}/>
      <ResultList searchResults={searchResults} />
      {/* {isSearching ? <div>Searching</div> : <ResultList searchResults={searchResults} />} */}
    </div>
  );
}

export default SearchPage;
