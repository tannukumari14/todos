"use client";
import {  useState } from 'react';

const SearchBar = ({ onSearch }) => {
    const [searchValue, setSearchValue] = useState('');
  
    const handleInputChange = (e) => {
      setSearchValue(e.target.value);
    };
  
    const handleSearchClick = () => {
      onSearch(searchValue);
    };
  
    return (
      <>
        <h3>SearchBar</h3>
        <input 
          type="text" 
          placeholder="Enter ID to search" 
          value={searchValue} 
          onChange={handleInputChange} 
        />
        <button onClick={handleSearchClick}>Search Data</button>
      </>
    );
  };
  
  export default SearchBar;