import React from 'react';
import Navbar from '../Components/navigation/Navbar';
const Homepage = () => {
    return (
        <div className="homepage">
            <Navbar />
            <div className="homepage-content">
                <h1>Welcome to the Homepage</h1>
                <p>This is the main content of the homepage.</p>
            </div>
        </div>
    );
};

export default Homepage;