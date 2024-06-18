import React from 'react';

import '../App.css'; // Import the global stylesheet

const About = () => {
    return (
        <div className="container about-section">
            <h2 className="text-center my-4">About Web-Notebook</h2>
            <p className="text-center mb-5">Welcome to Web-Notebook, your personal online notebook to keep all your notes organized and accessible from anywhere.</p>

            <div className="row">
                <div className="col-md-4 feature-box text-center">
                    <i className="fas fa-lightbulb fa-3x mb-3"></i>
                    <h4>Easy to Use</h4>
                    <p>Our user-friendly interface allows you to quickly jot down and manage your notes with ease.</p>
                </div>
                <div className="col-md-4 feature-box text-center">
                    <i className="fas fa-cloud fa-3x mb-3"></i>
                    <h4>Cloud Sync</h4>
                    <p>Access your notes from anywhere, on any device. All your notes are securely stored in the cloud.</p>
                </div>
                <div className="col-md-4 feature-box text-center">
                    <i className="fas fa-lock fa-3x mb-3"></i>
                    <h4>Secure</h4>
                    <p>Your notes are private and secure with us. We use advanced encryption to keep your data safe.</p>
                </div>
            </div>

            
        </div>
    );
};

export default About;
