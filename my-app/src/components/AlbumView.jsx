import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Import useNavigate here

function AlbumView() {
    const { id } = useParams();
    const navigate = useNavigate(); // Use the useNavigate hook
    const [albumData, setAlbumData] = useState([]);

    useEffect(() => {
        const API_URL = `http://localhost:3002/song/${id}`;
        const fetchData = async () => {
            const response = await fetch(API_URL);
            const resData = await response.json();
            setAlbumData(resData.results);
        };
        fetchData();
    }, [id]);

    const justSongs = albumData.filter(entry => entry.wrapperType === 'track');

    const renderSongs = justSongs.map((song, i) => {
        return (
            <div key={i}> {/* Or use song.trackId if available for a unique key */}
                <p>{song.trackName}</p>
            </div>
        );
    });

    // Navigation buttons function
    const navButtons = () => {
        return(
            <div>
                <button onClick={() => navigate(-1)}>Back</button>
                |
                <button onClick={() => navigate('/')}>Home</button>
            </div>
        );
    };

    return (
        <div>
            {navButtons()} {/* Render the navigation buttons */}
            <h2>Album Songs</h2>
            {renderSongs.length > 0 ? renderSongs : <p>No songs found.</p>}
        </div>
    );
}

export default AlbumView;
