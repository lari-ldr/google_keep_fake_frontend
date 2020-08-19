import React from 'react';
import axios from 'axios';

// export const NotaContext = createContext(); //ele é exportado e sera utilizado nos outros componentes da aaplicação
export const NotaContext = React.createContext()

class NotaProvider extends React.Component{
    constructor(props){
        super(props)
        this.state = ({
            data: [],
            noteSettings: [],
            isLoaded: false,
            isClicked: false,
            isEmpty: true,
            isEditing: false
        });
    }

    componentDidMount(){
        axios.get(`http://localhost:9000/index`)
        .then(response => {
            this.setState({
                data: response.data,
                isLoaded: true
            })
        })
        axios.get(`http://localhost:9000/settings`)
        .then(response => {
            this.setState({
                noteSettings: response.data,
                isLoaded: true
            })
        })
    }

    saveNote = (newNote)=>{

        const id = this.state.data.length + 1
        // const CancelToken = axios.CancelToken;
        // const source = CancelToken.source();
        // const isEmptyCancel = this.state.isEmpty ? source.token : '';

        axios.post(`http://localhost:9000/index/${id}`, {
          id: this.state.data.length + 1,
          title: newNote.title,
          content: newNote.content
        } 
        // {CancelToken: isEmptyCancel}
        )
        .then( response=>{
          response.data = {
            id: this.state.data.length + 1,
            title: newNote.title,
            content: newNote.content
          }
        })

    // axios.post(`http://localhost:9000/settings/${id}`, {
    //     note_id: this.state.data.length + 1,
    //     background_color: newNote.background_color,
    //     is_archived: newNote.is_archived,
    //     is_pinned: newNote.is_pinned
    // })
    // .then( response => {
    //     response.data ={
    //         note_id: this.state.data.length + 1,
    //         background_color: newNote.background_color,
    //         is_archived: newNote.is_archived,
    //         is_pinned: newNote.is_pinned
    //     }
    // })

    this.setState({ data: [ ...this.state.data, newNote]})


        // source.cancel('Operation canceled by the user')
        // this.state.isEmpty ? console.log("Operation canceled") : console.log("item added frontend")
}

saveNotesettings = (newNote)=>{
    const id = this.state.data.length + 1

axios.post(`http://localhost:9000/settings/${id}`, {
    note_id: this.state.data.length + 1,
    background_color: newNote.background_color,
    is_archived: newNote.is_archived,
    is_pinned: newNote.is_pinned
})
.then( response => {
    response.data ={
        note_id: this.state.data.length + 1,
        background_color: newNote.background_color,
        is_archived: newNote.is_archived,
        is_pinned: newNote.is_pinned
    }
})

this.setState({ data: [ ...this.state.data, newNote]})

}

    editNote = (noteEdited)=>{
        const id = noteEdited.id
        axios.put(`http://localhost:9000/index/${id}`, {
            id: noteEdited.id,
            title: noteEdited.title,
            content: noteEdited.content
        })
        .then( response=>{
            response.data={
                id: noteEdited.id,
                title: noteEdited.title,
                content: noteEdited.content
            }
        })
        this.setState({data: [...this.state.data]})
        const teste = this.state.data.map(el => (el.id === id ? Object.assign({}, el, noteEdited) : el))
        console.log(teste)
        this.setState({
            data: teste
          }, ()=>{
              console.log(this.state.data)
          });

    }

    // delete a note
    deleteNote = (noteDeleted)=>{
        const id = noteDeleted.id
        axios.delete(`http://localhost:9000/index/${id}`)
        .then(response =>{
            console.log(response)
        })

        this.setState({data: [...this.state.data]})

        const removedItem = this.state.data.filter(delItem => {return delItem.id !== id})
        this.setState({data: removedItem})
        console.log(this.state.data)
        console.log(removedItem)
    }

    handleFormVisibilityOutside =()=>{
        this.setState({isClicked: false})
      }
    
    handleFormVisibilityInside =()=>{
        this.setState({isClicked: true})    
    }

    handleEditMode =()=>{
        this.setState({isEditing: false})
    }

    render(){
        console.log(this.state.data)
        return(
            // <></>
        <NotaContext.Provider value={{
            state: this.state,
            handleFormVisibilityOutside: this.handleFormVisibilityOutside,
            handleFormVisibilityInside: this.handleFormVisibilityInside,
            saveNote: this.saveNote,
            saveNotesettings: this.saveNotesettings,
            editNote: this.editNote,
            deleteNote: this.deleteNote,
            editingModeTeste: this.editingModeTeste,
            handleEditMode: this.handleEditMode
        }} >
            {this.props.children}
        </NotaContext.Provider>
        )
    }
}

// const NotaProvider = ({children})=>{
//     // console.log(children) //retorna as components em app que estão entre <NotaProvider></NotaProvider>
//     const [data, setData] = useState([]); // esse estado agora esta disponivel de uma forma global
//     const [isClicked, setIsClicked] = useState(false);
//     const [isEmpty, setIsEmpty] = useState(true);
//     const [isLoaded, setIsLoaded] = useState(false);

// // loads all the information to display
//     useEffect(()=>{
//         const fetchData = async () =>{
//             const result = await axios(
//                 `http://localhost:9000/index`,
//             );
//             setData(result.data);
//             setIsLoaded(true)
//         };    
//         fetchData();
//     }, [data]); // salientar isso no tutorial


// // save a new note (post request) & update the state | impedir de enviar notas sem nada escrito
// const saveNote = (newNote)=>{
//     // console.log(newNote) // retorna um obj
//     const id = newNote.id
//     const CancelToken = axios.CancelToken;
//     const source = CancelToken.source();
//     const isEmptyCancel = isEmpty ? source.token : '';
//     axios.post(`http://localhost:9000/index/${id}`, {
//       id: newNote.length + 1,
//       title: newNote.title,
//       content: newNote.content
//     }, {CancelToken: isEmptyCancel})
//     .then( response=>{
//       response.data = {
//         id: newNote.length + 1,
//         title: newNote.title,
//         content: newNote.content
//       }
//     })
//     setData([
//         ...data,
//         newNote
//     ])
//     source.cancel('Operation canceled by the user')
//     isEmpty ? console.log("Operation canceled") : console.log("item added frontend")
// }
// // edit a note
// const editNote = (onNoteChanges)=>{
//     const id = onNoteChanges.id
//     axios.put(`http://localhost:9000/index/${id}`, {
//         id: onNoteChanges.id,
//         title: onNoteChanges.title,
//         content: onNoteChanges.content
//     })
//     .then( response=>{
//         response.data={
//             id: onNoteChanges.id,
//             title: onNoteChanges.title,
//             content: onNoteChanges.content
//         }
//     })
//     console.log(data)
//     console.log(onNoteChanges)
//     setData([
//         ...data,
//         onNoteChanges
//     ])

// }
// // delete a note
// const deleteNote = (onNoteChanges)=>{
//     const id = onNoteChanges.id
//     axios.delete(`http://localhost:9000/index/${id}`)
//     .then( response => {
//       console.log(response)
//     })
//     setData([...data, onNoteChanges])
//     const removedItem = data.filter(deletedItem => {return deletedItem.id !== id})
//     setData([...data, removedItem])
// }
  

// // form clicked
// const handleFormVisibilityOutside =()=>{
//     // this.setState({isClicked: false})
//     setIsClicked(false)
//   }

// const handleFormVisibilityInside =()=>{
//     // this.setState({isClicked: true})
//     setIsClicked(true)

// }

//     return(
//         <NotaContext.Provider value={{data, saveNote, editNote, deleteNote, isClicked, handleFormVisibilityOutside, handleFormVisibilityInside}}>
//             {children}
//         </NotaContext.Provider>
//     );

// }

export default NotaProvider;