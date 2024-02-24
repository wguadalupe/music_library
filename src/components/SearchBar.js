import { useContext, useRef } from 'react'; // Corrected import
import { SearchContext } from '../context/SearchContext'; // Ensure this matches the exported name

function SearchBar() {
    const { handleSearch } = useContext(SearchContext); // Assuming handleSearch is a context value
    const term = useRef(null); // Using useRef for DOM reference

    return (
        <form onSubmit={(e) => {
            e.preventDefault(); 
            handleSearch(e, term.current.value); 
        }}>
            <input ref={term} type="text" placeholder="Search Here" />
            <button type="submit">Submit</button> 
        </form> // Corrected form closing tag
    );
}

export default SearchBar;
