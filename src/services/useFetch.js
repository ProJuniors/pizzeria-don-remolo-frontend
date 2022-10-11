import { useEffect, useState } from 'react';
import axios from 'axios';
import { token } from './token';

const useFetch = (url) => {
  const [data, setData] = useState({});
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    axios
      .get(url, {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        setData(res.data);
        setLoaded(true);
      })
      .catch((err) => {
        setError(err);
        setLoaded(false);
      });
  }, [url]);

  return { data, loaded, error };
};

export { useFetch };
