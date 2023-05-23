import { useEffect, useState } from 'react'

export default function useFetch(url, method = "GET") {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetchArtists(url);
      }, []);

      async function fetchArtists(url){
        const res = await fetch(url, {
            method: method,
        });
        const data = await res.json()

        setData(data)
      }

      return {
        data
      }
}
