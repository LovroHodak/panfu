import React, { useState, createContext, useEffect, useContext } from "react";
import axios from "axios";
import { API_URL } from "../config";

const SocialContext = createContext();

export function SocialProvider(props) {
  const [socialLinks, setSocialLinks] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    axios
      .get(`${API_URL}/api/social`, { withCredentials: true })
      .then((response) => {
        setSocialLinks(response.data);
        console.log(response.data);
      })
      .catch((err) => {
        setError(err.message);
        console.log("this is error: ", err);
      });
  }, []);

  return (
    <SocialContext.Provider
      value={{
        socialLinks,
        error,
      }}
    >
      {props.children}
    </SocialContext.Provider>
  );
}

export function useSocial() {
  return useContext(SocialContext);
}
