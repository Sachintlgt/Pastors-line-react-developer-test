import React from "react";

// Loader component displays a loading spinner
const Loader = () => {
    return (
        <div className="d-flex justify-content-center align-items-center w-100" style={{ zIndex: 9999 }}>
            {/* Display a spinning loader */}
            <div className="spinner-border" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    )
}

export default Loader;
