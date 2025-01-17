import { useState, useEffect } from "react";
import { Alert } from 'react-native';

export const useAppwrite = (fn) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);


    const fetchData = async () => {
        setIsLoading(true);

        try {
            const response = await fn();
            // console.log("Response:", response);
            setData(response);
        } catch (error) {
            Alert.alert('Error', error.message);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const refetch = () => fetchData();

    return { data, isLoading, refetch };
};