import { useState } from 'react';

// Define styles outside of the component
const simpleStyle = {
    width: '25vw',
    height: '20vh',
    border: '1px solid black',
    margin: '2px'
};

const detailStyle = {
    width: '80vw',
    height: '20vh',
    border: '1px solid black',
    margin: '2px',
    backgroundImage: '', // Placeholder for dynamic background image from props
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    color: 'yellow'
};

function GalleryItem(props) {
    let [view, setView] = useState(false);

    // Update detailStyle with dynamic backgroundImage from props
    detailStyle.backgroundImage = `url(${props.item.artworkUrl100})`;

    const simpleView = () => {
        return (
            <div style={simpleStyle}>
                <h3>{props.item.trackName}</h3>
                <h4>{props.item.collectionName}</h4>
            </div>
        );
    };

    const detailView = () => {
        return (
            <div style={detailStyle}>
                <h2>{props.item.trackName}</h2>
                <h3>{props.item.collectionName}</h3>
                <h4>{props.item.primaryGenreName}</h4>
                <h4>{props.item.releaseDate}</h4>
            </div>
        );
    };

    return (
        <div onClick={() => setView(!view)}
            style={{ display: 'inline-block' }}>
            {view ? detailView() : simpleView()}
        </div>
    );
}

export default GalleryItem;
