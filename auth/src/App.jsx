import React, { useState, useEffect } from 'react';
import { GoogleLogin } from 'react-google-login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { gapi } from 'gapi-script';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const clientId = "3502942640-2hf4ardsu0qtk5e3trrjstdmntf3phnk.apps.googleusercontent.com";

  useEffect(() => {
    const start = () => {
      window.gapi.client.init({
        clientId: clientId,
        scope: "email profile openid",
      });
    };
    window.gapi.load('client:auth2', start);
  }, []);

  // Function to handle successful authentication
  const handleSuccess = () => {
    setIsAuthenticated(true); // Set isAuthenticated to true
  };

  // Function to redirect to the specified link
  const redirectToExternalLink = () => {
    window.location.href = "https://website-engagement-frontend.vercel.app";
  };

  return (
    <Router>
      <div className="container">
        <h1 className="title">Website Engagement Overview Login</h1>
        <Routes>
          <Route path="/" element={!isAuthenticated ? (
            <GoogleLogin
              clientId={clientId}
              buttonText="Login with Google"
              onSuccess={handleSuccess}
              onFailure={(error) => console.log("Login failed:", error)}
              cookiePolicy={'single_host_origin'}
              className="button"
            />
          ) : (
            redirectToExternalLink()
          )} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
