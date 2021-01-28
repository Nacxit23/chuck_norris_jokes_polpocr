import Axios from "axios";
import { useState, useEffect, useRef } from "react";

export const useAxios = (url) => {
  const [data, setdata] = useState([]);

  const isMountan = useRef(true);

  useEffect(() => {
    return () => {
      isMountan.current = false;
    };
  }, []);

  useEffect(() => {
    return () => {
      isMountan.current = false;
    };
  }, []);

  useEffect(() => {
    const apiData = async () => {
      const json = await Axios.get(url);

      if (isMountan.current) {
        setdata(json.data);
      }
    };
    apiData();
  }, [url]);

  return { data };
};
