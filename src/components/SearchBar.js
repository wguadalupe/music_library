import { useContext, useRef } from 'react'; // Added useRef
import { SearchContext } from '../context/SearchContext'; // Ensure this matches the exported context name

function SearchBar() {
    const { handleSearch } = useContext(SearchContext);
    const term = useRef(null); // Using useRef to access the input element

    return (
        <form onSubmit={(e) => {
            e.preventDefault(); // Prevent default form submission
            handleSearch(e, term.current.value); // Call your handleSearch with the input's value
        }}>
            <input ref={term} type="text" placeholder="Search Here" />
            <button type="submit">Submit</button>
        </form> // Corrected the closing tag for form
    );
}

export default SearchBar;
