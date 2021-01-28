import Axios from "axios";
import { useState, useEffect, useRef } from "react";

export const useAxios = (url) => {

  //Este es un custom hook realizado a través de la librería useAxios se
  // utilizaron los funcional hook effect, ref, state
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
