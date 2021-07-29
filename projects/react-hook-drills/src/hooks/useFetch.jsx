import { useState, useEffect } from "react";

const STATUS = {
  IDLE: "IDLE",
  LOADING: "LOADING",
  LOADED: "LOADED",
};

export default function useFetch(url) {
  const [data, setData] = useState({});
  const [status, setStatus] = useState(STATUS.IDLE);

  useEffect(() => {
    if (status === STATUS.LOADED) return;

    const fetchURL = async () => {
      setStatus(STATUS.LOADING);
      try {
        const res = await fetch(url);
        if (res.ok) {
          const json = await res.json();
          setData(json);
          setStatus(STATUS.LOADED);
        }
      } catch (error) {
        setStatus(STATUS.LOADED);
        console.log(error);
      }
    };

    fetchURL();
  }, []);

  return [data, status];
}
