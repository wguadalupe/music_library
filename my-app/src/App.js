import { useState, useEffect, Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Gallery from './components/Gallery';
import SearchBar from './components/SearchBar';
import { DataContext } from './context/DataContext';
import { SearchContext } from './context/SearchContext';
import AlbumView from './components/AlbumView'; // Ensure this is the correct path
import ArtistView from './components/ArtistView';

function App() {
  const [message, setMessage] = useState('Search for Music!');
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');

  const API_URL = 'https://itunes.apple.com/search?term=';

  useEffect(() => {
    if (search) {
      const fetchData = async () => {
        const response = await fetch(`${API_URL}${encodeURIComponent(search)}&media=music&entity=album`);
        const resData = await response.json();
        if (resData.results.length > 0) {
          setData(resData.results);
          setMessage('');
        } else {
          setMessage('Not Found');
          setData([]);
        }
      };
      fetchData();
    }
  }, [search]);

  const handleSearch = (term) => {
    setSearch(term);
  };

  return (
    <div>
      <Router>
        <SearchContext.Provider value={{ search, handleSearch }}>
          <DataContext.Provider value={{ data, message }}>
            <Routes>
              <Route path="/" element={
                <Fragment>
                  <SearchBar />
                  <Gallery />
                </Fragment>
              } />
              <Route path="/album/:id" element={<AlbumView />} />
              <Route path="/artist/:id" element={<ArtistView />} />
            </Routes>
          </DataContext.Provider>
        </SearchContext.Provider>
      </Router>
    </div>
  );
}

export default App;
