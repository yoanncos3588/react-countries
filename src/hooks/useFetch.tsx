import axios from "axios";
import { useEffect, useState } from "react";
import { DataInterface } from "../interfaces";

export default function useFetch(url: string): DataInterface {
  const [data, setData] = useState([]);
  const [error, setError] = useState<null | string>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // fetch
        const res = await axios.get(url);
        if (res.status !== 200) {
          throw new Error("Erreur réseau");
        }
        setData(res.data);
      } catch (error) {
        let message: string;
        if (error instanceof Error) {
          message = error.message;
        } else {
          message = String(error);
        }
        setError(message);
      }
    };
    if (typeof url !== "string") {
      setError("URL invalide");
    } else {
      fetchData();
    }
  }, [url]);

  return { data, error };
}
