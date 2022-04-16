import React, { useState, useCallback } from 'react';
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://your-database-link.firebasedatabase.app', // replase your database link
});

const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = useCallback(async (requestConfig, applyData) => {
    // requestConfig is object, for url, method and data's body
    setIsLoading(true);
    setError(null);
    try {
      const response = await api(requestConfig);

      const data = response.data;
      applyData(data);
    } catch (err) {
      setError(err.message || 'Something went wrong!');
    }
    setIsLoading(false);
  }, []);
  return { error, isLoading, sendRequest };
};
export default useHttp;
