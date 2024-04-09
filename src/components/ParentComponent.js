import React, { useState } from 'react';
import TrailerModal from './TrailerModal';

const ParentComponent = () => {
    const [showTrailerModal, setShowTrailerModal] = useState(false);

    const handleOpenTrailerModal = () => {
        setShowTrailerModal(true);
    };

    const handleCloseTrailerModal = () => {
        setShowTrailerModal(false);
    };

    return (
        <div>
            <button onClick={handleOpenTrailerModal}>Open Trailer Modal</button>

            {showTrailerModal && (
                <TrailerModal onClose={handleCloseTrailerModal} />
            )}
        </div>
    );
};

export default ParentComponent;