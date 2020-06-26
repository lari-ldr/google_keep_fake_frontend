import React from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt, faPlus, faMinus, faSave } from '@fortawesome/free-solid-svg-icons';
import './App.css';
// import Form from './Form.js';
// import Main from './Main.js';
// import Item from './Item.js';
// import DeleteItemForm from './DeleteItemForm.js';

class Modal extends React.Component{
  constructor(props){
    super(props)
    this.teste = this.teste.bind(this)
    this.abc = this.abc.bind(this)
  }

  abc(event){
    const id = event.currentTarget.id
    if(id !== "pastel"){
      this.props.outside()
    }
    this.props.inside()
  }

  teste(event){
    const id = event.currentTarget.id
    console.log(id)
    // this.props.handleClickTest()
  }

  // handleOutsideClick(event){
  //   const eventID = event.target.id
  //   const id = "modal"
  //   if(eventID === id){
  //     // this.props.onclose => chama a função para fechar
  //     this.props.handleClickClose()
  //     // console.log("you are clicking to close me!!!")
  //   }
  // }

  render(){
    return(
      <div className={`Form`} id="pastel" onClick={this.abc}>
        {/* <button id="pastel" onClick={this.teste}>OPEN</button> */}
        {this.props.children}
      </div>
     
    )
  }
}
// FORM
class FormInput extends React.Component{
  constructor(props){
      super(props)
      this.handleChangeInput = this.handleChangeInput.bind(this)
      this.handleChangeSubmitInput = this.handleChangeSubmitInput.bind(this)
      // this.handleClick = this.handleClick.bind(this)
      this.teste = this.teste.bind(this)
      this.abc = this.abc.bind(this)
      this.state = {
        id: Number(),
        nomedogrupo: '',
        assunto: '',
        mensagem: '',
        intervalo: Number(),
        isEmpty: true,
        isClicked: false,
        componentShouldUpdate: false
      }
  }

  abc(event){
    const id = event.currentTarget.id
    if(id !== "pastel"){
      this.props.outside()
    }
    this.props.inside()
  }

  teste(event){
    const id = event.currentTarget.id
    // console.log(id)
    this.setState({isClicked: true}, ()=>{
      console.log(this.state.isClicked)
    })
    this.props.handleClickTest(id)
  }

  // handleClick(event){
  //   this.setState({
  //     // isClicked: !this.state.isClicked
  //     isClicked: true
  //   })
  //   console.log("is clicked form")
  // }

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
        // const teste = this.props.nomedogrupo
        // this.props.onFormInput(teste)
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

      return(
        // <div id="pastel" className="Form" onClick={this.abc}>
        // {/* <div className={`Form ${this.state.isClicked === false ? 'HideForm' : ''}`} > */}
        <form onSubmit={this.handleChangeSubmitInput}>
                {/* <label> */}
                  <input 
                    type="text"
                    name="nomedogrupo"
                    value={this.state.nomedogrupo}
                    title="colocar explicações"
                    placeholder="Title"
                    onChange={this.handleChangeInput}
                    // className={`Title ${this.state.isClicked === false ? 'None' : ''}`}
                    className={`Title`}
                />
                {/* </label> */}

                {/* <label className="FormLabel"> */}
                <textarea 
                    // className={`NoteItself ${this.state.isClicked === false ? 'HideForm' : ''}`}
                    className={`NoteItself`}
                    name="mensagem"
                    value={this.state.mensagem}
                    rows="10"
                    cols="10"
                    title="colocar explicações"
                    placeholder="Take a note..."
                    onChange={this.handleChangeInput}
                    // onClick={this.handleClick}
                />
                {/* </label> */}
                <button 
                  // className={`Send ${this.state.isClicked === false ? 'None' : ''}`}
                  className={`Send`}
                  type="submit">
                    {send}
                  </button>
            </form>
          // </div>
      )
  }
}
// Item
class Item extends React.Component{
  constructor(props){
    super(props)
    this.showMoreOrLess = this.showMoreOrLess.bind(this)
    this.state={
      id: props.note.id,
      nomedogrupo: props.note.nomedogrupo,
      assunto: props.note.assunto,
      mensagem: props.note.mensagem,
      intervalo: props.note.intervalo,
      editing: false,
      itemsToShow: 140,
      expanded: false
    }
  }

  showMoreOrLess(){
    const itemsToShow = this.state.itemsToShow
    const mensagem = this.state.mensagem
    itemsToShow === 140 ? (
      this.setState({itemsToShow: mensagem.length, expanded: true})
    ) : (
      this.setState({itemsToShow: 140, expanded: false})
    )
  }
  render(){
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
      <li>{mensagemToShow}<a className="ShowMessage" onClick={this.showMoreOrLess}>{showMessage}</a></li>
      <li>Mandar mensagem a cada {this.state.intervalo} minuto</li>
      </ul>

{/* DELETE FORM */}
{/* <form onClick={this.handleSubmitToDelete}>
  <label className="Delete">{excluir}
      <input className="InputDelete" type="submit" name="id" value={this.state.id} onChange={this.handleChangeToDelete} />
  </label>
</form> */}
{/* END OF THE DELETE FORM */}
{/* EDIT BUTTON */}
  {/* <button className="Edit" onClick={this.editAviso}>{editar}</button> */}
{/* EDIT BUTTON END */}
</div>
    )
  }
}
// APP IS THE PARENT
class App extends React.Component{
  constructor(props){
      super(props)
      this.onFormInput = this.onFormInput.bind(this)
      this.outside = this.outside.bind(this)
      this.inside = this.inside.bind(this)
      this.handleClickTest = this.handleClickTest.bind(this)
      this.state = ({
          results: [],
          isLoaded: false,
          isClicked: false,
          componentShouldUpdate: false,
      });
  }

  
  outside(){
    console.log("clicked outside")
  }

  inside(){
    console.log("clcicked inside")
  }

  handleClickTest(id){
    // se o id onde eu cliquei pe diferente tem q chamar outra função para fechar o form
    if( id === !id){
      console.log("salada")
      this.outside()
    }
    console.log(id)
    this.inside()
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

  componentDidUpdate(){
    console.warn("Method Called")
  }

  render(){
      const isLoaded = this.state.isLoaded
      const results = this.state.results
      const allResults = results.map((item)=>{
        return(
          <Item key={item.id} indexID={item.id} note={item}/>
        )
      })
      return(
          <div className="App" onClick={this.outside}>
            <h1 className="TestBranch">YOU'RE IN THE TESTE BRANCH OF GITHUB</h1>
            <Modal inside={this.inside} outside={this.outside} handleClickTest={this.handleClickTest}>
              <FormInput handleClickTest={this.handleClickTest} onFormInput={this.onFormInput} />
            </Modal>
              <main className="App-main" >
              <h2 className={`${isLoaded ? 'None' : 'Block'}`} >Loading... wait a minute</h2>
              {allResults}
              </main>
          </div>
      )
  }
}

export default App;
