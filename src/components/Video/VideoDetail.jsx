import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const VideoDetail = () => {
    const { videoId } = useParams();
    const [video, setVideo] = useState(null);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchVideo = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/api/content/${videoId}`);
                setVideo(response.data.video);
            } catch (err) {
                setError('Failed to fetch video details');
                console.error(err);
            }
        };

        fetchVideo();
    }, [videoId]);

    if (error) return <div>Error: {error}</div>;

    return (
        <div>
            {video ? (
                <div>
                    <h1>{video.title}</h1>
                    <p>{video.description}</p>
                    <video controls src={video.videoFile} alt="Video content" />
                    <img src={video.thumbnail} alt="Video Thumbnail" />
                    <p>Duration: {video.duration} minutes</p>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default VideoDetail;
