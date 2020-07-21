import React, {useState, useEffect, createContext} from 'react';
import axios from 'axios';

export const NotaContext = createContext(); //ele é exportado e sera utilizado nos outros componentes da aaplicação
// com ele a gente consegue acessar a função NotaProvider

// a proxima função é que irá gerenciar (usar) esse contexto, ela que provem
const NotaProvider = ({children})=>{
    const [data, setData] = useState([]); // esse estado agora esta disponivel de uma forma global

    useEffect(()=>{
        const fetchData = async () =>{
            const result = await axios(
                `http://localhost:9000/index`,
            );
            setData(result.data);
        };
        fetchData();
    }, []);
    
    return(
        <NotaContext.Provider value={{data}}>
            {children}
        </NotaContext.Provider>
    );
}

export default NotaProvider;