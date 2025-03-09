import React, { useEffect } from "react";
import axios from "../config/axiosInstance";
import { useNavigate } from "react-router";

const GoogleLoginButton: React.FC = () => {
  const google = (window as any).google;
  const navigate = useNavigate();
  const handleCredentialResponse = async (response: any) => {
    try {
      const google_token = response.credential;
      const { data } = await axios({
        method: "POST",
        url: "/auth-google",
        headers: {
          google_token,
        },
      });
      localStorage.setItem("access_token", data.access_token);
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
      callback: handleCredentialResponse,
    });
    google.accounts.id.renderButton(
        document.getElementById("buttonDiv"),
        {width:"360px", theme: "outline", text: "signin-with", type: "standard", shape: "rectangular", size: "large", locale: "en"}  
    );
  }, []);

  return (
    <div
     className="max-w-md mx-auto flex justify-center"
      id="buttonDiv"
    >
    </div>
  );
};

export default GoogleLoginButton;
