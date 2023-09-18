import { useEffect, useState } from "react";

import axios from "axios";
// import { useSelector } from "react-redux";

const useFetch = (method, url) => {
  const [data, setData] = useState(null);
  const [metaData, setMetaData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const base_url = process.env.NEXT_PUBLIC_BASE_URL;

  // const token = useSelector((state) => state.user.token);

  // const headers = {
  //   authorization: "Bearer " + token,
  // };
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        // const res = await axios.get(base_url + url, { headers });
        const res = await axios.get(base_url + url);
        setData(res.data.data);
        setMetaData(res.data.metadata);
      } catch (err) {
        setError(err);
      }
      setLoading(false);
    };
    fetchData();
  }, [url]);

  return { metaData, data, loading, error };
};

export default useFetch;
