import React, {useEffect, useState} from 'react';
import {Header} from 'semantic-ui-react'
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

      setSearchResults(results);
      setIsSearching(false);
    }
    fetchSearchResults()

  }, [debouncedSearchTerm, searchTerm])

  return (
    <div>
      <Header as="h2" textAlign='center'>
        <Header.Content>Welcome to Recipes</Header.Content>
        <SearchInput updateSearchTerm={updateSearchTerm} isSearching={isSearching} setIsSearching={setIsSearching}/>
      </Header>

      <ResultList searchResults={searchResults} />
    </div>
  );
}

export default SearchPage;
