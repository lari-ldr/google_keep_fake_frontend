import React from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt, faPlus, faMinus, faSave } from '@fortawesome/free-solid-svg-icons';
import './App.css';
// import Form from './Form.js';
// import Main from './Main.js';
// import Item from './Item.js';
// import DeleteItemForm from './DeleteItemForm.js';


// FORM
class FormInput extends React.Component{
  constructor(props){
      super(props)
      this.handleChangeInput = this.handleChangeInput.bind(this)
      this.handleChangeSubmitInput = this.handleChangeSubmitInput.bind(this)
      this.clickForm = this.clickForm.bind(this)
      this.state = {
        id: Number(),
        nomedogrupo: '',
        assunto: '',
        mensagem: '',
        intervalo: Number(),
        isEmpty: true,
        componentShouldUpdate: false
      }
  }

  clickForm(event){
    const id = event.currentTarget.id
    if(id !== "NoteForm"){
      this.props.clickOutside()
    }
    this.props.clickInside()
  }

  handleChangeInput(event){
      const {name, value} = event.target
      this.setState({
        [name]: value,
        isEmpty: false
      })
  }

  handleChangeSubmitInput(event){
    event.preventDefault();
      const CancelToken = axios.CancelToken;
      const source = CancelToken.source();
      const id = this.state.id
      const isEmpty = this.state.isEmpty
      const isEmptyCancel = isEmpty ? source.token : ''
      axios.post(`http://localhost:9000/index/${id}`, {
        params:{id},
        nomedogrupo: this.state.nomedogrupo,
        assunto: this.state.assunto,
        mensagem: this.state.mensagem,
        intervalo: this.state.intervalo
      }, {
        cancelToken: isEmptyCancel
      })
      .then( response =>{
        response.data = {
          params:{id},
          nomedogrupo: this.state.nomedogrupo,
          assunto: this.state.assunto,
          mensagem: this.state.mensagem,
          intervalo: this.state.intervalo
        }
        this.setState({
          componentShouldUpdate: true,
        }, ()=>{
          const updateComponent = this.state.componentShouldUpdate
          this.props.onFormInput(updateComponent)
        })
      })
      source.cancel('Operation canceled by the user')
      isEmpty ? console.log("Operation canceled") : console.log("Item added frontend")
      this.setState({
        nomedogrupo: '',
        mensagem: '',
        isEmpty: true
      })
  }

  render(){
    const send = <FontAwesomeIcon icon={faSave}/>
    const isClicked = this.props.isClicked

      return(
        <div id="NoteForm" className={`Form ${isClicked === false ? 'HideForm' : ''}`} onClick={this.clickForm} >
        <form onSubmit={this.handleChangeSubmitInput}>
                {/* <label> */}
                  <input 
                    type="text"
                    name="nomedogrupo"
                    value={this.state.nomedogrupo}
                    title="colocar explicações"
                    placeholder="Title"
                    onChange={this.handleChangeInput}
                    className={`Title ${isClicked === false ? 'None' : ''}`}
                />
                {/* </label> */}

                {/* <label className="FormLabel"> */}
                <textarea 
                    className={`NoteItself ${isClicked === false ? 'HideForm' : ''}`}
                    name="mensagem"
                    value={this.state.mensagem}
                    rows="10"
                    cols="10"
                    title="colocar explicações"
                    placeholder="Take a note..."
                    onChange={this.handleChangeInput}
                />
                {/* </label> */}
                <button 
                  className={`Send ${isClicked === false ? 'None' : ''}`}
                  type="submit">
                    {send}
                  </button>
            </form>
          </div>
      )
  }
}
// Item
class Item extends React.Component{
  constructor(props){
    super(props)
    this.showMoreOrLessText = this.showMoreOrLessText.bind(this)
    this.editingMode = this.editingMode.bind(this)
    this.renderNote = this.renderNote.bind(this)
    this.renderEditingNote = this.renderEditingNote.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleChangeEditSubmit = this.handleChangeEditSubmit.bind(this)
    this.handleChangeDeleteSubmit = this.handleChangeDeleteSubmit.bind(this)
    this.state={
      id: props.note.id,
      nomedogrupo: props.note.nomedogrupo,
      assunto: props.note.assunto,
      mensagem: props.note.mensagem,
      intervalo: props.note.intervalo,
      isEditing: false,
      componentShouldUpdate: false,
      itemsToShow: 140,
      expanded: false
    }
  }

  handleChange(event){
    const {name, value} = event.target
    this.setState({
        [name]: value,
    })
  }

  handleChangeEditSubmit(event){
    const id = this.state.id
    event.preventDefault()
    axios.put(`http://localhost:9000/index/${id}`, {
      nomedogrupo: this.state.nomedogrupo,
      assunto: this.state.assunto,
      mensagem: this.state.mensagem,
      intervalo: this.state.intervalo
    })
    .then(response =>{
      response.data={
        nomedogrupo: this.state.nomedogrupo,
        assunto: this.state.assunto,
        mensagem: this.state.mensagem,
        intervalo: this.state.intervalo
      }
    })
    this.setState({ isEditing: false })
  }

  handleChangeDeleteSubmit(event){
    const id = this.state.id
    event.preventDefault();
    axios.delete(`http://localhost:9000/index/${id}`)
    .then( response => {
      console.log(response)
    }, this.setState({
      componentShouldUpdate: true
    }, ()=>{
      const updateComponent = this.state.componentShouldUpdate
      this.props.onDelete(updateComponent)
    }))
  }


  showMoreOrLessText(){
    const itemsToShow = this.state.itemsToShow
    const mensagem = this.state.mensagem
    itemsToShow === 140 ? (
      this.setState({itemsToShow: mensagem.length, expanded: true})
    ) : (
      this.setState({itemsToShow: 140, expanded: false})
    )
  }

  editingMode(){
    this.setState({
      isEditing: true
    })
  }

  renderNote(){
    const editar = <FontAwesomeIcon icon={faEdit} />;
    const excluir = <FontAwesomeIcon icon={faTrashAlt} />;
    const more = <FontAwesomeIcon icon={faPlus}/>;
    const less = <FontAwesomeIcon icon={faMinus}/>;
    const showMessage = this.state.expanded ? less : more
    const mensagemToShow = this.state.mensagem.slice(0, this.state.itemsToShow)

    return(
      <div  key={this.state.id} className="Side-container">
      <ul className="Side-card">
      <li>Nome do Grupo: {this.state.nomedogrupo}</li>
      <li>Sobre: {this.state.assunto}</li>
      {/* <li>{this.state.mensagem}</li> */}
      <li>{mensagemToShow}<a className="ShowMessage" onClick={this.showMoreOrLessText}>{showMessage}</a></li>
      <li>Mandar mensagem a cada {this.state.intervalo} minuto</li>
      </ul>
<div>

<form onClick={this.handleChangeDeleteSubmit}>
  <label className="Delete">{excluir}
      <input
        className="InputDelete"
        type="submit"
        name="id"
        value={this.state.id}
        onChange={this.handleChange}
      />
  </label>
</form>

  <button className="Edit" onClick={this.editingMode}>{editar}</button>
</div>
</div>
    )
  }

  renderEditingNote(){
    const save = <FontAwesomeIcon icon={faSave} />;
   
return(
<div className="Side-container">
<form key={this.state.id} onSubmit={this.handleChangeEditSubmit} className="Side-card">
<label>
<input
  className="EditTextInput"
  type="text"
  name="nomedogrupo"
  defaultValue={this.state.nomedogrupo}
  onChange={this.handleChange}
/>
</label>
    
<label>
<textarea
  name="mensagem"
  defaultValue={this.state.mensagem}
  rows="10"
  cols="10"
  onChange={this.handleChange}
  />
</label>

<button className="Save">{save}</button>
</form>
</div>
)
  }

  render(){
    const isEditing = this.state.isEditing
    const switchBetweenModes = isEditing ? this.renderEditingNote() : this.renderNote()
    return(
      switchBetweenModes
    )
  }
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
          isEditing: false,
          componentShouldUpdate: false,
      });
  }

  editingForm(isEditing){
    console.log('hello from the other sideeee')
    console.log(isEditing)
  }

  clickOutside(){
    this.setState({isClicked: false})
    this.setState({isEditing: false})
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

  onDelete(updateComponent){
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

  componentDidUpdate(){
    console.warn("Method Called")
  }

  render(){
      const isLoaded = this.state.isLoaded
      const results = this.state.results
      const allResults = results.map((item)=>{
        return(
          <Item onDelete={this.onDelete} key={item.id} indexID={item.id} note={item} />
        )
      })
      return(
          <div className="App">
            <h1 className="TestBranch">YOU'RE IN THE TESTE BRANCH OF GITHUB</h1>
            {/* <Modal inside={this.inside} outside={this.outside} handleClickTest={this.handleClickTest}> */}
              <FormInput isClicked={this.state.isClicked} clickInside={this.clickInside} clickOutside={this.clickOutside} onFormInput={this.onFormInput} />
            {/* </Modal> */}
              <main className="App-main" onClick={this.clickOutside} >
              <h2 className={`${isLoaded ? 'None' : 'Block'}`} >Loading... wait a minute</h2>
              {allResults}
              </main>
          </div>
      )
  }
}

// function Child(){
//   const editar = <FontAwesomeIcon icon={faEdit} />;
//   return(
//     <div>
//       <button className="Edit">{editar}</button>
//     </div>
//   )
// }

export default App;
