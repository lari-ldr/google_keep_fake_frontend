import React, {useState, useEffect, createContext} from 'react';
import axios from 'axios';

export const NotaContext = createContext(); //ele é exportado e sera utilizado nos outros componentes da aaplicação

const NotaProvider = ({children})=>{
    const [data, setData] = useState([]); // esse estado agora esta disponivel de uma forma global
    const [isClicked, setIsClicked] = useState(false)
    const [isEmpty, setIsEmpty] = useState(true)
    console.log(isClicked)
// loads all the information to display
    useEffect(()=>{
        const fetchData = async () =>{
            const result = await axios(
                `http://localhost:9000/index`,
            );
            setData(result.data);
        };
        fetchData();
    }, []);
// save a new note (post request) & update the state
const saveNote = (newNote)=>{
    console.log(newNote) // retorna um obj
    const id = newNote.id
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();
    const isEmpty = isEmpty;
    const isEmptyCancel = isEmpty ? source.token : '';
    axios.post(`http://localhost:9000/index/${id}`, {
      id: newNote.length + 1,
      title: newNote.title,
      content: newNote.content
    }, {CancelToken: isEmptyCancel})
    .then( response=>{
      response.data = {
        id: newNote.length + 1,
        title: newNote.title,
        content: newNote.content
      }
    })
    setData([
        ...data,
        newNote
    ])
    source.cancel('Operation canceled by the user')
    isEmpty ? console.log("Operation canceled") : console.log("item added frontend")
}
// edit a note
// delete a note

// form clicked
const handleFormVisibilityOutside =()=>{
    // this.setState({isClicked: false})
    setIsClicked(false)
  }

const handleFormVisibilityInside =()=>{
    // this.setState({isClicked: true})
    setIsClicked(true)

}

    return(
        <NotaContext.Provider value={{data, saveNote, isClicked, handleFormVisibilityOutside, handleFormVisibilityInside}}>
            {children}
        </NotaContext.Provider>
    );

}

export default NotaProvider;