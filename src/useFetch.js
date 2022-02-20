import { useState, useEffect } from "react";
const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, isloading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController();
    setTimeout(() => {
      fetch(url, { signal: abortCont.signal })
        .then((res) => {
          if (!res.ok) {
            throw Error("Could not fetch the data for that resource");
          }
          return res.json();
        })
        .then((data) => {
          setData(data);
          isloading(false);
          setError(false);
        })

        .catch((err) => {
          isloading(false);
          setError(err.message);
        });
    });
    return () => abortCont.abort;
  }, [url]);

  return { data, isLoading, error };
};
export default useFetch;
