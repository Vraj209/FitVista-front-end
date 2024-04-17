import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const VideoList = () => {
    const [videos, setVideos] = useState([]);
    const navigate = useNavigate();
    const { auth } = useContext(AuthContext);
    const { accessToken } = auth;
    useEffect(() => {
        const fetchVideos = async () => {
            try {
                const response = await axios.get('/api/v1/training/content/videos', {
                    
                        withCredentials: true,
                        headers: {
                          
                          Authorization: `Bearer ${accessToken}`,
                        },
                      
                });
                setVideos(response.data);
            } catch (error) {
                console.error('Failed to fetch videos:', error);
            }
        };
        fetchVideos();
    }, []);

    const handleView = (videoId) => {
        navigate(`/content/${videoId}`);
    };

    const handleUpdate = (videoId) => {
        navigate(`/updatevideo/${videoId}`);
    };

    const handleDelete = async (videoId) => {
        try {
            await axios.delete(`/api/v1/training/deletevideo/${videoId}`);
            setVideos(videos.filter(video => video._id !== videoId));
            alert('Video deleted successfully');
        } catch (error) {
            console.error('Failed to delete video:', error);
            alert('Error deleting video');
        }
    };

    return (
        <div className="container mx-auto px-4">
            <h1 className="text-xl font-bold text-center my-6">Video Library</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {videos.map((video) => (
                    <div key={video._id} className="max-w-sm rounded overflow-hidden shadow-lg p-4 bg-white">
                        <img className="w-full" src={video.thumbnail.url} alt="Thumbnail" />
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">{video.title}</div>
                            <p className="text-gray-700 text-base">{video.description}</p>
                        </div>
                        <div className="px-6 pt-4 pb-2">
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                                onClick={() => handleView(video._id)}>View Video</button>
                            <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded mr-2"
                                onClick={() => handleUpdate(video._id)}>Update</button>
                            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                                onClick={() => handleDelete(video._id)}>Delete</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default VideoList;
