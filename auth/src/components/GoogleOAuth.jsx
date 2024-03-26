import React from 'react';
import { GoogleLogin } from 'react-google-login';

const GoogleOAuth = ({ setIsAuthenticated }) => {
  const clientId = "3502942640-2hf4ardsu0qtk5e3trrjstdmntf3phnk.apps.googleusercontent.com";

  const onSuccess = (res) => {
    console.log("LOGIN SUCCESS! Current user: ", res.profileObj);
    setIsAuthenticated(true);
  };

  const onFailure = (error) => {
    console.log("LOGIN FAILED! Error: ", error);
  };

  return (
    <GoogleLogin
      clientId={clientId}
      buttonText="Login with Google"
      onSuccess={onSuccess}
      onFailure={onFailure}
      cookiePolicy={'single_host_origin'}
    />
  );
};

export default GoogleOAuth;
