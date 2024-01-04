import { useState } from 'react';
import axios from 'axios';

const useAxiosFetch = () => {
    const [data, setData] = useState<any>(null);
    const [headers, setHeaders] = useState<any>(null);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const fetchData = async (url:string) => {

        if (!url) return;
        setLoading(true);
        setData(null);
        setHeaders(null);
        setError('');

        try {
            const response = await axios.get(url);
            setData(response.data);
            setHeaders(response.headers);
        } catch (error:any) {
            setError(error?.response?.data?.message || 'Unexpected Error!');
        } finally {
            setLoading(false);
        }
    };

    const removeError = ()=>{
        setError('');
    }

    return { data, error, loading,headers, fetchData, removeError };
};

export default useAxiosFetch;
