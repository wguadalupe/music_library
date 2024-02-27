import { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'

function ArtistView() {
    const navigate = useNavigate()
    const { id } = useParams()
    const [ artistData, setArtistData ] = useState([])
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:3002/album/${id}`);
                if (!response.ok) throw new Error('Network response was not ok');
                const resData = await response.json();
                setArtistData(resData.results);
            } catch (error) {
                console.error("Fetch error:", error);
                setArtistData([]); // Assuming an empty array signifies no data or an error occurred
            }
        };
        fetchData();
    }, [id]);
    

    const justAlbums = artistData.filter(entry => entry.collectionType === 'Album')

    const renderAlbums = justAlbums.map((album, i) => {
        return (
            <div key={album.collectionId || i}> {/* Use album.collectionId or i as a fallback */}
                <Link to={`/album/${album.collectionId}`}>
                    <p>{album.collectionName}</p>
                </Link> {/* Correct closing tag */}
            </div>
        );
    });
    
    

    const navButtons = () => {
        return (
            <div>
                <button onClick={() => navigate(-1)}>Back</button>
                |
                <button onClick={() => navigate('/')}>Home</button>
            </div>
        )
    }

    return (
        <div>
            {artistData.length > 0 ? <h2>{artistData[0].artistName}</h2> : <h2>Loading...</h2>}
            {navButtons()}
            {renderAlbums}
        </div>
    )
}

export default ArtistView;
