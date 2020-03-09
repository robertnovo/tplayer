import { useEffect, useState } from "react";
const VIDEO_PLAYER_API = "https://api.myjson.com/bins/so5pk";

export const useGetData = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch(VIDEO_PLAYER_API);
        setData(await response.json());
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }

    getData();
  }, []);

  return {
    data,
    loading,
    error
  };
};
