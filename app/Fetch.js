"use client";
import { useEffect, useState } from 'react';
import SearchBar from './SearchBar';

const Fetch = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/todos`)
      .then(response => response.json())
      .then((data) => {
        setData(data); 
        setFilteredData(data); 
      });
  }, []);

  const handleSearch = (searchId) => {
    const id = Number(searchId); 
    if (id) {
      setFilteredData(data.filter(item => item.id === id)); 
    } else {
      setFilteredData(data); 
    }
  };

  return (
    <>
      <div className="container">
        <h1>Fetched Data</h1>
        <SearchBar onSearch={handleSearch} />
        <table border="1">
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Completed</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map(item => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.completed ? 'Yes' : 'No'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Fetch;
