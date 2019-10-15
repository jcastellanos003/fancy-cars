import { useState, useEffect } from 'react';

export const useFetch = (url, options) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await fetch(url, options);
        const data = await result.json();

        setResponse(data);
      } catch (error) {
        setError(error);
      }
    };

    getData();
  }, []);

  return {
    response,
    error
  };
}
