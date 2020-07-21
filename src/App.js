import React, {useState} from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt, faPlus, faMinus, faSave } from '@fortawesome/free-solid-svg-icons';
import './App.css';

import Card from './components/Card.js';
import NewNote from './components/NewNote.js';

import Modal from './componentsTest/Modal.js';
import NotaProvider from './contextTest/NotaContext.js';
import NotaList from './componentsTest/NotaList.js';
import AddNota from './componentsTest/AddNota.js';

import Infos from './componentsTest/Infos.js';
import RepoList from './componentsTest/RepoList.js';
import StarredList from './componentsTest/StarredList.js';

const Ap = () =>{
  const [isModalVisible, setIsModalVisible] = useState(false)
// esse estado vai pro NotaProvider
  // const [notas, setNotas] = useState([
  //   {id: 1, title: "ir ao supermercado", done: false},
  //   {id: 2, title: "ir a academia", done: true},
  //   {id: 3, title: "passear com o dog", done: false}
  // ]);

  // pegar novas notas do form / esse metodo é igual e esta no provider na  função saveNota
  // const [nota, setNota] = useState();

  // const handleFormSubmit = (e)=>{
  //   e.preventDefault();
  //   // aqui ele NÃO É um objeto só, ele é uma array de objetos
  //   setNotas([
  //     ...notas,
  //     nota,
  //   ]);
  // }
  // const handleInputChange = (e)=>{
  //   // ele é um objeto só e não uma array de objetos
  //   setNota({
  //     ...nota, //descontroe
  //     id: notas.length + 1,
  //     title: e.target.value,
  //     done: false
  //   })
  // }

  return(
    <>
    <h1 className="TestBranch">THIS IS THE BRANCH FOR TESTING NEW CONCEPTS OF REACTJS</h1>
    <h3>Let's try:</h3>
    <ul>
      <li>Modal - DONE!!!</li>
      <li>Context - DONE!!!</li>
      <li>Hooks</li>
      <li>High order components</li>
    </ul>
    <br></br>
    <hr></hr>
    <br></br>
    <h3>Modal</h3>
    <button onClick={()=> setIsModalVisible(true)}>Open</button>
    {isModalVisible ? (
      <Modal onClose={()=> setIsModalVisible(false)}>
        <h2>Modal do APP</h2>
      </Modal>
      ) : null}
    <br></br>
    <hr></hr>
    <br></br>
    <h3>Context</h3>

    <NotaProvider>
      <NotaList></NotaList>
      <AddNota></AddNota>
    </NotaProvider>

    {/* tudo isso sai e vai para os outros componentes ali em cima */}
    {/* { notas.map(i=>(
      <div key={i.id}> {i.id}) {i.title} - {i.done}</div>
    )) }

    <form onSubmit={handleFormSubmit}>
      <input
        type="text"
        name="nota"
        id="title"
        placeholder="add nova nota"
        onChange={handleInputChange}
      />
      <button> add </button>
    </form> */}
        <br></br>
        <hr></hr>
        <br></br>
        <h3>High order components</h3>
        <div>
        {/* <Infos />
        <RepoList />
        <StarredList /> */}
        </div>
    </>
  );
}

// APP IS THE PARENT
class App extends React.Component{
  constructor(props){
      super(props)
      this.onFormInput = this.onFormInput.bind(this)
      this.clickOutside = this.clickOutside.bind(this)
      this.clickInside = this.clickInside.bind(this)
      this.editingForm = this.editingForm.bind(this)
      this.onDelete = this.onDelete.bind(this)
      this.state = ({
          results: [],
          isLoaded: false,
          isClicked: false,
          componentShouldUpdate: false,
      });
  }

  editingForm(isEditing){
    console.log('hello from the other sideeee')
    console.log(isEditing)
  }

  clickOutside(){
    this.setState({isClicked: false})
  }

  clickInside(){
    this.setState({isClicked: true})
  }

  componentDidMount(){
      axios.get(`http://localhost:9000/index`)
      .then(response => {
          this.setState({
              results: response.data,
              isLoaded: true,
          })
      })
  }

onFormInput(updateComponent){
    if( updateComponent === false){
      console.warn("COMPONENT SHOULD UPDATE IS FALSE")
    }
    axios.get(`http://localhost:9000/index`)
    .then(response => {
        this.setState({
            results: response.data,
        })
    })
  }

  onDelete(indexID){
    this.setState({
      results: {
          id: this.state.id,
          title: this.state.title,
          content: this.state.content
      }
  })
  const removedItem = this.state.results.filter(deletedItem => {return deletedItem.id !== indexID})
  this.setState({
    results: removedItem
})

console.log(removedItem)
  }


  componentDidUpdate(){
    console.warn("Method Called")
  }


  render(){
      const send = <FontAwesomeIcon icon={faSave}/>
      const edit = <FontAwesomeIcon icon={faEdit} />;
      const del = <FontAwesomeIcon icon={faTrashAlt} />;
      const isLoaded = this.state.isLoaded
      const results = this.state.results
      return(
          <div className="App">
            <h1 className="TestBranch">YOU'RE IN THE TESTE BRANCH OF GITHUB</h1>
              <NewNote
                isClicked={this.state.isClicked}
                clickInside={this.clickInside}
                clickOutside={this.clickOutside}
                onFormInput={this.onFormInput}
                send={send}
              />
              <main className="App-main" onClick={this.clickOutside} >
              <h2 className={`${isLoaded ? 'None' : 'Block'}`} >Loading... wait a minute</h2>
              
              <Card results={results} del={del} edit={edit} />
            
              </main>
          </div>
      )
  }
}

// FORM
// class FormInput extends React.Component{
//   constructor(props){
//       super(props)
//       this.handleChangeInput = this.handleChangeInput.bind(this)
//       this.handleChangeSubmitInput = this.handleChangeSubmitInput.bind(this)
//       this.clickForm = this.clickForm.bind(this)
//       this.state = {
//         id: Number(),
//         title: '',
//         content: '',
//         isEmpty: true,
//         componentShouldUpdate: false
//       }
//   }

//   clickForm(event){
//     const id = event.currentTarget.id
//     if(id !== "NoteForm"){
//       this.props.clickOutside()
//     }
//     this.props.clickInside()
//   }

//   handleChangeInput(event){
//       const {name, value} = event.target
//       this.setState({
//         [name]: value,
//         isEmpty: false
//       })
//   }

//   handleChangeSubmitInput(event){
//     event.preventDefault();
//       const CancelToken = axios.CancelToken;
//       const source = CancelToken.source();
//       const id = this.state.id
//       const isEmpty = this.state.isEmpty
//       const isEmptyCancel = isEmpty ? source.token : ''
//       axios.post(`http://localhost:9000/index/${id}`, {
//         params:{id},
//         title: this.state.title,
//         content: this.state.content
//       }, {
//         cancelToken: isEmptyCancel
//       })
//       .then( response =>{
//         response.data = {
//           params:{id},
//           title: this.state.title,
//           content: this.state.content
//         }
//         this.setState({
//           componentShouldUpdate: true,
//         }, ()=>{
//           const updateComponent = this.state.componentShouldUpdate
//           this.props.onFormInput(updateComponent)
//         })
//       })
//       source.cancel('Operation canceled by the user')
//       isEmpty ? console.log("Operation canceled") : console.log("Item added frontend")
//       this.setState({
//         title: '',
//         content: '',
//         isEmpty: true
//       })
//   }

//   render(){
//     const send = <FontAwesomeIcon icon={faSave}/>
//     const isClicked = this.props.isClicked

//       return(
//         <div id="NoteForm" className={`FormInput ${isClicked === false ? 'HideForm' : ''}`} onClick={this.clickForm} >
//         <form className="NewNote" onSubmit={this.handleChangeSubmitInput}>
//                 {/* <label> */}
//                   <input 
//                     type="text"
//                     name="title"
//                     value={this.state.title}
//                     title="colocar explicações"
//                     placeholder="Title"
//                     onChange={this.handleChangeInput}
//                     className={`Title ${isClicked === false ? 'None' : ''}`}
//                 />
//                 {/* </label> */}

//                 {/* <label className="FormLabel"> */}
//                 <textarea 
//                     className={`NoteItself ${isClicked === false ? 'HideForm' : ''}`}
//                     name="content"
//                     value={this.state.content}
//                     rows="10"
//                     cols="10"
//                     title="colocar explicações"
//                     placeholder="Take a note..."
//                     onChange={this.handleChangeInput}
//                 />
//                 {/* </label> */}
//                 <button 
//                   className={`Send ${isClicked === false ? 'None' : ''}`}
//                   type="submit">
//                     {send}
//                   </button>
//             </form>
//           </div>
//       )
//   }
// }

// Item - não usado mas não excluir
// class Item extends React.Component{
//   constructor(props){
//     super(props)
//     this.showMoreOrLessText = this.showMoreOrLessText.bind(this)
//     this.editingMode = this.editingMode.bind(this)
//     this.renderNote = this.renderNote.bind(this)
//     this.renderEditingNote = this.renderEditingNote.bind(this)
//     this.handleChange = this.handleChange.bind(this)
//     this.handleChangeEditSubmit = this.handleChangeEditSubmit.bind(this)
//     this.handleChangeDeleteSubmit = this.handleChangeDeleteSubmit.bind(this)
//     this.state={
//       id: props.note.id,
//       title: props.note.title,
//       content: props.note.content,
//       isEditing: false,
//       wordsToShow: 140,
//       lessThan: 139,
//       expanded: false
//     }
//   }

//   handleChange(event){
//     const {name, value} = event.target
//     this.setState({
//         [name]: value,
//     })
//   }

//   handleChangeEditSubmit(event){
//     const id = this.state.id
//     event.preventDefault()
//     axios.put(`http://localhost:9000/index/${id}`, {
//       title: this.state.title,
//       content: this.state.content
//     })
//     .then(response =>{
//       response.data={
//         title: this.state.title,
//         content: this.state.content
//       }
//     })
//     this.setState({ isEditing: false })
//   }

//   handleChangeDeleteSubmit(event){
//     const id = this.state.id
//     event.preventDefault();
//     axios.delete(`http://localhost:9000/index/${id}`)
//     .then( response => {
//       console.log(response)
//     })
//     const indexID = this.props.indexID
//     this.props.onDelete(indexID)
//   }

//   showMoreOrLessText(){
//     const wordsToShow = this.state.wordsToShow
//     const content = this.state.content
//     wordsToShow === 140 ? (
//       this.setState({wordsToShow: content.length, expanded: true})
//     ) : (
//       this.setState({wordsToShow: 140, expanded: false})
//     )
//   }
//   editingMode(){
//     this.setState({
//       isEditing: !this.state.isEditing
//     })
//   }

//   renderNote(){
//     const editar = <FontAwesomeIcon icon={faEdit} />;
//     const excluir = <FontAwesomeIcon icon={faTrashAlt} />;
//     const lessThan = this.state.lessThan
//     const more = <FontAwesomeIcon icon={faPlus}/>;
//     const less = <FontAwesomeIcon icon={faMinus}/>;
//     const showMessage = this.state.expanded ? less : more
//     const mensagemToShow = this.state.content.slice(0, this.state.wordsToShow)

//     // if wordsToShow is less then 140, don't show 'showMessage' otherwise show it
//     //  wordsToShow < 140 ? '' : showMessage

//     return(
//       <div id={this.state.id} key={this.state.id} className="Item">
//       <ul className="ItemContent">
//       <li className="ItemTitle Both">{this.state.title}</li>
//       <li className="ItemMessage Both">{this.state.content}</li>
//       {/* <li>{mensagemToShow}<a className="ShowMessage" onClick={this.showMoreOrLessText}>{showMessage}</a></li> */}
//       </ul>
//       <div className="NoteBtn">

//       <form className="DeleteForm" onClick={this.handleChangeDeleteSubmit}>
//         <label className="Delete">{excluir}
//             <input
//               className="InputDelete"
//               type="submit"
//               name="id"
//               value={this.state.id}
//               onChange={this.handleChange}
//             />
//         </label>
//       </form>

//       <button className="Edit" onClick={this.editingMode}>{editar}</button>
//       </div>
//       </div>
//     )
//   }

//   renderEditingNote(){
//     const save = <FontAwesomeIcon icon={faSave} />;
   
// return(
// <div key={this.state.id} className="Item">
// <form onSubmit={this.handleChangeEditSubmit}>

// <label className="EditTextLabelTitle">
// <input
//   className="EditTextInputTitle Both"
//   type="text"
//   name="title"
//   defaultValue={this.state.title}
//   onChange={this.handleChange}
// />
// </label>
    
// <label className="EditTextLabelMessage">
// <textarea
// className="EditTextInputMessage Both"
//   name="content"
//   defaultValue={this.state.content}
//   rows="10"
//   cols="10"
//   onChange={this.handleChange}
//   />
// </label>
// <div>
// <button className="Save">{save}</button>
// <button className="Close" onClick={this.editingMode}>close</button>
// </div>
// </form>
// </div>
// )
//   }

//   render(){
//     const isEditing = this.state.isEditing
//     const switchBetweenModes = isEditing ? this.renderEditingNote() : this.renderNote()
//     return(
//       switchBetweenModes
//     )
//   }
// }

export default App;
