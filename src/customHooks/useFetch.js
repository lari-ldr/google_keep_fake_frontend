import React, {useState, useEffect} from 'react';
import axios from axios;

const useFetch = (url, options)=>{
    const [response, setResponse] = useState(null);

    //     useEffect(()=>{
    //     const fetchData = async () =>{
    //         const result = await axios(url, options);
    //         const finalResult = await result.data;
    //         setResponse(finalResult)
    //     };
    //     fetchData();
    // }, []);
    useEffect(()=>{
        const doFetch = async () =>{
            const result = await axios(url, options);
            const json = await result.json();
            setResponse(json);
        };
        doFetch();
    }, []);
}
export default useFetch;