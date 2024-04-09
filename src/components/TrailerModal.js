import React, { useEffect, useState } from 'react';
import tmdbApi from '../api/tmdb';

const TrailerModal = ({ mediaType, mediaId, onClose }) => {
    const [videoId, setVideoId] = useState(null);

    useEffect(() => {
        const fetchTrailer = async () => {
            try {
                const response = await tmdbApi.get(`/${mediaType}/${mediaId}/videos`);
                const video = response.data.results.find(o => o.site === 'YouTube');
                setVideoId(video?.key);
            } catch (error) {
                console.error("Failed to fetch trailer:", error);
            }
        };

        fetchTrailer();
    }, [mediaId, mediaType]);

    return (
        <>
            <div className="trailer-modal-backdrop" onClick={onClose} />
            <div className="trailer-modal">
                {videoId && (
                    <iframe
                        width="100%"
                        height="100%"
                        src={`https://www.youtube.com/embed/${videoId}`}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                )}
                <button
                    className="trailer-modal__close"
                    onClick={onClose}
                >
                    ✕
                </button>
            </div>
        </>
    );
};

export default TrailerModal;