import { useContext } from 'react';
import { DataContext } from '../context/DataContext';
import GalleryItem from './GalleryItem';

const Gallery = () => {
    const data = useContext(DataContext);

    // Safely handle cases where data may not be an array
    const display = Array.isArray(data) ? data.map((item, index) => (
        <GalleryItem key={index} item={item} />
    )) : <p>Loading...</p>; // or some other placeholder content

    return (
        <div>
            {display}
        </div>
    );
}

export default Gallery;
