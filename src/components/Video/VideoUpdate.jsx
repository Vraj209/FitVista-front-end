import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const VideoUpdate = () => {
    const { videoId } = useParams();
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchVideo = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/api/content/${videoId}`);
                setTitle(response.data.video.title);
                setDescription(response.data.video.description);
            } catch (err) {
                setError('Failed to fetch video');
                console.error(err);
            }
        };

        fetchVideo();
    }, [videoId]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            await axios.put(`http://localhost:3000/api/updatevideo/${videoId}`, {
                title,
                description
            });
            alert('Video updated successfully');
            navigate(`/content/${videoId}`); // Redirect to video details page
        } catch (err) {
            setError('Failed to update video');
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    if (error) return <div>Error: {error}</div>;

    return (
        <form onSubmit={handleSubmit}>
            <h1>Update Video</h1>
            <div>
                <label>Title:</label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
            </div>
            <div>
                <label>Description:</label>
                <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />
            </div>
            <button type="submit" disabled={loading}>
                {loading ? 'Updating...' : 'Update Video'}
            </button>
        </form>
    );
};

export default VideoUpdate;
