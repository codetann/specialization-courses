import { useState, useEffect } from "react";

export default function useFetch(url) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    if (!loading) return;
    async function fetchUrl() {
      try {
        const res = await fetch(url);
        if (res.ok) {
          const json = await res.json();
          console.log(json);
          setData(json);
        }
      } catch (error) {
        console.log(error);
      }
    }

    setLoading(false);
    fetchUrl();
  }, []);

  return data;
}
