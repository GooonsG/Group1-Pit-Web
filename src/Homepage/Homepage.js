import React from 'react';
import Navbar from '../Components/Navbar';
const Homepage = () => {
    return (
        <div className="homepage">
            <Navbar />

            <header className="homepage-header">
                <h1>Welcome to Our Website</h1>
                <p>Your one-stop solution for all your needs</p>
                <button className="cta-button">Get Started</button>
            </header>
            <section className="features">
                <div className="feature">
                    <h2>Feature 1</h2>
                    <p>Discover amazing features that make your life easier.</p>
                </div>
                <div className="feature">
                    <h2>Feature 2</h2>
                    <p>Experience seamless integration and functionality.</p>
                </div>
                <div className="feature">
                    <h2>Feature 3</h2>
                    <p>Enjoy top-notch support and reliability.</p>
                </div>
            </section>
            <footer className="homepage-footer">
                <p>&copy; 2023 Your Company. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Homepage;