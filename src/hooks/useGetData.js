import { useState, useEffect } from 'react';

const api = 'https://us-central1-arepa-dev-api.cloudfunctions.net/api';

const useGetData = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(api)
            .then(res => res.json())
            .then(data => setData(data.data))
    }, [])

    return data;
}

export default useGetData;